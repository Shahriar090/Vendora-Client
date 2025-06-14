import AppSidebar from "@/Components/AppSidebar/AppSidebar";
import Navbar from "@/Components/Navbar/Navbar";
import { SidebarProvider } from "@/Components/ui/sidebar";
import { Outlet } from "react-router";

const CustomerLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar role="customer" />
      <main className="border w-full">
        <Navbar />
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default CustomerLayout;
