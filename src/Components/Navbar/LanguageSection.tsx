import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import globeIcon from "../../assets/globe.png";
import questionMarkIcon from "../../assets/question-mark.png";
import arrowDownIcon from "../../assets/arrow-down.png";

const LanguageSection = () => {
  return (
    <div className="hidden lg:flex items-center gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1 text-sm">
          <img src={globeIcon} alt="globe" className="w-5 h-5" />
          <span className="text-sm">EN</span>
          <img src={arrowDownIcon} alt="down" className="w-4 h-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>English</DropdownMenuItem>
          <DropdownMenuItem>বাংলা</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex items-center gap-1">
        <img
          src={questionMarkIcon}
          alt="help"
          className="w-6 h-6 border-2 p-1 rounded-full"
        />
        <span className="text-sm text-[var(--color-gray)]">Help</span>
      </div>
    </div>
  );
};

export default LanguageSection;
