import { useEffect, useState } from "react";
export const useFetch = (url) =>{
    const [ data, setData ] = useState(null)
    const [ config, setConfig ] = useState(null)
    const [ method, setMethod ] = useState(null)
    const [ callFetch, setCallFetch ] = useState(false)

    const httpConfig = (data, method) =>{
        if(method === "POST"){
            setConfig({
                method,
                headers:{
                    "Content-Type" : "application/json"
                },
                body:JSON.stringify(data)
            })
            setMethod(method)
        }
    }

    //Hook de leitura
    useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetch(url)
            const jsonData = await response.json()
            setData(jsonData)
        }
        fetchData()
    }, [url, callFetch])//callFetch monitorado para chamar novamente fetch a cada cadastro

    useEffect(()=>{
        const httpRequest = async ()=>{
            if(method === "POST"){
                let fetchOptions = [url, config]
                const response = await fetch(...fetchOptions)
                const jsonData = await response.json()
                setCallFetch(jsonData)
            }
        }
        httpRequest()
    }, [config, method, url])
    return{ data, httpConfig }

}