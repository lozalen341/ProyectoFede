// src/pages/layouts/AdminLayout.jsx
import "../../assets/css/Global.css"; // CSS global (layout)
import SideBar from "../../components/SideBarAdmin";
import { Outlet } from "react-router-dom";

function AdminLayout() {
    return (
        <div className="adminLayout">
            <SideBar />
            <div className="adminContent">
                <Outlet /> {/* Aquí se cargan las secciones */}
            </div>
        </div>
    );
}

export default AdminLayout;
