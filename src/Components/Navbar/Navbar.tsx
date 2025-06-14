import arrowDownIcon from "../../assets/arrow-down.png";
import notificationBellIcon from "../../assets/notification-bell.png";
import searchIcon from "../../assets/search-icon.png";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import LanguageSection from "./LanguageSection";
import LowerNav from "./LowerNav";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { Button } from "../ui/button";
import { SidebarTrigger } from "../ui/sidebar";

const Navbar = () => {
  // Simulating auth with static data
  const [user, setUser] = useState({
    name: "Shahriar",
    role: "customer",
  });

  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (user.role === "seller") {
      navigate("/seller/dashboard");
    } else {
      navigate("/customer/dashboard");
    }
  };

  return (
    <>
      {/* Navbar top part */}
      <header className="w-full bg-[var(--color-white)]">
        {/* Top Border Wrapper */}
        <div className="w-full border-b border-[var(--color-gray-border)]">
          <nav className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
            {/* LEFT: Sidebar button and logo */}
            <div className="flex items-center gap-3">
              {/* Sidebar button (for mobile) */}
              <SidebarTrigger />

              {/* Logo (always visible) */}
              <Link to="/">
                <h1 className="text-xl lg:text-2xl uppercase font-bold text-[var(--color-red)]">
                  Vendora
                </h1>
              </Link>
            </div>

            {/* RIGHT: Language, Bell, Avatar */}
            <div className="flex items-center gap-4">
              <LanguageSection />

              <div className="relative">
                <img
                  src={notificationBellIcon}
                  alt="bell"
                  className="w-7 h-7 border-2 rounded-sm p-1"
                />
                <span className="absolute -top-1 -right-1 bg-[var(--color-red)] text-[var(--color-white)] text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  3
                </span>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 text-sm">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback>SH</AvatarFallback>
                  </Avatar>
                  <span className="hidden sm:block font-semibold">
                    {user.name}
                  </span>
                  <img src={arrowDownIcon} alt="down" className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={handleProfileClick}>
                    My Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setUser({ ...user, role: "customer" })}
                  >
                    Set As Customer
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setUser({ ...user, role: "seller" })}
                  >
                    Set As Seller
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </nav>
        </div>

        {/* Navbar bottom part */}
        <div className="w-full border-b border-[var(--color-gray-border)]">
          <nav className="max-w-screen-xl mx-auto px-4 py-3">
            <div className="flex lg:items-center lg:justify-between flex-col lg:flex-row gap-2">
              {/* Desktop: Category + Input + Button */}
              <LowerNav />

              {/* Mobile: Search Input */}
              <div className="lg:hidden w-full relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full p-2 pl-4 pr-10 border rounded"
                />
                <Button className="absolute right-2 top-1/2 -translate-y-1/2 ml-2 bg-[var(--color-red)] rounded-sm">
                  <img src={searchIcon} alt="Search Icon" className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
