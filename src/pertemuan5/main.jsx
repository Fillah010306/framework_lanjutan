import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";

import "./styles/tailwind.css";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-100 min-h-screen flex">
        
        <Sidebar />

        <div className="flex-1 p-4">
          <Header />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<h1>Customers Page</h1>} />
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);