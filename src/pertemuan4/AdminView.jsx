import data from "./data.json";

export default function AdminView() {
  return (
    <div className="p-6 overflow-x-auto">
      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Nama</th>
            <th className="p-2">Kategori</th>
            <th className="p-2">Harga</th>
            <th className="p-2">Developer</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="text-center border-t">
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.category}</td>
              <td className="p-2">Rp {item.price}</td>
              <td className="p-2">{item.details.developer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}