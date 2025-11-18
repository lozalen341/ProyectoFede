import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../assets/css/Login.module.css";
import { Link } from "react-router-dom";
import AuthBrand from '../../components/AuthBrand'

function Login() {
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const naviGate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const API_KEY = import.meta.env.VITE_API_KEY;

        try {
            const res = await fetch('http://localhost:3000/user/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": API_KEY
                },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();

            if(res.status == 200){
                setMessageType("success");
                setMessage(data.message || "Se inicio sesion correctamente correctamente");

                setTimeout(()=>{
                    naviGate("/admin/turnos");
                }, "1500")
                
            }
            if(res.status == 401){
                setMessageType("error");
                setMessage(data.error || "El email o la contraseña son incorrectos");
            }


        } catch (error) {
            console.log("Error en el login: ", error)
        }
    }

    return (
        <div style={{
            background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 50%, var(--primary-light) 100%)',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
        }}>
            <div className={styles.authContainer}>
                {/* Panel izquierdo */}
                <AuthBrand side="left" />

                {/* Panel derecho */}
                <div className={styles.authForm}>
                    <h2 className={styles.formTitle}>Bienvenido de vuelta</h2>
                    <p className={styles.formSubtitle}>
                        Ingresa tus datos para acceder a tu cuenta
                    </p>

                    {/* ---------- Mensaje ----------- */}
                    {message && (
                        <div
                            style={{
                                backgroundColor: messageType === "success" ? "#4caf50" : "#f44336",
                                color: "white",
                                padding: "10px",
                                borderRadius: "6px",
                                marginBottom: "15px",
                                textAlign: "center",
                                fontWeight: "bold"
                            }}
                        >
                            {message}
                        </div>
                    )}

                    <form onSubmit={handleLogin}>
                        <div className={styles.formGroup}>
                            <label className={styles.formLabel} htmlFor="email">
                                Correo electrónico
                            </label>
                            <input
                                type="email"
                                id="email"
                                className={styles.formInput}
                                placeholder="tu@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.formLabel} htmlFor="password">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                id="password"
                                className={styles.formInput}
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="btn-primary">Iniciar Sesión</button>

                        <div className={styles.formFooter}>
                            ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Login;