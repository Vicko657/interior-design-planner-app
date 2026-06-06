import { Navigate, Outlet } from "react-router-dom";
import "./PrivateLayout.css";
import SideNav from "./private/SideNav";
import TopBar from "./private/TopBar";
import { useAuth } from "../../context/AuthContext";

export default function PrivateLayout() {
  const { isAuthenticated } = useAuth();

  // Checks if user is not logged in
  if (!isAuthenticated) {
    return <Navigate to="/login"></Navigate>;
  }

  return (
    <div className="user-account d-flex flex-grow-1 overflow-hidden">
      {/*-- SideNav */}
      <SideNav />

      <div className="flex-grow-1 overflow-auto">
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
}
