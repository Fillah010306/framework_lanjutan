export default function PageHeader() {
  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-400 text-sm">Home / Dashboard</p>
      </div>

      <button className="bg-green-500 text-white px-4 py-2 rounded-md">
        + Add Data
      </button>
    </div>
  );
}