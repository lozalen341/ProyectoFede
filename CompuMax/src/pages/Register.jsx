import { useState } from "react";
import "../assets/css/registerStyle.css";
import { Link } from "react-router-dom";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="auth-container">
                {/* Panel Izquierdo */}
                <div className="auth-brand">
                    <h1>CompuMax</h1>
                    <p>Servicio técnico profesional con sistema de turnos online</p>

                    <div className="brand-features">
                        <div className="brand-feature">
                            <div className="feature-check">
                                <img
                                    src="/src/assets/img/icons/features-icon-tick.svg"
                                    alt="tick"
                                />
                            </div>
                            <span>Técnicos certificados</span>
                        </div>
                        <div className="brand-feature">
                            <div className="feature-check">
                                <img
                                    src="/src/assets/img/icons/features-icon-tick.svg"
                                    alt="tick"
                                />
                            </div>
                            <span>Turnos sin espera</span>
                        </div>
                        <div className="brand-feature">
                            <div className="feature-check">
                                <img
                                    src="/src/assets/img/icons/features-icon-tick.svg"
                                    alt="tick"
                                />
                            </div>
                            <span>Seguimiento en tiempo real</span>
                        </div>
                        <div className="brand-feature">
                            <div className="feature-check">
                                <img
                                    src="/src/assets/img/icons/features-icon-tick.svg"
                                    alt="tick"
                                />
                            </div>
                            <span>Garantía incluida</span>
                        </div>
                    </div>
                </div>

                {/* Panel Derecho */}
                <div className="auth-form">
                    <h2 className="form-title">Crear cuenta</h2>
                    <p className="form-subtitle">Completa tus datos para comenzar</p>

                    <form>
                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label" htmlFor="name">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="form-input"
                                    placeholder="Juan"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="lastname">
                                    Apellido
                                </label>
                                <input
                                    type="text"
                                    id="lastname"
                                    className="form-input"
                                    placeholder="Pérez"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="email">
                                Correo electrónico
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="form-input"
                                placeholder="tu@email.com"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="password">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="form-input"
                                placeholder="••••••••"
                                required
                            />
                            <p className="form-helper">Mínimo 8 caracteres</p>
                        </div>

                        <div className="form-check">
                            <input type="checkbox" id="terms" required />
                            <label htmlFor="terms">
                                Acepto los <a href="#">términos y condiciones</a>
                            </label>
                        </div>

                        <button type="submit" className="btn-primary">
                            Crear Cuenta
                        </button>

                        <div className="form-footer">
                            ¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default App;
