import AppSidebar from "@/Components/AppSidebar/AppSidebar";
import Navbar from "@/Components/Navbar/Navbar";
import { SidebarProvider } from "@/Components/ui/sidebar";
import { Outlet, useLocation } from "react-router";

const PublicLayout = () => {
  const location = useLocation();

  const hideNavbarFrom = ["/login", "/register", "/forgot-password"];
  const hideNavbar = hideNavbarFrom.includes(location.pathname);
  return (
    <SidebarProvider>
      <AppSidebar role="public" />
      <main className="border w-full">
        {/* <SidebarTrigger className="hidden lg:block absolute left-8 z-50" /> */}
        {!hideNavbar && <Navbar />}
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default PublicLayout;
