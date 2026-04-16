import PageHeader from "../components/PageHeader";
import CardStat from "../components/CardStat";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import RevenueChart from "../components/RevenueChart";
export default function Dashboard() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <PageHeader />

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        <CardStat icon={<FaShoppingCart className="text-white text-2xl" />} value="75" label="Orders" color="bg-green-500" />
        <CardStat icon={<FaTruck className="text-white text-2xl" />} value="120" label="Delivered" color="bg-blue-500" />
        <CardStat icon={<FaBan className="text-white text-2xl" />} value="20" label="Canceled" color="bg-red-500" />
        <CardStat icon={<FaDollarSign className="text-white text-2xl" />} value="Rp 12jt" label="Revenue" color="bg-yellow-500" />
      </div>

      {/* Section bawah */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Chart dummy */}
        <div className="bg-white p-6 rounded-xl shadow-sm col-span-2">
          <h2 className="text-lg font-semibold mb-4">Revenue Overview</h2>

          <RevenueChart />
        </div>

        {/* Activity */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>

          <ul className="space-y-3 text-sm">
            <li>🛒 Order #001 created</li>
            <li>🚚 Order #002 delivered</li>
            <li>❌ Order #003 canceled</li>
            <li>💰 Payment received</li>
          </ul>
        </div>

      </div>

      {/* Bottom section */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Top Products</h2>

        <div className="flex justify-between text-sm border-b py-2">
          <span>Product A</span>
          <span className="text-green-500">120 sold</span>
        </div>

        <div className="flex justify-between text-sm border-b py-2">
          <span>Product B</span>
          <span className="text-green-500">95 sold</span>
        </div>

        <div className="flex justify-between text-sm py-2">
          <span>Product C</span>
          <span className="text-green-500">80 sold</span>
        </div>
      </div>

    </div>
  );
}