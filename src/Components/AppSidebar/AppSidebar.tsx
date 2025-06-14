import { Link } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import {
  customerSidebarItems,
  publicNavItems,
  sellerSidebarItems,
} from "./SidebarItems";

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
              {sellerSidebarItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild>
                    <Link to={item.to}>
                      <span>{item.icon}</span>
                      {item.label}{" "}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </>
          )}

          {role === "customer" && (
            <>
              {customerSidebarItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild>
                    <Link to={item.to}>
                      <span>{item.icon}</span>
                      {item.label}{" "}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </>
          )}

          {role === "public" && (
            <>
              {publicNavItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild>
                    <Link to={item.to}>
                      <span>{item.icon}</span>
                      {item.label}{" "}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </>
          )}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
