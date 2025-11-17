import { useState } from "react";
import styles from "../../assets/css/Panel.module.css";
import SideBar from "../../components/SideBarAdmin";

// Datos de ejemplo
const turnosEjemplo = [
    {
        id: "#1523",
        cliente: "Juan Pérez",
        servicio: "Reparación de PC",
        fecha: "15/11/2025",
        hora: "10:00 AM",
        estado: "Pendiente",
        descripcion: "Problema con placa madre"
    },
    {
        id: "#1522",
        cliente: "María García",
        servicio: "Mantenimiento",
        fecha: "15/11/2025",
        hora: "11:30 AM",
        estado: "En Proceso",
        descripcion: "Limpieza preventiva anual"
    },
    {
        id: "#1521",
        cliente: "Carlos Rodríguez",
        servicio: "Dispositivos Móviles",
        fecha: "14/11/2025",
        hora: "02:00 PM",
        estado: "Finalizado",
        descripcion: "Cambio de pantalla"
    },
    {
        id: "#1520",
        cliente: "Ana Martínez",
        servicio: "Recuperación de Datos",
        fecha: "14/11/2025",
        hora: "03:30 PM",
        estado: "Pendiente",
        descripcion: "Disco duro dañado"
    },
    {
        id: "#1519",
        cliente: "Luis Fernández",
        servicio: "Reparación de PC",
        fecha: "13/11/2025",
        hora: "09:00 AM",
        estado: "Finalizado",
        descripcion: "Actualización de RAM"
    }
];

function Panel() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [filtroEstado, setFiltroEstado] = useState("Todos");
    const [filtroServicio, setFiltroServicio] = useState("Todos los servicios");
    const [filtroFecha, setFiltroFecha] = useState("Hoy");
    const [busqueda, setBusqueda] = useState("");

    return (
        <>
            <div className={styles.adminLayout}>
                {/* Mobile Header */}
                <SideBar />

                {/* Main Content */}
                <main className={styles.mainContent}>
                    {/* Header */}
                    <div className="content-header">
                        <h1 className="page-title">Gestión de Turnos</h1>
                        <div className="header-actions">
                            <div className="search-box">
                                <span className="search-icon">🔍</span>
                                <input
                                    type="text"
                                    className="search-input"
                                    placeholder="Buscar por cliente, servicio..."
                                    value={busqueda}
                                    onChange={(e) => setBusqueda(e.target.value)}
                                />
                            </div>
                            <button className="btn-primary">
                                <span>+</span>
                                <span>Nuevo Turno</span>
                            </button>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-icon pending">⏳</div>
                            <div className="stat-content">
                                <h3>12</h3>
                                <p>Turnos Pendientes</p>
                            </div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-icon process">🔧</div>
                            <div className="stat-content">
                                <h3>8</h3>
                                <p>En Proceso</p>
                            </div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-icon completed">✓</div>
                            <div className="stat-content">
                                <h3>45</h3>
                                <p>Finalizados</p>
                            </div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-icon users">👤</div>
                            <div className="stat-content">
                                <h3>128</h3>
                                <p>Usuarios Activos</p>
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
                                <option>Pendiente</option>
                                <option>En Proceso</option>
                                <option>Finalizado</option>
                                <option>Cancelado</option>
                            </select>
                        </div>

                        <div className="filter-group">
                            <label className="filter-label">Servicio</label>
                            <select
                                className="filter-select"
                                value={filtroServicio}
                                onChange={(e) => setFiltroServicio(e.target.value)}
                            >
                                <option>Todos los servicios</option>
                                <option>Reparación de PC</option>
                                <option>Dispositivos Móviles</option>
                                <option>Mantenimiento</option>
                                <option>Recuperación de Datos</option>
                            </select>
                        </div>

                        <div className="filter-group">
                            <label className="filter-label">Fecha</label>
                            <select
                                className="filter-select"
                                value={filtroFecha}
                                onChange={(e) => setFiltroFecha(e.target.value)}
                            >
                                <option>Hoy</option>
                                <option>Esta semana</option>
                                <option>Este mes</option>
                                <option>Personalizado</option>
                            </select>
                        </div>
                    </div>

                    {/* Data Table */}
                    <div className="data-table-container">
                        <div className="table-header">
                            <h2 className="table-title">Lista de Turnos</h2>
                        </div>

                        <div className="table-wrapper">
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Cliente</th>
                                        <th>Servicio</th>
                                        <th>Fecha</th>
                                        <th>Hora</th>
                                        <th>Estado</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {turnosEjemplo.map((turno) => (
                                        <tr key={turno.id}>
                                            <td>{turno.id}</td>
                                            <td>{turno.cliente}</td>
                                            <td>{turno.servicio}</td>
                                            <td>{turno.fecha}</td>
                                            <td>{turno.hora}</td>
                                            <td>
                                                <span className={`status-badge ${turno.estado.toLowerCase().replace(' ', '-')}`}>
                                                    {turno.estado}
                                                </span>
                                            </td>
                                            <td>
                                                <div className="action-buttons">
                                                    <button className="btn-action btn-view">Ver</button>
                                                    <button className="btn-action btn-edit">Editar</button>
                                                    <button className="btn-action btn-delete">Eliminar</button>
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
                                Mostrando 1-5 de 65 turnos
                            </div>
                            <div className="pagination-buttons">
                                <button className="page-btn" disabled>Anterior</button>
                                <button className="page-btn active">1</button>
                                <button className="page-btn">2</button>
                                <button className="page-btn">3</button>
                                <button className="page-btn">...</button>
                                <button className="page-btn">13</button>
                                <button className="page-btn">Siguiente</button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Panel;