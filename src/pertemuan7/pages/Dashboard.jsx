import PageHeader from "../components/PageHeader";
import CardStat from "../components/CardStat";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import ActivityList from "../components/ActivityList";
import ProductList from "../components/ProductList";
import RevenueChart from "../components/RevenueChart";




import {
  FaShoppingCart,
  FaTruck,
  FaBan,
  FaDollarSign,
} from "react-icons/fa";

export default function Dashboard() {

  const stats = [
    {
      id: 1,
      icon: <FaShoppingCart className="text-white text-2xl" />,
      value: "75",
      label: "Orders",
      color: "bg-green-500",
    },
    {
      id: 2,
      icon: <FaTruck className="text-white text-2xl" />,
      value: "120",
      label: "Delivered",
      color: "bg-blue-500",
    },
    {
      id: 3,
      icon: <FaBan className="text-white text-2xl" />,
      value: "20",
      label: "Canceled",
      color: "bg-red-500",
    },
    {
      id: 4,
      icon: <FaDollarSign className="text-white text-2xl" />,
      value: "Rp 12jt",
      label: "Revenue",
      color: "bg-yellow-500",
    },
  ];

  const activities = [
    "Order #001 created",
    "Order #002 delivered",
    "Order #003 canceled",
    "Payment received",
  ];

  const products = [
    {
      id: 1,
      name: "Product A",
      sold: 120,
    },
    {
      id: 2,
      name: "Product B",
      sold: 95,
    },
    {
      id: 3,
      name: "Product C",
      sold: 80,
    },
  ];

  return (
    <div className="space-y-6">

      <PageHeader />

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">

        {stats.map((stat) => (
          <CardStat
            key={stat.id}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
            color={stat.color}
          />
        ))}

      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Chart */}
        <Card className="col-span-2">

          <SectionTitle>
            Revenue Overview
          </SectionTitle>

          <RevenueChart />

        </Card>

        {/* Activity */}
        <Card>

          <SectionTitle>
            Recent Activity
          </SectionTitle>

          <ActivityList activities={activities} />

        </Card>

      </div>

      {/* Bottom */}
      <Card>

        <SectionTitle>
          Top Products
        </SectionTitle>

        <ProductList products={products} />

      </Card>

    </div>
  );
}