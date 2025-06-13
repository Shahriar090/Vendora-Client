import Navbar from "@/Components/Navbar/Navbar";
import { Outlet } from "react-router";

const SellerLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default SellerLayout;
