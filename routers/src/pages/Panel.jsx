import { useState } from "react"
import "./Panel.css"
const Panel = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [info, setInfo] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()
    const product ={
      name,
      price,
      description,
      info
    }
  }

  
  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          <span>Nome Produto</span>
          <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
        </label>
        <label>
          <span>Preço</span>
          <input type="text" name="price" value={price} onChange={(e)=>setPrice(e.target.value)} />
        </label>
        <label>
          <span>Descrição</span>
          <input type="text" name="description" value={description} onChange={(e)=>setDescription(e.target.value)} />
        </label>
        <label>
          <span>Info adicional</span>
          <input type="text" name="info" value={info} onChange={(e)=>setInfo(e.target.value)} />
        </label>
        <input className="btn" type="submit" value="Cadastrar" />
      </form>
    </div>
  )
}

export default Panel