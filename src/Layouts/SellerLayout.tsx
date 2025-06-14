import AppSidebar from "@/Components/AppSidebar/AppSidebar";
import Navbar from "@/Components/Navbar/Navbar";
import { SidebarProvider } from "@/Components/ui/sidebar";
import { Outlet } from "react-router";

const SellerLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar role="seller" />
      <main className="w-full">
        <Navbar />
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default SellerLayout;
