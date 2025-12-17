import { useParams, useNavigate } from "react-router-dom"



function ProductDetail({añadircar}) {

    const products = [
        {id: 1, name: "audifonos", precio: 1000},
        {id: 2, name: "computadora", precio: 8000},
        {id: 3, name: "telefono_movil", precio: 3000},
        {id: 4, name: "TV", precio: 5000},
        {id: 5, name: "lavadora", precio: 9000},
        {id: 6, name: "H.microhondas", precio: 4000}
    ];

    const { id } = useParams()

    const navigate = useNavigate()

    const product = products.find((z) => {
        z.id == Number(id)
    })

    if(!product) {
        <h1>producto no encontrado</h1>
        return;
    }
    
    return(
        <div>
            <h1>{product.name}</h1>
            <p>el precio es de: ${product.precio}</p>
            <p>con ID: {product.id}</p>
            <button onClick={() => {
                añadircar(product)
                navigate("/cart")
            }}>agregar al Carrito</button>
        </div>
    )
}
export default ProductDetail