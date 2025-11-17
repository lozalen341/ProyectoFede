import { useState } from "react"
import styles from "../assets/css/Panel.module.css"

function SideBar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const closeSidebar = () => setSidebarOpen(false);
    return (
        <>
            <div className={`${styles.overlay} ${sidebarOpen ? styles.active : ''}`} onClick={closeSidebar}></div>

            <div className={styles.mobileHeader}>
                <button className={styles.menuBtn} onClick={toggleSidebar}>☰</button>
                <div className={styles.mobileLogo}>CompuMax</div>
                <div style={{ width: '40px' }}></div>
            </div>

            <aside className={`${styles.sidebar} ${sidebarOpen ? styles.open : ''}`}>
                <div className={styles.sidebarHeader}>
                    <div className={styles.sidebarLogo}>CompuMax</div>
                    <div className={styles.sidebarRole}>Panel de Administrador</div>
                </div>

                <nav className={styles.sidebarNav}>
                    <a href="#" className={`${styles.navItem} ${styles.active}`} onClick={closeSidebar}>
                        <span className={styles.navIcon}>📊</span>
                        <span>Dashboard</span>
                    </a>
                    <a href="#" className={styles.navItem} onClick={closeSidebar}>
                        <span className={styles.navIcon}>📅</span>
                        <span>Gestión de Turnos</span>
                    </a>
                    <a href="#" className={styles.navItem} onClick={closeSidebar}>
                        <span className={styles.navIcon}>👥</span>
                        <span>Usuarios</span>
                    </a>
                    <a href="#" className={styles.navItem} onClick={closeSidebar}>
                        <span className={styles.navIcon}>🔧</span>
                        <span>Servicios</span>
                    </a>
                    <a href="#" className={styles.navItem} onClick={closeSidebar}>
                        <span className={styles.navIcon}>📈</span>
                        <span>Reportes</span>
                    </a>
                    <a href="#" className={styles.navItem} onClick={closeSidebar}>
                        <span className={styles.navIcon}>⚙️</span>
                        <span>Configuración</span>
                    </a>
                </nav>

                <div className={styles.sidebarFooter}>
                    <button className={styles.logoutBtn}>Cerrar Sesión</button>
                </div>
            </aside>
        </>
    )
}
export default SideBar;