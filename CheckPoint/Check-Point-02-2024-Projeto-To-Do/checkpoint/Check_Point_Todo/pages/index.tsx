//nomes: Larissa Araújo -RM - 96496
//nomes: Luna Faustino - RM - 552473
//nomes: Murillo Ferreira - RM - 553315
//nomes: Pedro Luiz - RM - 553874

"use client";
import { useRouter } from "next/router";
import { useState } from "react";
import "./style.css";


const LoginPage: React.FC = () => {

    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (username === "admin" && password === "admin"){
            localStorage.setItem("isLoggedIn", "True");
            localStorage.setItem("error","0");
            router.push("/dashboard");
        }
        else{
            const erro = localStorage.getItem("error")

            if (!erro || (erro == "0")){
                localStorage.setItem("error","1")
            }
            setError("Usuário ou senha incorretos.");
        }
    }   
    return(
        <>
            <h1>Login</h1>
            <form>
                <label>Usuário:
                    <input type="text" placeholder="Usuário" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <br />
                <label>Senha:
                    <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <br />
                {error && <span>{error}</span>}
                <br />
                <button onClick={handleLogin}>Login</button>

            </form>
        </>
    )
}

export default LoginPage;