import data from "./data.json";

export default function GuestView() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.map((item) => (
        <div key={item.id} className="bg-white shadow-lg rounded-xl overflow-hidden">
          <img src={item.image} alt={item.name} className="w-full h-40 object-cover"/>
          
          <div className="p-4">
            <h2 className="font-bold text-lg">{item.name}</h2>
            <p className="text-gray-600 text-sm">{item.description}</p>

            <p className="text-sm mt-2"> {item.details.developer}</p>

            <div className="mt-2">
              {item.tags.map((tag, index) => (
                <span key={index} className="bg-blue-200 text-xs px-2 py-1 mr-2 rounded">
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-2 font-semibold text-green-600">
              Rp {item.price.toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}