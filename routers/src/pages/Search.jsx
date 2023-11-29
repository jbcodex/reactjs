import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
const Search = () => {
  const [SearchParams] = useSearchParams()
  const url = "http://localhost:3000/products?" + SearchParams;
  const {data: item, loading, error} = useFetch(url)
  return (
   <>
   {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul className="products">
          {item &&
            item.map((product) => (
              <li key={product.id}>
                <h3>{product.name}</h3><br />
                <b>R$:</b> {product.price} <br />
                <Link to={`/products/${product.id}`}>Detalhes</Link>
              </li>
            ))}
        </ul>
      )}</>
  )
}

export default Search