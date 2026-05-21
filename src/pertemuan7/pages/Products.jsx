import { Link } from "react-router-dom";

import Card from "../components/Card";
import Button from "../components/Button";
import Table from "../components/Table";

const dummyProducts = [
  {
    id: 1,
    title: "iPhone 15 Pro",
    code: "PRD001",
    category: "Smartphone",
    brand: "Apple",
    price: 25000000,
    stock: 10,
    thumbnail:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 2,
    title: "Samsung Galaxy S24",
    code: "PRD002",
    category: "Smartphone",
    brand: "Samsung",
    price: 18000000,
    stock: 15,
    thumbnail:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505",
  },
  {
    id: 3,
    title: "ASUS ROG Laptop",
    code: "PRD003",
    category: "Laptop",
    brand: "ASUS",
    price: 22000000,
    stock: 5,
    thumbnail:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  },
  {
    id: 4,
    title: "Logitech Mouse",
    code: "PRD004",
    category: "Accessories",
    brand: "Logitech",
    price: 350000,
    stock: 25,
    thumbnail:
      "https://images.unsplash.com/photo-1527814050087-3793815479db",
  },
  {
    id: 5,
    title: "Mechanical Keyboard",
    code: "PRD005",
    category: "Accessories",
    brand: "Rexus",
    price: 750000,
    stock: 12,
    thumbnail:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
  },
];

export default function Products() {
  const headers = [
    "Product",
    "Code",
    "Category",
    "Brand",
    "Price",
    "Stock",
  ];

  return (
    <div className="space-y-6">

      <Card>

        {/* Header */}
        <div className="flex items-center justify-between mb-6">

          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              Products
            </h1>

            <p className="text-sm text-gray-400">
              Product Management Data
            </p>
          </div>

          <Button type="success">
            Add Product
          </Button>

        </div>

        {/* Table */}
        <Table headers={headers}>

          {dummyProducts.map((item) => (

            <tr
              key={item.id}
              className="border-b hover:bg-slate-50 transition"
            >

              {/* Product */}
              <td className="px-5 py-4">
                <div className="flex items-center gap-4">

                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-14 h-14 object-cover rounded-lg"
                  />

                  <div>
                    <Link
                      to={`/products/${item.id}`}
                      className="font-semibold text-emerald-500 hover:text-emerald-600"
                    >
                      {item.title}
                    </Link>
                  </div>

                </div>
              </td>

              {/* Code */}
              <td className="px-5 py-4">
                {item.code}
              </td>

              {/* Category */}
              <td className="px-5 py-4">
                {item.category}
              </td>

              {/* Brand */}
              <td className="px-5 py-4">
                {item.brand}
              </td>

              {/* Price */}
              <td className="px-5 py-4">
                Rp {item.price.toLocaleString("id-ID")}
              </td>

              {/* Stock */}
              <td className="px-5 py-4">
                {item.stock}
              </td>

            </tr>

          ))}

        </Table>

      </Card>

    </div>
  );
}