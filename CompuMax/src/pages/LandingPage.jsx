import { useState } from "react";
import "../assets/css/LandingStyle.css";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Header */}
      <header>
        <nav>
          <div className="logo">
            <img src="/CompuMax-blanco.png" alt="CompuMax-logo" />
          </div>
          <ul className="nav-links">
            <li>
              <a href="#servicios">Servicios</a>
            </li>
            <li>
              <a href="#como-funciona">Cómo Funciona</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
          <Link to="/login" className="cta-button">
            Iniciar Sesión
          </Link>
        </nav>
      </header>

      {/* Hero Section  */}
      <section className="hero">
        <div className="hero-content">
          <h1>Reparación Profesional de Equipos Tecnológicos</h1>
          <p>
            Servicio técnico especializado con sistema de turnos online. Rápido,
            confiable y transparente.
          </p>
          <div className="hero-buttons">
            <a href="#" className="btn-primary">
              Solicitar Turno
            </a>
            <a href="#servicios" className="btn-secondary">
              Ver Servicios
            </a>
          </div>
        </div>
      </section>

      {/* Services Section  */}
      <section className="services" id="servicios">
        <div className="container">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">
            Soluciones completas para todos tus equipos electrónicos
          </p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <img
                  src="/src/assets/img/icons/service-icon-reparacion.svg"
                  alt="repacion-de-computadoras"
                />
              </div>
              <h3>Reparación de Computadoras</h3>
              <p>
                Diagnóstico y reparación de PC y laptops. Hardware y software.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img
                  src="/src/assets/img/icons/service-icon-celulares.svg"
                  alt="reparacion-de-celulares"
                />
              </div>
              <h3>Dispositivos Móviles</h3>
              <p>
                Reparación de smartphones y tablets. Pantallas, baterías y más.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img
                  src="/src/assets/img/icons/service-icon-mantenimiento.svg"
                  alt="mantenimiento-preventivo"
                />
              </div>
              <h3>Mantenimiento Preventivo</h3>
              <p>Limpieza, optimización y actualización de sistemas.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img
                  src="/src/assets/img/icons/service-icon-diskette.svg"
                  alt="reparacion-de-diskette"
                />
              </div>
              <h3>Recuperación de Datos</h3>
              <p>Recuperamos tu información de discos dañados.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img
                  src="/src/assets/img/icons/service-icon-candado.svg"
                  alt="reparacion-de-candado"
                />
              </div>
              <h3>Seguridad Informática</h3>
              <p>Protección contra virus, malware y amenazas digitales.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img
                  src="/src/assets/img/icons/service-icon-software.svg"
                  alt="reparacion-de-software"
                />
              </div>
              <h3>Instalación de Software</h3>
              <p>
                Instalación y configuración de sistemas operativos y programas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section  */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">¿Por Qué Elegir CompuMax?</h2>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <img
                  src="/src/assets/img/icons/features-icon-tick.svg"
                  alt="reparacion-de-tick"
                />
              </div>
              <div className="feature-content">
                <h4>Técnicos Certificados</h4>
                <p>Personal capacitado y con experiencia comprobada</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <img
                  src="/src/assets/img/icons/features-icon-clock.svg"
                  alt="reparacion-de-clock"
                />
              </div>
              <div className="feature-content">
                <h4>Sistema de Turnos</h4>
                <p>Reserva online sin esperas innecesarias</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <img
                  src="/src/assets/img/icons/features-icon-shield.svg"
                  alt="reparacion-de-shield"
                />
              </div>
              <div className="feature-content">
                <h4>Garantía Incluida</h4>
                <p>Todos nuestros servicios tienen garantía de 90 días</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <img
                  src="/src/assets/img/icons/features-icon-seguimiento.svg"
                  alt="reparacion-de-seguimiento"
                />
              </div>
              <div className="feature-content">
                <h4>Seguimiento Online</h4>
                <p>Verifica el estado de tu reparación en tiempo real</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <img
                  src="/src/assets/img/icons/features-icon-money.svg"
                  alt="reparacion-de-money"
                />
              </div>
              <div className="feature-content">
                <h4>Precios Transparentes</h4>
                <p>Presupuestos claros sin costos ocultos</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <img
                  src="/src/assets/img/icons/features-icon-thunder.svg"
                  alt="reparacion-de-thunder"
                />
              </div>
              <div className="feature-content">
                <h4>Servicio Rápido</h4>
                <p>La mayoría de reparaciones en 24-48 horas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works  */}
      <section className="how-it-works" id="como-funciona">
        <div className="container">
          <h2 className="section-title">Cómo Funciona</h2>
          <p className="section-subtitle">Proceso simple en 4 pasos</p>

          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h4>Registrate</h4>
              <p>Crea tu cuenta en minutos de forma gratuita</p>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <h4>Solicita Turno</h4>
              <p>Elige fecha, horario y tipo de servicio</p>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <h4>Visita CompuMax</h4>
              <p>Trae tu equipo en el horario reservado</p>
            </div>

            <div className="step">
              <div className="step-number">4</div>
              <h4>Recibe tu Equipo</h4>
              <p>Te notificamos cuando esté listo</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section  */}
      <section className="cta-section">
        <div className="container">
          <h2>¿Listo para Reparar tu Equipo?</h2>
          <p>Reserva tu turno ahora y deja tu tecnología en manos expertas</p>
          <a href="#" className="btn-primary">
            Solicitar Turno Ahora
          </a>
        </div>
      </section>

      {/* Footer  */}
      <footer id="contacto">
        <div className="footer-content">
          <div className="footer-section">
            <h3>CompuMax</h3>
            <p>
              Servicio técnico profesional para todos tus equipos electrónicos.
            </p>
          </div>

          <div className="footer-section">
            <h3>Contacto</h3>

            <p className="footer-item">
              <img 
                src="/src/assets/img/icons/footer-icon-mail.svg"
                alt="Email"
                className="footer-icon" />
              compumax1411@gmail.com
            </p>

            <p className="footer-item">
              <img
                src="/src/assets/img/icons/footer-icon-telefono.svg"
                alt="Teléfono"
                className="footer-icon"
              />
              +54 11 2733-4694
            </p>

            <p className="footer-item">
              <img
                src="/src/assets/img/icons/footer-icon-ubicacion.svg"
                alt="Ubicación"
                className="footer-icon"
              />
              Buenos Aires, Argentina
            </p>
          </div>

          <div className="footer-section">
            <h3>Enlaces Rápidos</h3>
            <a href="#servicios">Servicios</a>
            <a href="#como-funciona">Cómo Funciona</a>
          </div>

          <div className="footer-section">
            <h3>Horarios</h3>
            <p>Lunes a Viernes</p>
            <p>9:00 - 18:00 hs</p>
            <p>Sábados</p>
            <p>9:00 - 13:00 hs</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 CompuMax. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
