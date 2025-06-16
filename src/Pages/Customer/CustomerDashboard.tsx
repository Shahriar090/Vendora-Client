import { Card, CardTitle } from "@/Components/ui/card";
import {
  Heart,
  Truck,
  TicketPercent,
  CheckCircle,
  Star,
  Gift,
  Box,
} from "lucide-react";

const CustomerDashboard = () => {
  const userName = "Shahriar";

  const cards = [
    {
      title: "Total Orders",
      count: 24,
      icon: <Box className="w-8 h-8 text-primary" />,
    },
    {
      title: "Wishlist Items",
      count: 12,
      icon: <Heart className="w-8 h-8 text-primary" />,
    },
    {
      title: "Pending Deliveries",
      count: 5,
      icon: <Truck className="w-8 h-8 text-primary" />,
    },
    {
      title: "Active Coupons",
      count: 3,
      icon: <TicketPercent className="w-8 h-8 text-primary" />,
    },
  ];

  const activities = [
    {
      title: "Order Delivered",
      message: "Your order (#23456) has been delivered.",
      date: "June 16, 2025",
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Added to Wishlist",
      message: "Product (#98765) added to wishlist.",
      date: "June 15, 2025",
      icon: <Heart className="w-6 h-6 text-pink-500" />,
    },
    {
      title: "Order Shipped",
      message: "Your order (#23456) has been shipped.",
      date: "June 14, 2025",
      icon: <Truck className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Review Posted",
      message: "You reviewed product (#43210).",
      date: "June 13, 2025",
      icon: <Star className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: "Coupon Applied",
      message: "You applied coupon SAVE20.",
      date: "June 12, 2025",
      icon: <Gift className="w-6 h-6 text-purple-500" />,
    },
  ];

  return (
    <section className="bg-[var(--color-gray-bg)] max-w-screen-xl mx-auto pt-5">
      <div className="px-4 space-y-8">
        {/* Top Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-[var(--color-black)]">
            Hi {userName}
          </h2>
          <span className="text-sm text-[var(--color-gray)]">
            Last updated Today, 10:30 AM
          </span>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="flex flex-row justify-between items-center px-5 py-8"
            >
              <div className="flex flex-col justify-between h-full">
                <CardTitle className="text-base font-medium text-muted-foreground">
                  {card.title}
                </CardTitle>
                <div className="text-2xl font-bold">{card.count}</div>
              </div>
              <div className="ml-4 flex-shrink-0">{card.icon}</div>
            </Card>
          ))}
        </div>

        {/* Recent Activity Section */}
        <section className="space-y-4 bg-[var(--color-white)] border-2 p-5 rounded-sm">
          <h3 className="text-xl font-semibold">Recent Activity</h3>
          <div className="space-y-4">
            {activities.map((activity, idx) => (
              <div key={idx} className="flex justify-between items-start  p-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1">{activity.icon}</div>
                  <div>
                    <div className="font-medium">{activity.title}</div>
                    <div className="text-sm text-[var(--color-gray)]">
                      {activity.message}
                    </div>
                  </div>
                </div>
                <div className="text-sm text-[var(--color-gray)] whitespace-nowrap">
                  {activity.date}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default CustomerDashboard;
