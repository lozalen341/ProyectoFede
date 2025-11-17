import { useState } from "react";
import styles from "../../assets/css/GestionUsuarios.module.css";
import SideBar from "../../components/SideBarAdmin";

// Datos de ejemplo
const usuariosEjemplo = [
    {
        id: "#U001",
        nombre: "Juan Pérez",
        email: "juan@mail.com",
        telefono: "+54 11 1234-5678",
        fechaRegistro: "10/01/2024",
        turnosRealizados: 8,
        estado: "Activo"
    },
    {
        id: "#U002",
        nombre: "María García",
        email: "maria@mail.com",
        telefono: "+54 11 2345-6789",
        fechaRegistro: "15/02/2024",
        turnosRealizados: 5,
        estado: "Activo"
    },
    {
        id: "#U003",
        nombre: "Carlos Rodríguez",
        email: "carlos@mail.com",
        telefono: "+54 11 3456-7890",
        fechaRegistro: "20/03/2024",
        turnosRealizados: 12,
        estado: "Activo"
    },
    {
        id: "#U004",
        nombre: "Ana Martínez",
        email: "ana@mail.com",
        telefono: "+54 11 4567-8901",
        fechaRegistro: "05/04/2024",
        turnosRealizados: 3,
        estado: "Inactivo"
    },
    {
        id: "#U005",
        nombre: "Luis Fernández",
        email: "luis@mail.com",
        telefono: "+54 11 5678-9012",
        fechaRegistro: "12/05/2024",
        turnosRealizados: 15,
        estado: "Activo"
    }
];

function GestionUsuarios() {
    const [filtroEstado, setFiltroEstado] = useState("Todos");
    const [filtroFecha, setFiltroFecha] = useState("Último mes");
    const [ordenar, setOrdenar] = useState("Más recientes");
    const [busqueda, setBusqueda] = useState("");

    return (
        <div className={styles.adminLayout}>
            {/* Sidebar Component */}
            <SideBar />

            {/* Main Content */}
            <main className={styles.mainContent}>
                {/* Header */}
                <div className="content-header">
                    <h1 className="page-title">Gestión de Usuarios</h1>
                    
                    <div className="header-actions">
                        <div className="search-box">
                            <span className="search-icon">🔍</span>
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Buscar por nombre, email, teléfono..."
                                value={busqueda}
                                onChange={(e) => setBusqueda(e.target.value)}
                            />
                        </div>
                        <button className="btn-primary">
                            <span>+</span>
                            <span>Nuevo Usuario</span>
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon stat-icon-total">👥</div>
                        <div className="stat-content">
                            <h3>128</h3>
                            <p>Total de Usuarios</p>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon stat-icon-active">✓</div>
                        <div className="stat-content">
                            <h3>89</h3>
                            <p>Activos este mes</p>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon stat-icon-new">⭐</div>
                        <div className="stat-content">
                            <h3>12</h3>
                            <p>Nuevos Registros</p>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon stat-icon-pending">📅</div>
                        <div className="stat-content">
                            <h3>23</h3>
                            <p>Con Turnos Pendientes</p>
                        </div>
                    </div>
                </div>

                {/* Filters Bar */}
                <div className="filters-bar">
                    <div className="filter-group">
                        <label className="filter-label">Estado</label>
                        <select 
                            className="filter-select"
                            value={filtroEstado}
                            onChange={(e) => setFiltroEstado(e.target.value)}
                        >
                            <option>Todos</option>
                            <option>Activo</option>
                            <option>Inactivo</option>
                            <option>Suspendido</option>
                        </select>
                    </div>

                    <div className="filter-group">
                        <label className="filter-label">Fecha de Registro</label>
                        <select 
                            className="filter-select"
                            value={filtroFecha}
                            onChange={(e) => setFiltroFecha(e.target.value)}
                        >
                            <option>Última semana</option>
                            <option>Último mes</option>
                            <option>Último año</option>
                            <option>Personalizado</option>
                        </select>
                    </div>

                    <div className="filter-group">
                        <label className="filter-label">Ordenar por</label>
                        <select 
                            className="filter-select"
                            value={ordenar}
                            onChange={(e) => setOrdenar(e.target.value)}
                        >
                            <option>Más recientes</option>
                            <option>Alfabético</option>
                            <option>Más turnos</option>
                        </select>
                    </div>
                </div>

                {/* Data Table */}
                <div className="data-table-container">
                    <div className="table-header">
                        <h2 className="table-title">Lista de Usuarios</h2>
                    </div>

                    <div className="table-wrapper">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                    <th>Teléfono</th>
                                    <th>Fecha Registro</th>
                                    <th>Turnos</th>
                                    <th>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuariosEjemplo.map((usuario) => (
                                    <tr key={usuario.id}>
                                        <td>{usuario.id}</td>
                                        <td>{usuario.nombre}</td>
                                        <td>{usuario.email}</td>
                                        <td>{usuario.telefono}</td>
                                        <td>{usuario.fechaRegistro}</td>
                                        <td>{usuario.turnosRealizados}</td>
                                        <td>
                                            <span className={`status-badge ${usuario.estado.toLowerCase()}`}>
                                                {usuario.estado}
                                            </span>
                                        </td>
                                        <td>
                                            <div className="action-buttons">
                                                <button className="btn-action btn-view">Ver</button>
                                                <button className="btn-action btn-edit">Editar</button>
                                                <button className="btn-action btn-suspend">Suspender</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="pagination">
                        <div className="pagination-info">
                            Mostrando 1-5 de 128 usuarios
                        </div>
                        <div className="pagination-buttons">
                            <button className="page-btn" disabled>Anterior</button>
                            <button className="page-btn active">1</button>
                            <button className="page-btn">2</button>
                            <button className="page-btn">3</button>
                            <button className="page-btn">...</button>
                            <button className="page-btn">26</button>
                            <button className="page-btn">Siguiente</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default GestionUsuarios;