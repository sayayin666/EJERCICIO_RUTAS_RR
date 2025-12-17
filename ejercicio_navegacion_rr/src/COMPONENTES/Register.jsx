import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const enxvios = (e) => {
        e.preventDefault()
        if(name && email && password) {
            navigate("/login");
        }
    }

    return(
        <div>
            <h1>REGISTRATE</h1>
            <form onSubmit={enxvios}>
                <input type="text" placeholder="esciba_su_nombre" value={name} required onChange={(e) => setName(e.target.value)}></input>
                <input type="email" placeholder="escriba_su_email" value={email} required onChange={(e) => setEmail(e.target.value)}></input>
                <input type="password" placeholder="esciba_su_contraseña" value={password} required onChange={(e) => setPassword(e.target.value)}></input>
                <button type="submit">REGISTRARSE</button>
            </form>
            <p>ya tienes una cuenta? <Link to="/login">inicia sesion aquí</Link></p>
        </div>
    )
}
export default Register