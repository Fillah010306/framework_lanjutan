export default function InputField({ label, name, type, value, onChange, error }) {
  return (
    <div className="flex flex-col mb-3">
      <label className="text-sm font-bold text-gray-600 mb-1 ml-1">{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={`Ketik ${label}...`}
        className={`w-full p-2.5 border rounded-xl text-sm transition-all outline-none focus:ring-2 ${
          error ? "border-red-500 focus:ring-red-100" : "border-gray-200 focus:ring-indigo-100 focus:border-indigo-400"
        }`}
      />
      {error && (
        <span className="text-[10px] text-red-500 mt-1 ml-1 font-medium">
          * {error}
        </span>
      )}
    </div>
  );
}