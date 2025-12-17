import { Link } from "react-router-dom"

function Notfound() {
    return(
        <div>
            <h1>pagina no encontrada</h1>
            <Link to="/">regresar a inicio</Link>
        </div>
    )
}
export default Notfound