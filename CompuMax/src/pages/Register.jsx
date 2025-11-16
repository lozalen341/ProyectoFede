import { useState } from "react";
import styles from "../assets/css/Register.module.css";
import { Link } from "react-router-dom";

function Register() {
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
                {/* Panel Izquierdo */}
                <div className={styles.authBrand}>
                    <div className={styles.logo}>
                        <img src="/CompuMax-blanco.png" alt="CompuMax-logo" />
                    </div>
                    <p>Servicio técnico profesional con sistema de turnos online</p>

                    <div className={styles.brandFeatures}>
                        <div className={styles.brandFeature}>
                            <div className={styles.featureCheck}>
                                <img src="/src/assets/img/icons/features-icon-tick.svg" alt="tick" />
                            </div>
                            <span>Técnicos certificados</span>
                        </div>

                        <div className={styles.brandFeature}>
                            <div className={styles.featureCheck}>
                                <img src="/src/assets/img/icons/features-icon-tick.svg" alt="tick" />
                            </div>
                            <span>Turnos sin espera</span>
                        </div>

                        <div className={styles.brandFeature}>
                            <div className={styles.featureCheck}>
                                <img src="/src/assets/img/icons/features-icon-tick.svg" alt="tick" />
                            </div>
                            <span>Seguimiento en tiempo real</span>
                        </div>

                        <div className={styles.brandFeature}>
                            <div className={styles.featureCheck}>
                                <img src="/src/assets/img/icons/features-icon-tick.svg" alt="tick" />
                            </div>
                            <span>Garantía incluida</span>
                        </div>
                    </div>
                </div>

                {/* Panel Derecho */}
                <div className={styles.authForm}>
                    <h2 className={styles.formTitle}>Crear cuenta</h2>
                    <p className={styles.formSubtitle}>Completa tus datos para comenzar</p>

                    <form>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel} htmlFor="name">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className={styles.formInput}
                                    placeholder="Juan"
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.formLabel} htmlFor="lastname">
                                    Apellido
                                </label>
                                <input
                                    type="text"
                                    id="lastname"
                                    className={styles.formInput}
                                    placeholder="Pérez"
                                    required
                                />
                            </div>
                        </div>

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
                            <p className={styles.formHelper}>Mínimo 8 caracteres</p>
                        </div>

                        <button type="submit" className="btn-primary">
                            Crear Cuenta
                        </button>

                        <div className={styles.formFooter}>
                            ¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;