import { useState } from 'react'
import './assets/css/LandingStyle.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header class="navbar">
        <div class="logo">
          <img src="/CompuMax-icon.png" alt="logo" class="img-logo"/>
        </div>
        <nav>
          <a href="#">Servicios</a>
          <a href="#">Cómo Funciona</a>
          <a href="#">Contacto</a>
          <button>Iniciar Sesión / Registrarse</button>
        </nav>
      </header>

      <main>
        <section class="hero">
          <h1>Reparaciones tecnológicas, simplificadas.</h1>
          <p>Agenda tu turno para reparar tu computadora o equipo electrónico de forma rápida y sencilla.</p>
          <button>Agendar Reparación Ahora</button>
        </section>

        <section class="features">
          <h2>¿Por qué elegir CompuMax?</h2>
          <p>Ofrecemos un servicio de confianza con técnicos expertos y un proceso transparente.</p>

          <div class="cards">
            <div class="card">
              <img src="/calendario.png" alt="calendario" class="icon-cards"/>
              <h3>Agenda Fácil</h3>
              <p>Reserva tu cita en menos de dos minutos desde cualquier dispositivo.</p>
            </div>
            <div class="card">
              <img src="/tecnicos.png" alt="calendario" class="icon-cards"/>
              <h3>Técnicos Expertos</h3>
              <p>Nuestro equipo está certificado para manejar cualquier problema de hardware o software.</p>
            </div>
            <div class="card">
              <img src="/seguimiento.png" alt="calendario" class="icon-cards"/>
              <h3>Seguimiento en Vivo</h3>
              <p>Sigue el estado de tu reparación en tiempo real desde tu cuenta.</p>
            </div>
          </div>
        </section>

        <section class="steps">
          <h2>Un sistema diseñado para tu comodidad</h2>
          <div class="tabs">
            <a class="active" href="#">Para Clientes</a>
            <a href="#">Para Administradores</a>
          </div>

          <div class="steps-grid">
            <div class="step">
              <img src="/login.png" alt="" class="steps-img" />
              <h3>Accede al Sistema</h3>
              <p>Regístrate o inicia sesión para tener control total sobre tus reparaciones.</p>
            </div>
            <div class="step">
              <img src="/build_circle.webp" alt="" class="steps-img" />
              <h3>Selecciona el Servicio</h3>
              <p>Elige el tipo de reparación y la fecha que más te convenga.</p>
            </div>
            <div class="step">
              <img src="/editar_calendario.png" alt="" class="steps-img" />
              <h3>Gestiona tus Turnos</h3>
              <p>Revisa, reprograma o cancela tus citas fácilmente.</p>
            </div>
            <div class="step">
              <img src="/solucion.png" alt="" class="steps-img" />
              <h3>Sigue tu Reparación</h3>
              <p>Recibe notificaciones y seguí el progreso en tiempo real.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div class="footer-left">
          <div class="logo">
            <img src="/CompuMax-icon.png" alt="logo" class="img-logo-foot"/>
          </div>
          <p>© 2025 CompuMax. Todos los derechos reservados.</p>
        </div>
        <div class="footer-right">
          <a href="#">Términos de Servicio</a>
          <a href="#">Política de Privacidad</a>
        </div>
      </footer>
    </>
  )
}

export default App
