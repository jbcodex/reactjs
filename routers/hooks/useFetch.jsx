import { useEffect, useState } from "react";
export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [config, setConfig] = useState(null)
  const [method, setMethod] = useState(null)
  const [callFetch, setCallFetch] = useState(null)

  const httpConfig = (data, method) =>{
    if(method === "POST"){
      console.log(method)
      setConfig({
        method,
        headers:{"Content-Type" : "application/json"},
        body:JSON.stringify(data)
      })
      setMethod(method)
      
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Erro no carregamento dos dados");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, callFetch]);

  useEffect(()=>{
    const httpRequest = async ()=>{
     if(method === "POST"){
      let fetchOptions = [url, config]
      const response = await fetch(...fetchOptions)
      const jsonData = response.json()
      setCallFetch(jsonData)
     }
    }
    httpRequest()
  }, [url, config, method])
  return { data, error, loading, httpConfig };
};
