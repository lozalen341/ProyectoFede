import React, { useState } from "react";
import styles from "../../assets/css/Login.module.css";
import { Link } from "react-router-dom";
import AuthBrand from '../../components/AuthBrand'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        const API_KEY = import.meta.env.REACT_APP_API_KEY;

        try {
            const res = await fetch('http://localhost:3000/user/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "api-key": API_KEY
                },
                body: JSON.stringify({ email, password })
            });
            const result = await res.json();
            console.log(result);
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

                    <form>
                        <div className={styles.formGroup}>
                            <label className={styles.formLabel} htmlFor="email">
                                Correo electrónico
                            </label>
                            <input
                                type="email"
                                id="email"
                                className={styles.formInput}
                                placeholder="tu@email.com"
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
                                required
                            />
                        </div>

                        <button type="button" onClick={handleLogin}>
                            Iniciar Sesión
                        </button>


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