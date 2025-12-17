import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

function Login() {
    
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate()

    const envio = (e) => {
        e.preventDefault()
        if(email && password) {
            navigate("/products")
        }
    }

    return(
        <div>
            <h1>INICIAR SESION</h1>
            <form onSubmit={envio}>
                <input type="email" placeholder="escriba_su_email" value={email} required onChange={(e) => setEmail(e.target.value)}></input>
                <br />
                <input type="password" placeholder="escriba_su_contraseña" value={password} required onChange={(e) => setPassword(e.target.value)}></input>
                <br />
                <button type="submit">INGRESAR</button>
                <p>¿no tienes cuenta? <Link to="/register">regístrate aquí</Link></p>
            </form>
        </div>
    )
}
export default Login