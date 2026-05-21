import React, { Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "./pertemuan7/layouts/MainLayout";
import AuthLayout from "./pertemuan7/layouts/AuthLayout";

// Loading
import Loading from "./pertemuan7/components/Loading";

// Lazy Pages
const Dashboard = React.lazy(() => import("./pertemuan7/pages/Dashboard"));
const Orders = React.lazy(() => import("./pertemuan7/pages/Orders"));
const Customers = React.lazy(() => import("./pertemuan7/pages/Customers"));
const AddCustomer = React.lazy(() => import("./pertemuan7/pages/AddCustomer"));

// TAMBAHAN
const Products = React.lazy(() => import("./pertemuan7/pages/Products"));
const ProductDetail = React.lazy(() => import("./pertemuan7/pages/ProductDetail"));

const Login = React.lazy(() => import("./pertemuan7/pages/auth/Login"));
const Register = React.lazy(() => import("./pertemuan7/pages/auth/Register"));
const Forgot = React.lazy(() => import("./pertemuan7/pages/auth/Forgot"));

// Optional lama
const BiodataDiri = React.lazy(() => import("./components/BiodataDiri"));
const RegistrationForm = React.lazy(() => import("./pertemuan3/Form"));
const DataPage = React.lazy(() => import("./pertemuan4/DataPage"));

function App() {

  // ✅ TAMBAHAN STATE GLOBAL CUSTOMER (WAJIB UNTUK SHARE DATA)
  const [customers, setCustomers] = useState([]);

  return (
    <Suspense fallback={<Loading />}>

      <Routes>

        {/* HALAMAN LAMA */}
        <Route
          path="/biodata"
          element={<BiodataDiri />}
        />

        <Route
          path="/pertemuan3"
          element={<RegistrationForm />}
        />

        <Route
          path="/pertemuan4"
          element={<DataPage />}
        />

        {/* MAIN LAYOUT */}
        <Route element={<MainLayout />}>

          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/orders"
            element={<Orders />}
          />

          {/* ✅ CUSTOMERS + SHARE STATE */}
          <Route
            path="/customers"
            element={
              <Customers
                customers={customers}
                setCustomers={setCustomers}
              />
            }
          />

          {/* ✅ ADD CUSTOMER PAGE */}
          <Route
            path="/customers/add"
            element={
              <AddCustomer
                customers={customers}
                setCustomers={setCustomers}
              />
            }
          />

          {/* PRODUCTS */}
          <Route
            path="/products"
            element={<Products />}
          />

          {/* DYNAMIC ROUTE */}
          <Route
            path="/products/:id"
            element={<ProductDetail />}
          />

        </Route>

        {/* AUTH LAYOUT */}
        <Route element={<AuthLayout />}>

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/forgot"
            element={<Forgot />}
          />

        </Route>

      </Routes>

    </Suspense>
  );
}

export default App;