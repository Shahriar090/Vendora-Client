import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { Eye, Search, Truck } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const Orders = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  const orders = [
    {
      id: "ORD123456",
      date: "2025-06-10",
      buyer: "John Doe",
      amount: "$150.00",
      status: "Pending",
    },
    {
      id: "ORD123457",
      date: "2025-06-11",
      buyer: "Jane Smith",
      amount: "$240.00",
      status: "Shipped",
    },
    // Add more dummy orders here
  ];

  const filteredOrders =
    selectedTab === "all"
      ? orders
      : orders.filter((order) => order.status.toLowerCase() === selectedTab);

  return (
    <section className="bg-[var(--color-gray-bg)] space-y-6 pt-5 h-full">
      <section className="max-w-screen-xl mx-auto px-4 space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Orders</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search orders..."
              className="w-full pl-10 bg-[var(--color-white)]"
            />
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="shipped">Shipped</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Orders Table */}
        <div className="rounded-md border overflow-x-auto">
          <Table className="bg-[var(--color-white)]">
            <TableHeader>
              <TableRow>
                <TableHead className="text-[var(--color-gray)]">
                  Order ID
                </TableHead>
                <TableHead className="text-[var(--color-gray)]">Date</TableHead>
                <TableHead className="text-[var(--color-gray)]">
                  Buyer
                </TableHead>
                <TableHead className="text-[var(--color-gray)]">
                  Amount
                </TableHead>
                <TableHead className="text-[var(--color-gray)]">
                  Status
                </TableHead>
                <TableHead className="text-[var(--color-gray)]">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.buyer}</TableCell>
                  <TableCell>{order.amount}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell className="space-x-2">
                    <Link to="/seller/order-details">
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-xs"
                      >
                        <Eye /> View
                      </Button>
                    </Link>
                    {order.status.toLowerCase() === "pending" && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-[var(--color-red)] text-[var(--color-white)] rounded-xs"
                      >
                        <Truck />
                        Ship
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </section>
  );
};

export default Orders;
