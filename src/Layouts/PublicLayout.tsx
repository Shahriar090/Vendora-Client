import AppSidebar from "@/Components/AppSidebar/AppSidebar";
import Navbar from "@/Components/Navbar/Navbar";
import { SidebarProvider } from "@/Components/ui/sidebar";
import { Outlet } from "react-router";

const PublicLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar role="public" />
      <main className="border w-full">
        {/* <SidebarTrigger className="hidden lg:block absolute left-8 z-50" /> */}
        <Navbar />
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default PublicLayout;
