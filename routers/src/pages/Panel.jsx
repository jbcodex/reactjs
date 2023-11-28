import { useState } from "react"
import { useFetch } from "../../hooks/useFetch"
import "./Panel.css"
const Panel = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [information, setInformation] = useState("")
  const url = "http://localhost:3000/products"
  const { httpConfig } = useFetch(url)

  const handleSubmit = (e)=>{
    e.preventDefault()
    const product ={
      name,
      price,
      description,
      information
    }
    httpConfig(product, "POST")
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
          <input type="text" name="information" value={information} onChange={(e)=>setInformation(e.target.value)} />
        </label>
        <input className="btn" type="submit" value="Cadastrar" />
      </form>
    </div>
  )
}

export default Panel