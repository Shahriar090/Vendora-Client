import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Separator } from "@/Components/ui/separator";
import { ArrowLeft, Printer, Mail, CheckCircle } from "lucide-react";

import "react-step-progress-bar/styles.css";

const steps = [
  { label: "Order Placed", date: "2025-06-10" },
  { label: "Payment Confirmed", date: "2025-06-10" },
  { label: "Processing", span: "Wait for processing" },
  { label: "Shipped" },
  { label: "Delivered" },
];

// Determine progress (index of last completed step)
const completedStep = 2; // zero-based index, e.g., step 0,1,2 are done

const OrderDetails = () => {
  return (
    <section className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <ArrowLeft className="h-5 w-5" /> Order Details
        </h1>
        <div className="space-x-2">
          <Button variant="outline">
            <Printer className="w-4 h-4 mr-2" /> Print Invoice
          </Button>
          <Button>
            <Mail className="w-4 h-4 mr-2" /> Contact Buyer
          </Button>
        </div>
      </div>

      {/* Ordered Product */}
      <Card>
        <CardContent className="flex p-4 gap-4">
          <img
            src="https://via.placeholder.com/100"
            alt="Product"
            className="w-24 h-24 object-cover rounded-md"
          />
          <div className="flex-1">
            <div className="flex justify-between">
              <h2 className="font-semibold text-lg">Sample Product Name</h2>
              <span className="text-sm text-green-600">Shipped</span>
            </div>
            <div className="text-sm text-muted-foreground mt-2 space-y-1">
              <p>Order ID: ORD123456</p>
              <p>Date: 2025-06-10</p>
              <p>Quantity: 2</p>
              <p>Condition: New</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Timeline Card */}
        {/* Timeline Card - with Progress Stepper styling */}
        <Card>
          <CardHeader>
            <CardTitle>Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative flex flex-col gap-6 ml-4 border-l-2 border-muted pl-6">
              {steps.map((step, idx) => {
                const accomplished = idx <= completedStep;

                return (
                  <div key={idx} className="relative flex items-start gap-3">
                    <CheckCircle
                      className={`absolute -left-[22px] top-0 w-5 h-5 ${
                        accomplished
                          ? "text-blue-600"
                          : "text-muted-foreground opacity-50"
                      }`}
                      strokeWidth={2}
                    />
                    <div className="text-sm">
                      <p className="font-medium">
                        {step.label}
                        {step.date && (
                          <span className="ml-1 text-muted-foreground text-xs">
                            ({step.date})
                          </span>
                        )}
                      </p>
                      {step.span && (
                        <p className="text-xs text-muted-foreground">
                          {step.span}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Buyer Info Card */}
        <Card>
          <CardHeader>
            <CardTitle>Buyer Info</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-3">
            <div>
              <h3 className="font-medium">Buyer</h3>
              <p>Name: John Doe</p>
              <p>Email: john@example.com</p>
            </div>
            <div>
              <h3 className="font-medium">Shipping Address</h3>
              <p>123 Example Street, Dhaka, Bangladesh</p>
            </div>
            <div>
              <h3 className="font-medium">Payment Method</h3>
              <p>Credit Card</p>
              <p className="text-green-600">Paid</p>
            </div>
          </CardContent>
        </Card>

        {/* Payment Info Card */}
        <Card>
          <CardHeader>
            <CardTitle>Payment Info</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$200.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$10.00</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>$5.00</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span>-$15.00</span>
            </div>
            <Separator className="my-2" />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>$200.00</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="pt-6 space-x-2">
        <Button variant="destructive">Cancel Order</Button>
        <Button>Ship Order</Button>
      </div>
    </section>
  );
};

export default OrderDetails;
