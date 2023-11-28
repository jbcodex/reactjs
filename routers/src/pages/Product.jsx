import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import { Link } from "react-router-dom"
import "./Product.css"

const Product = () => {
    const {id} = useParams()
    const url = "http://localhost:3000/products/" + id
    const {data: prod, loading, error} = useFetch(url)

  return (
    <>
       {loading && <p>Carregando dados...</p>}
        {error && <p>Ocorreu um erro</p> }
        {prod &&(
            <div className="boxProduct">
                <div className="prod">
                  <h2>{prod.name}</h2>
                  <h3>R$: {prod.price}</h3>
                  <p>{prod.description}</p>
                  <Link to={`/products/${prod.id}/info`}>Mais informações</Link>
                </div>
            </div>
        )}
       
    </>
  )
}

export default Product