import { useEffect, useState } from "react";
export const useFetch = (url) =>{
    const [ data, setData] = useState(null)
    const [ config, setConfig ] = useState(null) //Configurações gerais de Método e Headers
    const [ method, setMethod ] = useState(null) //
    const [ callFetch, setCallFetch ] = useState(false)

    const httpConfig = (data, method)=>{
        if(method === "POST"){
            setConfig({
                method,
                headers:{
                    "Content-Type" : "application/json"
                },
                body:JSON.stringify(data)
            });
            setMethod(method)
            console.log("1º - HttpConfig")
        }
    }

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch(url)
            const jsonData = await response.json()
            setData(jsonData)
        }
        fetchData()
        console.log("2º - FetchData")
    }, [url, callFetch])

    useEffect(()=>{
       const httpRequest = async ()=>{
        if(method === "POST"){
            let fetchOptions = [url, config]
            const res = await fetch(...fetchOptions)
            const json = await res.json()
            setCallFetch(json)
        }
       }
       httpRequest()
       console.log("3º - Http Request")
    }, [config, method, url])
    return { data, httpConfig }
}