import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [config, setConfig] = useState(null)
  const [method, setMethod] = useState(null)
  const [callFetch, setCallFetch] = useState(false)

  const httpConfig = (data, method) =>{
    
    if(method === "POST"){
        setConfig({
            method,
            headers:{"Content-Type" : "application/json"},
            body:JSON.stringify(data)
        })
        setMethod(method)
    }
  }

  useEffect(() => {
    let jsonData;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Erro ao buscar dados");
        }
        jsonData = await response.json();
        console.log("Data do Fetch: " + jsonData)
      } catch (error) {
        setError("Erro na busca de dados");
      } finally {
        setData(jsonData);
      }
    };
    fetchData();
  }, [url, error, callFetch]);


  useEffect(()=>{
    const httpRequest = async()=>{
        if(method === "POST"){
            let jsonOptions = [url, config]
            const response = await fetch(...jsonOptions)
            const jsonData = await response.json()
            setCallFetch(jsonData)
        }
    }
    httpRequest()
  }, [config, url, method])

  return {
    data,
    httpConfig
  };
};
