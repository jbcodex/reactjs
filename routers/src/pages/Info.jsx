import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import { Link } from "react-router-dom"

const Info = () => {
    const {id} = useParams()
    const url = "http://localhost:3000/products/" + id
    const {data: i, loading, error} = useFetch(url)
  return (
   <>
    {loading && <p>Carregando dados...</p> }
    {error && <p>{error}</p>}
    {i && (
        <div>
          {i.information} <br />
          <Link to={`/products/${id}`}>Voltar</Link>
        </div>
    )}
   </>
  )
}

export default Info