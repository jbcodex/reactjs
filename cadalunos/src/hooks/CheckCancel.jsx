import { useState } from "react"
 export const CheckCancel = ()=>{
    const [cancelled, setCanceled] = useState(false)
    const checkIfIsCancelled = () =>{
        if(cancelled)return
    }
    return{
        checkIfIsCancelled
    }
 }
 