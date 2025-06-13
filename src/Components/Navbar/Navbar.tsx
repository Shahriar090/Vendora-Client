import { useState } from "react";
import arrowDownIcon from "../../assets/arrow-down.png";
import notificationBellIcon from "../../assets/notification-bell.png";
import menuIcon from "../../assets/menu-icon.png";
import closeIcon from "../../assets/close-icon.png";
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

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Navbar top part*/}
      <header className="w-full bg-[var(--color-white)]">
        {/* Top Border Wrapper */}
        <div className="w-full border-b border-[var(--color-gray-border)]">
          <nav className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
            {/* Left: Mobile Menu Icon  */}
            <div className="flex items-center gap-2">
              <button
                className="lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <img src={menuIcon} alt="menu" className="w-6 h-6" />
              </button>
              <div className="lg:block hidden">
                <h1 className="text-2xl uppercase font-bold text-[var(--color-red)]">
                  Vendora
                </h1>
              </div>
            </div>

            <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2">
              <h1 className="text-xl uppercase font-bold text-[var(--color-red)]">
                Vendora
              </h1>
            </div>

            {/* Right Section */}
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
                    Shahriar
                  </span>
                  <img src={arrowDownIcon} alt="down" className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>My Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </nav>
        </div>

        {/* Navbar bottom part */}
        {/* Bottom Border Wrapper */}
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
                <button className="absolute right-2 top-1/2 -translate-y-1/2">
                  <img src={searchIcon} alt="Search Icon" className="w-5 h-5" />
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Sidebar Drawer */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50">
          <div className="w-64 h-full bg-white shadow-lg p-4 relative">
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-2 right-2"
            >
              <img src={closeIcon} alt="close" className="w-5 h-5" />
            </button>
            <ul className="mt-10 space-y-4">
              <li className="text-lg font-semibold">Home</li>
              <li className="text-lg font-semibold">Shop</li>
              <li className="text-lg font-semibold">Orders</li>
              <li className="text-lg font-semibold">Account</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
