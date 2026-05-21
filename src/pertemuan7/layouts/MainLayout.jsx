import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      
      <div className="flex flex-1">
        <Sidebar />

        <div className="flex-1">
          <Header />

          <main className="p-6">
            <Outlet />
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}