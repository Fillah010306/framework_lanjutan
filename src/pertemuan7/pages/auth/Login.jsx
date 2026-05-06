import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "https://dummyjson.com/auth/login",
        {
          username: form.username,
          password: form.password,
        }
      );

      // simpan token (opsional)
      localStorage.setItem("token", res.data.token);

      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Login gagal, username atau password salah"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

      <h2 className="text-2xl font-bold mb-6 text-center">
        Login
      </h2>

      {/* ERROR */}
      {error && (
        <div className="bg-red-200 mb-4 p-3 rounded flex items-center text-sm">
          <BsFillExclamationDiamondFill className="mr-2 text-red-600" />
          {error}
        </div>
      )}

      {/* LOADING */}
      {loading && (
        <div className="bg-gray-200 mb-4 p-3 rounded flex items-center text-sm">
          <ImSpinner2 className="mr-2 animate-spin" />
          Loading...
        </div>
      )}

      <form onSubmit={handleLogin}>

        <input
          type="text"
          name="username"
          placeholder="Username (emilys)"
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded-md"
        />

        <input
          type="password"
          name="password"
          placeholder="Password (emilyspass)"
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded-md"
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded-md"
        >
          Login
        </button>

      </form>
    </div>
  );
}