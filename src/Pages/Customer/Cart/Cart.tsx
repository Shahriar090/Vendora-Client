import { useState } from "react";

import { Trash2, Plus, Minus, Tag, Store } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Checkbox } from "@/Components/ui/checkbox";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";

interface CartItem {
  id: string;
  name: string;
  image: string;
  edition: string;
  price: number;
  quantity: number;
  shop: string;
}

const initialCartItems: CartItem[] = [
  {
    id: "1",
    name: "Smart Watch",
    image: "/watch.jpg",
    edition: "Black / Premium Edition",
    price: 120,
    quantity: 1,
    shop: "Super Smart Shop",
  },
  {
    id: "2",
    name: "Wireless Headphones",
    image: "/headphones.jpg",
    edition: "White / Limited Edition",
    price: 80,
    quantity: 2,
    shop: "Super Smart Shop",
  },
  {
    id: "3",
    name: "Gaming Mouse",
    image: "/mouse.jpg",
    edition: "RGB / Pro Edition",
    price: 60,
    quantity: 1,
    shop: "Tech Bazaar",
  },
  {
    id: "4",
    name: "Mechanical Keyboard",
    image: "/keyboard.jpg",
    edition: "Blue Switch / Full Size",
    price: 150,
    quantity: 1,
    shop: "Tech Bazaar",
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [promoCode, setPromoCode] = useState("");

  const handleSelectAll = (isChecked: boolean) => {
    setSelectedItems(isChecked ? cartItems.map((item) => item.id) : []);
  };

  const handleSelectAllByShop = (shop: string, isChecked: boolean) => {
    const shopItems = cartItems.filter((item) => item.shop === shop);
    const shopItemIds = shopItems.map((item) => item.id);
    setSelectedItems((prev) =>
      isChecked
        ? Array.from(new Set([...prev, ...shopItemIds]))
        : prev.filter((id) => !shopItemIds.includes(id))
    );
  };

  const handleSelectItem = (id: string, isChecked: boolean) => {
    setSelectedItems((prev) =>
      isChecked ? [...prev, id] : prev.filter((itemId) => itemId !== id)
    );
  };

  const handleDeleteSelected = () => {
    setCartItems((prev) =>
      prev.filter((item) => !selectedItems.includes(item.id))
    );
    setSelectedItems([]);
  };

  const handleQuantityChange = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const groupedByShop = cartItems.reduce<Record<string, CartItem[]>>(
    (acc, item) => {
      if (!acc[item.shop]) acc[item.shop] = [];
      acc[item.shop].push(item);
      return acc;
    },
    {}
  );

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 20;
  const tax = subTotal * 0.1;
  const total = subTotal + shipping + tax;

  return (
    <section className="bg-[var(--color-gray-bg)] pt-5">
      <div className="mb-4 max-w-screen-xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-[var(--color-black)]">
          Shopping Cart
        </h2>
        <p className="text-[var(--color-gray)]">
          You have {cartItems.length} items
        </p>
      </div>
      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 max-w-screen-xl mx-auto">
        {/* LEFT SECTION - Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {/* Select All */}
          <div className="flex items-center justify-between p-4 bg-[var(--color-white)]">
            <div className="flex items-center gap-2">
              <Checkbox
                checked={
                  selectedItems.length === cartItems.length &&
                  cartItems.length > 0
                }
                onCheckedChange={(checked) => handleSelectAll(Boolean(checked))}
              />
              <span className="font-medium text-[var(--color-gray)]">
                Select All
              </span>
            </div>
            <Button
              variant="outline"
              className="border-0 shadow-none text-[var(--color-red)]"
              size="sm"
              onClick={handleDeleteSelected}
            >
              <Trash2 className="w-4 h-4 mr-1" /> Delete
            </Button>
          </div>

          {/* Grouped by Shop */}
          {Object.entries(groupedByShop).map(([shop, items]) => (
            <Card key={shop} className="border">
              <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
                <div className="flex items-center gap-3">
                  <Checkbox
                    checked={items.every((item) =>
                      selectedItems.includes(item.id)
                    )}
                    onCheckedChange={(checked) =>
                      handleSelectAllByShop(shop, Boolean(checked))
                    }
                  />
                  <Store className="w-5 h-5 text-[var(--color-gray)]" />
                  <span className="font-medium text-[var(--color-gray)]">
                    {shop}
                  </span>
                </div>
                {/* <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    const shopItemIds = items.map((item) => item.id);
                    setCartItems((prev) =>
                      prev.filter((item) => !shopItemIds.includes(item.id))
                    );
                    setSelectedItems((prev) =>
                      prev.filter((id) => !shopItemIds.includes(id))
                    );
                  }}
                >
                  <Trash2 className="w-5 h-5" />
                </Button> */}
              </CardHeader>
              <CardContent className="divide-y">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center py-4 gap-4">
                    <Checkbox
                      checked={selectedItems.includes(item.id)}
                      onCheckedChange={(checked) =>
                        handleSelectItem(item.id, Boolean(checked))
                      }
                    />
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <div className="flex-1">
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {item.edition}
                      </div>
                      <div className="text-sm font-semibold text-primary">
                        ${item.price}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setCartItems((prev) =>
                            prev.filter((i) => i.id !== item.id)
                          );
                          setSelectedItems((prev) =>
                            prev.filter((id) => id !== item.id)
                          );
                        }}
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </Button>
                      <div className="flex items-center gap-1">
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full"
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="px-2">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full"
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* RIGHT SECTION - Summary */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="relative flex items-center gap-2">
                <Input
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="px-9"
                />
                <Tag className="absolute left-2 w-5 h-5" />
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-[var(--color-red)] text-[var(--color-white)] rounded-sm py-5 px-5"
                >
                  Apply
                </Button>
              </div>
              <hr />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-end">
                <Button className=" bg-[var(--color-red)] text-[var(--color-white)] rounded-sm py-5 px-5">
                  Proceed to Checkout
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Cart;
