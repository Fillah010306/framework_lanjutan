export default function Button({
  children,
  type = "primary",
  onClick
}) {

  const types = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-600 hover:bg-gray-700 text-white",
    success: "bg-green-600 hover:bg-green-700 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${types[type]} px-4 py-2 rounded-lg`}
    >
      {children}
    </button>
  );
}