import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import arrowDownIcon from "../../assets/arrow-down.png";
import searchIcon from "../../assets/search-icon.png";
import { Button } from "../ui/button";

const LowerNav = () => {
  return (
    <div className="hidden lg:flex items-center w-full">
      <div className="flex items-center border rounded w-full overflow-hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 px-4 flex items-center gap-1 border-r">
              Categories
              <img src={arrowDownIcon} alt="down" className="w-3 h-3" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Electronics</DropdownMenuItem>
            <DropdownMenuItem>Clothing</DropdownMenuItem>
            <DropdownMenuItem>Home & Garden</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="relative flex-1">
          <img
            src={searchIcon}
            alt="Search Icon"
            className="w-5 h-5 absolute left-2 top-1/2 -translate-y-1/2"
          />
          <input
            type="text"
            placeholder="Search by product, brand or keyword"
            className="w-full pl-8 pr-2 py-2"
          />
        </div>
      </div>
      <Button className="ml-2 bg-[var(--color-red)] text-white rounded-sm px-6">
        Search
      </Button>
    </div>
  );
};

export default LowerNav;
