export default function CardStat({ icon, value, label, color }) {
  return (
    <div className="group flex items-center space-x-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-lg transition duration-300 cursor-pointer">
      
      {/* Icon */}
      <div
        className={`p-4 rounded-full ${color} group-hover:scale-110 transition`}
      >
        {icon}
      </div>

      {/* Info */}
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold text-gray-800">
          {value}
        </h2>
        <p className="text-gray-400 text-sm">
          {label}
        </p>
      </div>

    </div>
  );
}