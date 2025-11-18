import { useState } from "react";
import styles from "../../assets/css/Register.module.css";
import { Link } from "react-router-dom";
import AuthBrand from '../../components/AuthBrand';

function Register() {
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [type] = useState("user"); // default user

    const handleRegister = async (e) => {
        e.preventDefault();
        const API_KEY = import.meta.env.VITE_API_KEY;

        try {
            const res = await fetch('http://localhost:3000/user/register', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": API_KEY
                },
                body: JSON.stringify({ name, lastname, email, password, type })
            });
            const data = await res.json();

            //usuario creado
            if (res.status == 201) {
                setMessageType("success");
                setMessage(data.message || "Usuario registrado correctamente")
            }

            //email ya registrado
            if (res.status == 409) {
                setMessageType("error");
                setMessage(data.error || "El email ya esta registrado");
            }

            if (res.status == 400 || res.status == 401 || res.status == 500) {
                setMessageType("error");
                setMessage(data.error || "Error en el registro");
            }
        } catch (error) {
            console.log("Error en el registro: ", error);
        }
    };

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
                <div className={styles.authForm}>
                    <h2 className={styles.formTitle}>Crear cuenta</h2>
                    <p className={styles.formSubtitle}>Completa tus datos para comenzar</p>

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

                    <form onSubmit={handleRegister}>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel} htmlFor="name">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    className={styles.formInput}
                                    placeholder="Juan"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.formLabel} htmlFor="lastname">Apellido</label>
                                <input
                                    type="text"
                                    id="lastname"
                                    className={styles.formInput}
                                    placeholder="Pérez"
                                    value={lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.formLabel} htmlFor="email">Correo electrónico</label>
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
                            <label className={styles.formLabel} htmlFor="password">Contraseña</label>
                            <input
                                type="password"
                                id="password"
                                className={styles.formInput}
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <p className={styles.formHelper}>Mínimo 8 caracteres</p>
                        </div>

                        <button type="submit" className="btn-primary">Crear Cuenta</button>

                        <div className={styles.formFooter}>
                            ¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link>
                        </div>
                    </form>
                </div>

                <AuthBrand side="right" />
            </div>
        </div>
    );
}

export default Register;
