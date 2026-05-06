import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Layout (tidak perlu lazy)
import MainLayout from "./pertemuan7/layouts/MainLayout";
import AuthLayout from "./pertemuan7/layouts/AuthLayout";

// Loading
import Loading from "./pertemuan7/components/Loading";

// 🔥 Lazy Pages (INI YANG DIUBAH)
const Dashboard = React.lazy(() => import("./pertemuan7/pages/Dashboard"));
const Orders = React.lazy(() => import("./pertemuan7/pages/Orders"));
const Customers = React.lazy(() => import("./pertemuan7/pages/Customers"));

const Login = React.lazy(() => import("./pertemuan7/pages/auth/Login"));
const Register = React.lazy(() => import("./pertemuan7/pages/auth/Register"));
const Forgot = React.lazy(() => import("./pertemuan7/pages/auth/Forgot"));

// Optional lama (boleh lazy juga)
const BiodataDiri = React.lazy(() => import("./components/BiodataDiri"));
const RegistrationForm = React.lazy(() => import("./pertemuan3/Form"));
const DataPage = React.lazy(() => import("./pertemuan4/DataPage"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>

        {/* HALAMAN LAMA */}
        <Route path="/biodata" element={<BiodataDiri />} />
        <Route path="/pertemuan3" element={<RegistrationForm />} />
        <Route path="/pertemuan4" element={<DataPage />} />

        {/* MAIN LAYOUT */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
        </Route>

        {/* AUTH LAYOUT */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

      </Routes>
    </Suspense>
  );
}

export default App;