import CustomerLayout from "@/Layouts/CustomerLayout";
import PublicLayout from "@/Layouts/PublicLayout";
import SellerLayout from "@/Layouts/SellerLayout";
import CustomerDashboard from "@/Pages/Customer/CustomerDashboard";
import Login from "@/Pages/Public/Login";
import NotFound from "@/Pages/Public/NotFound";
import Register from "@/Pages/Public/Register";
import SellerDashboard from "@/Pages/Seller/SellerDashboard";
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
