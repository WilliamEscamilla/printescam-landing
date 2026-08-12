import './App.css'

const MAIN_SITE_URL = 'https://printescam-git-main-williamescamillas-projects.vercel.app/'
const TUTORIAL_URL = '#'
const DEMO_EMAIL = 'invitado.demo@printescam.com'
const DEMO_PASSWORD = 'invitadosunid'

function App() {
  return (
    <div className="page">
      <div className="card">
        <h1>PrintEscam</h1>
        <p className="subtitle">Papelería + pedidos por WhatsApp</p>

        <a className="main-button" href={MAIN_SITE_URL}>
          Entrar a la página principal
        </a>

        <a
          className="tutorial-button"
          href={TUTORIAL_URL}
          target="_blank"
          rel="noreferrer"
        >
          Ver tutorial en YouTube
        </a>

        <div className="demo-box">
          <p className="demo-label">Acceso de prueba para maestros</p>
          <p>
            <strong>Correo:</strong> {DEMO_EMAIL}
          </p>
          <p>
            <strong>Contraseña:</strong> {DEMO_PASSWORD}
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
