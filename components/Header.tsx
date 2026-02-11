"use client";

import { ChevronDown, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="h-12 sm:h-14 flex items-center justify-between px-3 sm:px-4 border-b border-transparent">
      {/* Left side - Menu on mobile, Model selector */}
      <div className="flex items-center gap-2">
        <button className="p-2 rounded-lg hover:bg-hover-bg transition-colors md:hidden">
          <Menu size={20} className="text-text-secondary" />
        </button>
        <div className="flex items-center gap-1 sm:gap-2 cursor-pointer hover:bg-hover-bg px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg transition-colors">
          <span className="text-sm sm:text-base font-medium text-text-primary">CuriousChat</span>
          <ChevronDown size={14} className="sm:w-4 sm:h-4 text-text-secondary" />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-1 sm:gap-2">
        {/* User avatar */}
        <button className="p-1 rounded-lg hover:bg-hover-bg transition-colors">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
            <span className="text-xs sm:text-sm font-medium text-white">A</span>
          </div>
        </button>
      </div>
    </header>
  );
}
