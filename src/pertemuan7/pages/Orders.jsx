import PageHeader from "../components/PageHeader";
import Card from "../components/Card";
import Table from "../components/Table";
import Badge from "../components/Badge";
import Button from "../components/Button";

export default function Orders() {

  const orders = [
    {
      id: "#ORD-001",
      customer: "Budi",
      total: "Rp 120.000",
      status: "Completed",
    },
    {
      id: "#ORD-002",
      customer: "Siti",
      total: "Rp 80.000",
      status: "Pending",
    },
    {
      id: "#ORD-003",
      customer: "Andi",
      total: "Rp 50.000",
      status: "Canceled",
    },
    {
      id: "#ORD-004",
      customer: "Rina",
      total: "Rp 200.000",
      status: "Completed",
    },
  ];

  const headers = [
    "Order ID",
    "Customer",
    "Total",
    "Status",
    "Action",
  ];

  const getBadgeType = (status) => {
    switch (status) {

      case "Completed":
        return "success";

      case "Pending":
        return "warning";

      case "Canceled":
        return "danger";

      default:
        return "secondary";
    }
  };

  return (
    <div className="space-y-6">

      <PageHeader />

      <Card>

        <div className="flex items-center justify-between mb-4">

          <h2 className="text-lg font-semibold">
            Order List
          </h2>

          <Button type="success">
            Add Order
          </Button>

        </div>

        <Table headers={headers}>

          {orders.map((order) => (

            <tr
              key={order.id}
              className="border-b hover:bg-gray-50 transition"
            >

              <td className="px-4 py-3 font-medium">
                {order.id}
              </td>

              <td className="px-4 py-3">
                {order.customer}
              </td>

              <td className="px-4 py-3">
                {order.total}
              </td>

              <td className="px-4 py-3">

                <Badge type={getBadgeType(order.status)}>
                  {order.status}
                </Badge>

              </td>

              <td className="px-4 py-3">

                <Button type="secondary">
                  Detail
                </Button>

              </td>

            </tr>

          ))}

        </Table>

      </Card>

    </div>
  );
}