import './App.css';
import { useEffect, useState } from 'react';
import ProductsList from './components/ProductsList';
import Form from './components/Form';

function App() {
  const url = "http://localhost:3000/products";

  const [products, setProducts] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  //Resgatando dados da API
  useEffect(() => {
    //Criando uma função assíncrona
    const fetchData = async()=>{
      try {
          //Armazenando o valor do fatch numa variável
          const response = await fetch(url)

          //Estruturando os dados como json na variável dataJson
          const dataJson = await response.json()

          //Alterando os dados de products no useState
          setProducts(dataJson)

      } catch (error) {
        console.error("Impossível buscar dados!", error)
      }
    }

    //Invocando a variável
    fetchData()
  }, []);

  //Enviando formulários
  const handleSubmit = async (e)=>{
    e.preventDefault();

    const product = {
      name,
      price
    }

    try {
      const res = await fetch(url, {
        method:"POST",
        headers:{
          "Content-Type" : "application/Json"
        },
        body: JSON.stringify(product)
      });

      //Carregamento dinâmico
      const addedProducts = await res.json()
      setProducts((prevProducts)=>[...prevProducts, addedProducts])
      setName("")
      setPrice("")
    } catch (error) {
      console.error("Não foi possível cadastrar os dados", error)
    }
    
  }

  return (
    <>
     <h2>Lista de Produtos </h2>
     <div className="ProductsList">
      {products.map((product) =>(
          <ProductsList 
            key={product.id} 
            product={product}
          />
     ))}
     </div>
     <div className="addProduct">
      <Form 
          handleSubmit={handleSubmit} 
          products={products} 
          setName={setName} 
          setPrice={setPrice} 
        />
     </div>
    </>
  )
}

export default App
