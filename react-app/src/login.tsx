import { useState } from "react"
import { useNavigate } from "react-router-dom"

import "./login.css"


export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (username == "admin" && password == "admin") {
            navigate("/dashboard")
        } else {
            setError("identifiant ou mot de passe sont incorrectes !")
        }
    }
    return (
        <form className="d-flex flex-column" onSubmit={handleSubmit}>
            <div className="mb-3">
                <h3 className="text-danger">{error}</h3>
            </div>
            <div className="mb-3">
                <label className="form-label">Identifiant</label>
                <input type="text" className="form-control" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
            </div>
            <div className="mb-3">
                <label className="form-label">Mot de passe</label>
                <input type="password" className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <button type="submit" className="btn btn-dark">S'authentifier</button>
        </form>
    )
}