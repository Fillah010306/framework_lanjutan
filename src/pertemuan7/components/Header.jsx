export default function Header() {
  return (
    <div className="bg-white shadow-sm p-4 flex justify-between items-center">
      
      <h2 className="text-lg font-semibold">Dashboard</h2>

      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600">Admin</span>
        <div className="w-8 h-8 bg-green-500 rounded-full"></div>
      </div>

    </div>
  );
}