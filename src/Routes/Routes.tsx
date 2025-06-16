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
import AddProduct from "@/Pages/Seller/AddProduct/AddProduct";
import EditProduct from "@/Pages/Seller/EditProduct/EditProduct";
import OrderDetails from "@/Pages/Seller/Orders/OrderDetails";
import Orders from "@/Pages/Seller/Orders/Orders";
import Payments from "@/Pages/Seller/Payments/Payments";
import Products from "@/Pages/Seller/Products/Products";
import SellerDashboard from "@/Pages/Seller/SellerDashboard";
import Settings from "@/Pages/Seller/Settings/Settings";
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
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "edit-product",
        element: <EditProduct />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "order-details",
        element: <OrderDetails />,
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
