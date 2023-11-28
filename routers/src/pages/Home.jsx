import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const url = "http://localhost:3000/products";
  const { data: products, error, loading } = useFetch(url);
  return (
    <>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul className="products">
          {products &&
            products.map((product) => (
              <li key={product.id}>
                <h3>{product.name}</h3><br />
                <b>R$:</b> {product.price} <br />
                <Link to={`/products/${product.id}`}>Detalhes</Link>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

export default Home;
