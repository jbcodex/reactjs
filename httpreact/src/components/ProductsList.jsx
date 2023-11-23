/* eslint-disable react/prop-types */
const ProductsList = ({product}) => {
  return (
    <div>
            <ul>
                <li><b>Produto:</b> {product.name} - <b>Preço:</b> R$ {product.price}</li>
            </ul>
    </div>
  )
}

export default ProductsList