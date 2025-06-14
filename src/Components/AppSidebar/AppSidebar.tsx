import { Link } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

type TAppSidebarProps = {
  role: "seller" | "customer" | "public";
};

const AppSidebar = ({ role }: TAppSidebarProps) => {
  return (
    <Sidebar>
      <SidebarHeader>
        {role === "seller"
          ? "Seller Dashboard"
          : role === "customer"
          ? "Customer Dashboard"
          : "Navigation"}
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {role === "seller" && (
            <>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/seller/products">My Products</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/seller/orders">Total Orders</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </>
          )}

          {role === "customer" && (
            <>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/customer/orders">My Orders</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/customer/wishlist">Wishlist</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </>
          )}

          {role === "public" && (
            <>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/">Home</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/shop">Shop</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/login">Login</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </>
          )}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
