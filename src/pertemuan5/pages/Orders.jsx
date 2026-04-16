import PageHeader from "../components/PageHeader";

export default function Orders() {
  const orders = [
    { id: "#ORD-001", customer: "Budi", total: "Rp 120.000", status: "Completed" },
    { id: "#ORD-002", customer: "Siti", total: "Rp 80.000", status: "Pending" },
    { id: "#ORD-003", customer: "Andi", total: "Rp 50.000", status: "Canceled" },
    { id: "#ORD-004", customer: "Rina", total: "Rp 200.000", status: "Completed" },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-600";
      case "Pending":
        return "bg-yellow-100 text-yellow-600";
      case "Canceled":
        return "bg-red-100 text-red-600";
      default:
        return "";
    }
  };

  return (
    <div className="space-y-6">
      
      <PageHeader />

      {/* Table */}
      <div className="bg-white p-5 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Order List</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            
            {/* Head */}
            <thead>
              <tr className="text-gray-400 text-sm border-b">
                <th className="py-2">Order ID</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="py-3 font-medium">{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.total}</td>

                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(order.status)}`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td>
                    <button className="text-blue-500 hover:underline text-sm">
                      Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

    </div>
  );
}