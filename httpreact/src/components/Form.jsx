/* eslint-disable react/prop-types */

const Form = ({handleSubmit, products, setName, setPrice}) => {
  return (
    <div>
        <h3>Cadastre um novo produto</h3>
        <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          <span>Produto:</span>
          <input 
              type="text" 
              value={products.name} 
              name="name" 
              onChange={(e) => setName(e.target.value)} 
          />
        </label>
        <label>
          <span>Preço:</span>
          <input 
              type="number" 
              value={products.price} 
              name="price" 
              onChange={(e) => setPrice(e.target.value)} 
          />
        </label>
        <input className="bt" type="submit" value="Cadastrar item" onClick={handleSubmit} />
      </form>
    </div>
  )
}

export default Form