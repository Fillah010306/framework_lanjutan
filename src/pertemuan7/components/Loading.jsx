export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">

      {/* Spinner Ring */}
      <div className="relative flex items-center justify-center mb-6">

        <div className="w-16 h-16 rounded-full border-4 border-gray-200"></div>

        <div className="absolute w-16 h-16 rounded-full border-4 border-t-green-500 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>

      </div>

      {/* Text */}
      <h1 className="text-lg font-semibold text-gray-700 animate-pulse">
        Loading data...
      </h1>

      <p className="text-sm text-gray-400 mt-1">
        Please wait a moment
      </p>

    </div>
  );
}