import { useState } from 'react'
import '../assets/css/LandingStyle.css'
import Card from '../components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="navbar">
        <div className="logo">
          <img src="/CompuMax-icon.png" alt="logo" className="img-logo"/>
        </div>
        <nav>
          <a href="#">Servicios</a>
          <a href="#">Cómo Funciona</a>
          <a href="#">Contacto</a>
          <button>Iniciar Sesión / Registrarse</button>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Reparaciones tecnológicas, simplificadas.</h1>
          <p>Agenda tu turno para reparar tu computadora o equipo electrónico de forma rápida y sencilla.</p>
          <button>Agendar Reparación Ahora</button>
        </section>

        <section className="features">
          <h2>¿Por qué elegir CompuMax?</h2>
          <p>Ofrecemos un servicio de confianza con técnicos expertos y un proceso transparente.</p>

          <div className="cards">
            <div className="card">
              <img src="/calendario.png" alt="calendario" className="icon-cards"/>
              <h3>Agenda Fácil</h3>
              <p>Reserva tu cita en menos de dos minutos desde cualquier dispositivo.</p>
            </div>
            <div className="card">
              <img src="/tecnicos.png" alt="calendario" className="icon-cards"/>
              <h3>Técnicos Expertos</h3>
              <p>Nuestro equipo está certificado para manejar cualquier problema de hardware o software.</p>
            </div>
            <div className="card">
              <img src="/seguimiento.png" alt="calendario" className="icon-cards"/>
              <h3>Seguimiento en Vivo</h3>
              <p>Sigue el estado de tu reparación en tiempo real desde tu cuenta.</p>
            </div>
          </div>
        </section>

        <section className="steps">
          <h2>Un sistema diseñado para tu comodidad</h2>
          <div className="tabs">
            <a className="active" href="#">Para Clientes</a>
            <a href="#">Para Administradores</a>
          </div>

          <div className="steps-grid">
            <div className="step">
              <img src="/login.png" alt="" className="steps-img" />
              <h3>Accede al Sistema</h3>
              <p>Regístrate o inicia sesión para tener control total sobre tus reparaciones.</p>
            </div>
            <div className="step">
              <img src="/build_circle.webp" alt="" className="steps-img" />
              <h3>Selecciona el Servicio</h3>
              <p>Elige el tipo de reparación y la fecha que más te convenga.</p>
            </div>
            <div className="step">
              <img src="/editar_calendario.png" alt="" className="steps-img" />
              <h3>Gestiona tus Turnos</h3>
              <p>Revisa, reprograma o cancela tus citas fácilmente.</p>
            </div>
            <div className="step">
              <img src="/solucion.png" alt="" className="steps-img" />
              <h3>Sigue tu Reparación</h3>
              <p>Recibe notificaciones y seguí el progreso en tiempo real.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-left">
          <div className="logo">
            <img src="/CompuMax-icon.png" alt="logo" className="img-logo-foot"/>
          </div>
          <p>© 2025 CompuMax. Todos los derechos reservados.</p>
        </div>
        <div className="footer-right">
          <a href="#">Términos de Servicio</a>
          <a href="#">Política de Privacidad</a>
        </div>
      </footer>
    </>
  )
}

export default App
