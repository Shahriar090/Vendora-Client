import Navbar from "@/Components/Navbar/Navbar";
import { Outlet } from "react-router";

const CustomerLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default CustomerLayout;
