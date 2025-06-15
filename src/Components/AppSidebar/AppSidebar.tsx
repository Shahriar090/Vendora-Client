import { Link, NavLink } from "react-router";
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
      <SidebarHeader className="text-xl text-[var(--color-black)] font-medium py-4 bg-[var(--color-white)]">
        {role === "seller"
          ? "Seller Dashboard"
          : role === "customer"
          ? "Customer Dashboard"
          : "Navigation"}
      </SidebarHeader>

      <SidebarContent className="bg-[var(--color-white)]">
        <SidebarMenu className="space-y-1">
          {role === "seller" && (
            <>
              {sellerSidebarItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[var(--color-red)] font-semibold"
                        : "text-[var(--color-gray)]"
                    }
                  >
                    <SidebarMenuButton asChild>
                      <span>
                        <span>{item.icon}</span>
                        {item.label}
                      </span>
                    </SidebarMenuButton>
                  </NavLink>
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
