import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";

export default function AddCustomer({ customers, setCustomers }) {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {

    const newCustomer = {
      id: Date.now(),
      ...form,
    };

    setCustomers([...customers, newCustomer]);

    navigate("/customers"); // balik ke list
  };

  return (
    <Card>

      <h2 className="text-lg font-semibold mb-4">
        Add Customer
      </h2>

      <div className="space-y-3">

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <select
          name="status"
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option>Active</option>
          <option>Inactive</option>
        </select>

        <Button type="success" onClick={handleSubmit}>
          Save
        </Button>

      </div>

    </Card>
  );
}