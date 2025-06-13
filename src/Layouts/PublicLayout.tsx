import Navbar from "@/Components/Navbar/Navbar";
import { Outlet } from "react-router";

const PublicLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default PublicLayout;
