import { useParams, Link } from "react-router-dom";

const dummyProducts = [
    {
        id: 1,
        title: "iPhone 15 Pro",
        code: "PRD001",
        category: "Smartphone",
        brand: "Apple",
        price: 25000000,
        stock: 10,
        thumbnail: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },
    {
        id: 2,
        title: "Samsung Galaxy S24",
        code: "PRD002",
        category: "Smartphone",
        brand: "Samsung",
        price: 18000000,
        stock: 15,
        thumbnail: "https://images.unsplash.com/photo-1580910051074-3eb694886505"
    },
    {
        id: 3,
        title: "ASUS ROG Laptop",
        code: "PRD003",
        category: "Laptop",
        brand: "ASUS",
        price: 22000000,
        stock: 5,
        thumbnail: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    },
    {
        id: 4,
        title: "Logitech Mouse",
        code: "PRD004",
        category: "Accessories",
        brand: "Logitech",
        price: 350000,
        stock: 25,
        thumbnail: "https://images.unsplash.com/photo-1527814050087-3793815479db"
    },
    {
        id: 5,
        title: "Mechanical Keyboard",
        code: "PRD005",
        category: "Accessories",
        brand: "Rexus",
        price: 750000,
        stock: 12,
        thumbnail: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae"
    },
];

export default function ProductDetail() {

    const { id } = useParams();

    const product = dummyProducts.find(
        (item) => item.id === parseInt(id)
    );

    if (!product) {
        return (
            <div className="text-red-500 font-bold p-6">
                Product Not Found
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">

            <div className="bg-white rounded-xl shadow-lg p-8">

                <div className="flex flex-col md:flex-row gap-8">

                    {/* Image */}
                    <div>

                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-72 h-72 object-cover rounded-xl"
                        />

                    </div>

                    {/* Detail */}
                    <div className="flex-1">

                        <p className="text-sm font-bold text-emerald-500 uppercase mb-2">
                            {product.category}
                        </p>

                        <h1 className="text-4xl font-black text-slate-800 mb-3">
                            {product.title}
                        </h1>

                        <p className="text-lg text-gray-500 mb-6">
                            Brand : {product.brand}
                        </p>

                        <div className="space-y-5">

                            <div>

                                <p className="text-xs uppercase text-gray-400 font-bold">
                                    Product Code
                                </p>

                                <p className="text-lg font-semibold text-slate-700">
                                    {product.code}
                                </p>

                            </div>

                            <div>

                                <p className="text-xs uppercase text-gray-400 font-bold">
                                    Price
                                </p>

                                <p className="text-3xl font-black text-slate-800">
                                    Rp {product.price.toLocaleString("id-ID")}
                                </p>

                            </div>

                            <div>

                                <p className="text-xs uppercase text-gray-400 font-bold">
                                    Stock
                                </p>

                                <p className="text-lg font-bold text-slate-700">
                                    {product.stock}
                                </p>

                            </div>

                        </div>

                        {/* Button */}
                        <Link
                            to="/products"
                            className="inline-block mt-8 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition"
                        >
                            Back to Products
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    );
}