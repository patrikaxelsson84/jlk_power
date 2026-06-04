// layouts/MainLayout.jsx

import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-gray-950">
            <Header />
            <Outlet />
        </div>
    );
}