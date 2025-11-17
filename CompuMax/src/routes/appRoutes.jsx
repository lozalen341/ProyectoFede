import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Páginas públicas
import LandingPage from '../pages/LandingPage';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

// Layout admin
import AdminLayout from '../pages/layouts/AdminLayout';

// Secciones admin
import GestionTurnos from '../pages/admin/GestionTurnos';
import GestionUsuarios from '../pages/admin/GestionUsuarios';

export default function AppRouter() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>

                {/* Públicas */}
                <Route path="/" element={<LandingPage/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Admin con layout */}
                <Route path="/admin" element={<AdminLayout />}>

                    {/* Dashboard: gestión de turnos */}
                    <Route index element={<GestionTurnos />} />
                    <Route path="turnos" element={<GestionTurnos />} />

                    {/* Gestión de usuarios */}
                    <Route path="usuarios" element={<GestionUsuarios />} />
                    
                </Route>

            </Routes>
        </AnimatePresence>
    );
}
