import { Alert, AlertTitle } from "@/Components/ui/alert";
import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import {
  CheckCircleIcon,
  ClockIcon,
  OctagonAlert,
  TrendingUpIcon,
  TruckIcon,
  XCircleIcon,
} from "lucide-react";

const SellerDashboard = () => {
  const salesToday = 1520;
  const salesThisWeek = 10340;
  const salesThisMonth = 40210;

  const orderStatus = {
    pending: 8,
    shipped: 14,
    delivered: 35,
    cancelled: 3,
  };

  return (
    <div className="max-w-screen-xl mx-auto p-6 space-y-6 bg-[var(--color-gray-bg)]">
      {/* Welcome Message */}
      <div>
        <h1 className="text-2xl font-bold text-[var(--color-black)]">
          Welcome back, Admin!
        </h1>
        <p className="text-[var(--color-gray)] mt-1">
          You have made{" "}
          <span className="font-semibold text-[var(--color-black)]">
            $1,520
          </span>{" "}
          today.
        </p>
      </div>

      {/* Sales Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-medium mb-1 text-[var(--color-gray)]">
              Sales Today
            </h2>
            <p className="text-2xl font-semibold text-[var(--color-black)]">
              ${salesToday}
            </p>
            <span className="font-medium text-[var(--color-green)]">
              +15% From last period
            </span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-medium mb-1 text-[var(--color-gray)]">
              Sales Today
            </h2>
            <p className="text-2xl font-semibold text-[var(--color-black)]">
              ${salesThisWeek}
            </p>
            <span className="font-medium text-[var(--color-green)]">
              +15% From last period
            </span>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-medium mb-1 text-[var(--color-gray)]">
              Sales Today
            </h2>
            <p className="text-2xl font-semibold text-[var(--color-black)]">
              ${salesThisMonth}
            </p>
            <span className="font-medium text-[var(--color-green)]">
              +15% From last period
            </span>
          </CardContent>
        </Card>
      </div>

      {/* Order Status */}
      <div className=" bg-[var(--color-white)] p-6 rounded-sm border-2 border-zinc-200">
        <h1 className="font-medium text-xl text-[var(--color-black)] pb-4">
          Order Status
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 flex items-center gap-2">
              <ClockIcon className="text-yellow-500 w-8 h-8" />
              <div>
                <p className="text-sm text-[var(--color-back)]">Pending</p>
                <p className="text-lg font-semibold text-[var(--color-back)]">
                  {orderStatus.pending}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 flex items-center gap-2">
              <TruckIcon className="text-blue-500 w-8 h-8" />
              <div>
                <p className="text-sm text-[var(--color-back)]">Shipped</p>
                <p className="text-lg font-semibold text-[var(--color-back)]">
                  {orderStatus.shipped}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 flex items-center gap-2">
              <CheckCircleIcon className="text-green-500 w-8 h-8" />
              <div>
                <p className="text-sm text-[var(--color-back)]">Delivered</p>
                <p className="text-lg font-semibold text-[var(--color-back)]">
                  {orderStatus.delivered}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 flex items-center gap-2">
              <XCircleIcon className="text-red-500 w-8 h-8" />
              <div>
                <p className="text-sm text-[var(--color-back)]">Cancelled</p>
                <p className="text-lg font-semibold text-[var(--color-back)]">
                  {orderStatus.cancelled}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Revenue Trend Placeholder */}
      <div className="mt-6">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-medium mb-2 flex items-center gap-2">
              <TrendingUpIcon className="text-purple-500" /> Revenue Trend (Last
              30 Days)
            </h2>
            <div className="h-60 bg-gray-100 rounded flex items-center justify-center text-gray-500">
              Revenue chart will be implemented here
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <Alert className="flex flex-col lg:flex-row justify-between items-center bg-[var(--color-warning-bg)] p-5 border border-[var(--color-warning-text)]">
          <AlertTitle className="flex flex-col lg:flex-row items-center gap-2 text-[var(--color-warning-text)] text-center lg:text-start">
            <OctagonAlert className="w-5 h-5 text-[var(--color-warning-text)]" />{" "}
            You have two products running low.! Restock now
          </AlertTitle>
          <Button
            size="sm"
            variant="outline"
            className="border border-[var(--color-warning-text)] text-[var(--color-warning-text)]"
          >
            View Products
          </Button>
        </Alert>
      </div>
    </div>
  );
};

export default SellerDashboard;
