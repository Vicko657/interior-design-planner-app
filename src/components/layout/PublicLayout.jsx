import { Navigate, Outlet } from "react-router-dom";
import "./PublicLayout.css";
import Header from "./public/Header";
import Footer from "./public/Footer";
import { useAuth } from "../../context/AuthContext";

export default function PublicLayout() {
  const { isAuthenticated } = useAuth();

  // Checks if user is logged in
  if (isAuthenticated) {
    return <Navigate to="/user"></Navigate>;
  }
  return (
    <>
      {/*-- Header */}
      <Header />

      <main className="main">
        <Outlet />
      </main>

      {/*-- Footer */}
      <Footer />
    </>
  );
}
