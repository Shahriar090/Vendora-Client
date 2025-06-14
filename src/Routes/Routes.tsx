import CustomerLayout from "@/Layouts/CustomerLayout";
import PublicLayout from "@/Layouts/PublicLayout";
import SellerLayout from "@/Layouts/SellerLayout";
import CustomerDashboard from "@/Pages/Customer/CustomerDashboard";
import CustomerSettings from "@/Pages/Customer/CustomerSettings";
import MyOrders from "@/Pages/Customer/MyOrders";
import Profile from "@/Pages/Customer/Profile";
import Support from "@/Pages/Customer/Support";
import Wishlist from "@/Pages/Customer/Wishlist";
import Login from "@/Pages/Public/Login";
import NotFound from "@/Pages/Public/NotFound";
import Register from "@/Pages/Public/Register";
import Orders from "@/Pages/Seller/Orders";
import Payments from "@/Pages/Seller/Payments";
import Products from "@/Pages/Seller/Products";
import SellerDashboard from "@/Pages/Seller/SellerDashboard";
import Settings from "@/Pages/Seller/Settings";
import { createBrowserRouter, type RouteObject } from "react-router";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/seller",
    element: <SellerLayout />,
    children: [
      {
        path: "dashboard",
        element: <SellerDashboard />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "payments",
        element: <Payments />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/customer",
    element: <CustomerLayout />,
    children: [
      {
        path: "dashboard",
        element: <CustomerDashboard />,
      },
      {
        path: "my-orders",
        element: <MyOrders />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "support",
        element: <Support />,
      },
      {
        path: "settings",
        element: <CustomerSettings />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routes);
export default router;
