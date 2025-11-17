import { useState } from "react";
import styles from "../../assets/css/Panel.module.css";
import SideBar from "../../components/SideBarAdmin";

function Panel() {
    return (
        <>
            <div className={styles.adminLayout}>
                <SideBar />
                <main className={styles.mainContent}>
                    <div className="content-header">
                        <h1 className="page-title">Gestión de Turnos</h1>
                        <div className="header-actions">
                            <div className="search-box">
                                <span className="search-icon">🔍</span>
                                <input
                                    type="text"
                                    className="search-input"
                                    placeholder="Buscar por cliente, servicio..."
                                />
                            </div>
                            <button className="btn-primary">
                                <span>+</span>
                                <span>Nuevo Turno</span>
                            </button>
                        </div>
                    </div>

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

                    <div className="filters-bar">
                        <div className="filter-group">
                            <label className="filter-label">Estado</label>
                            <select className="filter-select">
                                <option>Todos</option>
                                <option>Pendiente</option>
                                <option>En Proceso</option>
                                <option>Finalizado</option>
                                <option>Cancelado</option>
                            </select>
                        </div>

                        <div className="filter-group">
                            <label className="filter-label">Servicio</label>
                            <select className="filter-select">
                                <option>Todos los servicios</option>
                                <option>Reparación de PC</option>
                                <option>Dispositivos Móviles</option>
                                <option>Mantenimiento</option>
                                <option>Recuperación de Datos</option>
                            </select>
                        </div>

                        <div className="filter-group">
                            <label className="filter-label">Fecha</label>
                            <select className="filter-select">
                                <option>Hoy</option>
                                <option>Esta semana</option>
                                <option>Este mes</option>
                                <option>Personalizado</option>
                            </select>
                        </div>
                    </div>

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
                                    <tr>
                                        <td>#1523</td>
                                        <td>Juan Pérez</td>
                                        <td>Reparación de PC</td>
                                        <td>15/11/2025</td>
                                        <td>10:00 AM</td>
                                        <td><span className="status-badge pending">Pendiente</span></td>
                                        <td>
                                            <div className="action-buttons">
                                                <button className="btn-action btn-view">Ver</button>
                                                <button className="btn-action btn-edit">Editar</button>
                                                <button className="btn-action btn-delete">Eliminar</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#1522</td>
                                        <td>María García</td>
                                        <td>Mantenimiento</td>
                                        <td>15/11/2025</td>
                                        <td>11:30 AM</td>
                                        <td><span className="status-badge process">En Proceso</span></td>
                                        <td>
                                            <div className="action-buttons">
                                                <button className="btn-action btn-view">Ver</button>
                                                <button className="btn-action btn-edit">Editar</button>
                                                <button className="btn-action btn-delete">Eliminar</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#1521</td>
                                        <td>Carlos Rodríguez</td>
                                        <td>Dispositivos Móviles</td>
                                        <td>14/11/2025</td>
                                        <td>02:00 PM</td>
                                        <td><span className="status-badge completed">Finalizado</span></td>
                                        <td>
                                            <div className="action-buttons">
                                                <button className="btn-action btn-view">Ver</button>
                                                <button className="btn-action btn-edit">Editar</button>
                                                <button className="btn-action btn-delete">Eliminar</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#1520</td>
                                        <td>Ana Martínez</td>
                                        <td>Recuperación de Datos</td>
                                        <td>14/11/2025</td>
                                        <td>03:30 PM</td>
                                        <td><span className="status-badge pending">Pendiente</span></td>
                                        <td>
                                            <div className="action-buttons">
                                                <button className="btn-action btn-view">Ver</button>
                                                <button className="btn-action btn-edit">Editar</button>
                                                <button className="btn-action btn-delete">Eliminar</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>#1519</td>
                                        <td>Luis Fernández</td>
                                        <td>Reparación de PC</td>
                                        <td>13/11/2025</td>
                                        <td>09:00 AM</td>
                                        <td><span className="status-badge completed">Finalizado</span></td>
                                        <td>
                                            <div className="action-buttons">
                                                <button className="btn-action btn-view">Ver</button>
                                                <button className="btn-action btn-edit">Editar</button>
                                                <button className="btn-action btn-delete">Eliminar</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

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