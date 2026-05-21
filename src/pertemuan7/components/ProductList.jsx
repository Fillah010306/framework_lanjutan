export default function ProductList({ products }) {
  return (
    <div className="space-y-2">

      {products.map((product) => (

        <div
          key={product.id}
          className="flex justify-between text-sm border-b py-2"
        >
          <span>{product.name}</span>

          <span className="text-green-500">
            {product.sold} sold
          </span>
        </div>

      ))}

    </div>
  );
}