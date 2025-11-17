import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/SideBarAdmin.css";

function SideBar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const closeSidebar = () => setSidebarOpen(false);

    return (
        <>
            <div className={`overlay ${sidebarOpen ? 'active' : ''}`} onClick={closeSidebar}></div>

            <div className="mobileHeader">
                <button className="menuBtn" onClick={toggleSidebar}>☰</button>
                <div className="mobileLogo">CompuMax</div>
                <div style={{ width: '40px' }}></div>
            </div>

            <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <div className="sidebarHeader">
                    <div className="sidebarLogo">CompuMax</div>
                    <div className="sidebarRole">Panel de Administrador</div>
                </div>

                <nav className="sidebarNav">
                    <Link to="/panel" className="navItem active" onClick={closeSidebar}>
                        <span className="navIcon">📊</span>
                        <span>Dashboard</span>
                    </Link>

                    <Link to="/Gestion" className="navItem" onClick={closeSidebar}>
                        <span className="navIcon">👥</span>
                        <span>Gestión de Usuarios</span>
                    </Link>

                    <Link to="/servicios" className="navItem" onClick={closeSidebar}>
                        <span className="navIcon">🔧</span>
                        <span>Servicios</span>
                    </Link>

                    <Link to="/reportes" className="navItem" onClick={closeSidebar}>
                        <span className="navIcon">📈</span>
                        <span>Reportes</span>
                    </Link>

                    <Link to="/configuracion" className="navItem" onClick={closeSidebar}>
                        <span className="navIcon">⚙️</span>
                        <span>Configuración</span>
                    </Link>
                </nav>

                <div className="sidebarFooter">
                    <button className="logoutBtn">Cerrar Sesión</button>
                </div>
            </aside>
        </>
    );
}

export default SideBar;