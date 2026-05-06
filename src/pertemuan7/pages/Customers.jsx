import PageHeader from "../components/PageHeader";

export default function Customers() {
  const customers = [
    { name: "Budi", email: "budi@gmail.com", status: "Active" },
    { name: "Siti", email: "siti@gmail.com", status: "Inactive" },
    { name: "Andi", email: "andi@gmail.com", status: "Active" },
  ];

  return (
    <div className="space-y-6">

      <PageHeader />

      <div className="bg-white p-5 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Customer List</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400 text-sm border-b">
              <th className="py-2">Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((c, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="py-3">{c.name}</td>
                <td>{c.email}</td>
                <td>
                  <span className={`px-3 py-1 text-xs rounded-full 
                    ${c.status === "Active" 
                      ? "bg-green-100 text-green-600" 
                      : "bg-red-100 text-red-600"}`}>
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}