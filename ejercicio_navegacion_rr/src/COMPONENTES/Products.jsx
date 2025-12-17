import { useNavigate } from "react-router-dom"

function Products() {

    const productos = [
        {id: 1, name: "audifonos", precio: 1000},
        {id: 2, name: "computadora", precio: 8000},
        {id: 3, name: "telefono_movil", precio: 3000},
        {id: 4, name: "TV", precio: 5000},
        {id: 5, name: "lavadora", precio: 9000},
        {id: 6, name: "H.microhondas", precio: 4000}
    ];

    const navigate = useNavigate()
    
    return(
        <div>
            <h2>lista de productos</h2>
            <ul>
                {productos.map((p) => (
                    <li key={p.id}>
                        <p>{p.name}</p> - ${p.precio} {"  "}
                        <button onClick={() => navigate(`/products/${p.id}`)}>VER DETALLES</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Products