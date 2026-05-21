import Card from "../components/Card";
import Table from "../components/Table";
import Badge from "../components/Badge";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Customers({ customers }) {

  const headers = ["Name", "Email", "Status", "Action"];

  return (
    <Card>

      <div className="flex justify-between mb-4">

        <h2 className="text-lg font-semibold">
          Customer List
        </h2>

        <Link to="/customers/add">
          <Button type="success">
            Add Customer
          </Button>
        </Link>

      </div>

      <Table headers={headers}>

       {customers.map((c) => (
  <tr
    key={c.id}
    className="border-b hover:bg-gray-50 transition"
  >

    {/* Name */}
    <td className="px-4 py-4 text-base font-medium text-gray-800">
      {c.name}
    </td>

    {/* Email */}
    <td className="px-4 py-4 text-base text-gray-600">
      {c.email}
    </td>

    {/* Status */}
    <td className="px-4 py-4">
      <Badge
        type={c.status === "Active" ? "success" : "danger"}
      >
        {c.status}
      </Badge>
    </td>

    {/* Action */}
    <td className="px-4 py-4">
      <Button type="secondary">
        Detail
      </Button>
    </td>

  </tr>
))}

      </Table>

    </Card>
  );
}