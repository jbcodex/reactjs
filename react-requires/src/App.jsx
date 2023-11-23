import "./App.css";
import { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";

function App() {
  const url = "http://localhost:3000/products";
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // useEffect(() => {
  //   try {
  //     const fetchData = async () => {
  //       const response = await fetch(url);
  //       const jsonData = await response.json();
  //       setProducts(jsonData);
  //     };
  //     fetchData();
  //   } catch (error) {
  //     console.error("Erro ao buscar os dados!", error);
  //   }
  // }, []);

  const { data: items } = useFetch(url)
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name,
      price,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "Application/Json",
      },
      body: JSON.stringify(product),
    });

    const adedProduct = await res.json();
    setProducts((prevProd) => [...prevProd, adedProduct]);
    setName("");
    setPrice("");
  };

  return (
    <>
      <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
      <div className="cadprod">
        <form onSubmit={handleSubmit}>
          <label>
            Nome Produto:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço Produto:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <input type="submit" value="Cadastrar" />
        </form>
      </div>
    </>
  );
}

export default App;
