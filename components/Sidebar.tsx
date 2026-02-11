"use client";

import {
  PanelLeftClose,
  Search,
  SquarePen,
  Image,
  AppWindow,
  Code,
  ChevronDown,
} from "lucide-react";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

function SidebarItem({ icon, label, isActive }: SidebarItemProps) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
        isActive ? "bg-hover-bg" : "hover:bg-hover-bg"
      }`}
    >
      <span className="text-text-secondary">{icon}</span>
      <span className="text-sm text-text-primary">{label}</span>
    </div>
  );
}

interface ToolItemProps {
  name: string;
  color: string;
}

function ToolItem({ name, color }: ToolItemProps) {
  return (
    <div className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-hover-bg transition-colors">
      <div
        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium text-white"
        style={{ backgroundColor: color }}
      >
        {name.charAt(0).toUpperCase()}
      </div>
      <span className="text-sm text-text-primary truncate">{name}</span>
    </div>
  );
}

export default function Sidebar() {
  const tools = [
    { name: "Image Generation", color: "#6366f1" },
    { name: "Diagrams", color: "#8b5cf6" },
    { name: "Design Canvas", color: "#00c4cc" },
    { name: "Flowcharts", color: "#7c3aed" },
    { name: "Video", color: "#ef4444" },
    { name: "Research", color: "#f59e0b" },
    { name: "Scholar", color: "#3b82f6" },
    { name: "Web Design", color: "#ec4899" },
    { name: "PDF Reader", color: "#22c55e" },
  ];

  return (
    <aside className="w-[230px] h-screen bg-sidebar-bg flex flex-col flex-shrink-0">
      {/* Header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#6366f1] flex items-center justify-center">
            <span className="text-xs font-bold text-white">CC</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-2 rounded-lg hover:bg-hover-bg transition-colors">
            <PanelLeftClose size={18} className="text-text-secondary" />
          </button>
          <button className="p-2 rounded-lg hover:bg-hover-bg transition-colors">
            <SquarePen size={18} className="text-text-secondary" />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="px-2 py-1">
        <SidebarItem icon={<Search size={18} />} label="Search" />
        <SidebarItem icon={<Image size={18} />} label="Images" />
        <SidebarItem icon={<AppWindow size={18} />} label="Apps" />
        <SidebarItem icon={<Code size={18} />} label="Codex" />
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-2">
        {/* GPTs Section */}
        <div className="mt-4">
          <div className="flex items-center justify-between px-3 py-2">
            <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">
              Tools
            </span>
            <ChevronDown size={14} className="text-text-secondary" />
          </div>
          {tools.map((tool, index) => (
            <ToolItem key={index} name={tool.name} color={tool.color} />
          ))}
        </div>

      </div>

      {/* Bottom section */}
      <div className="p-3 border-t border-input-border">
        <div className="flex items-center gap-3 px-2 py-2 rounded-lg cursor-pointer hover:bg-hover-bg transition-colors">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-sm font-medium">
            A
          </div>
          <span className="text-sm text-text-primary">Anubhav</span>
        </div>
      </div>
    </aside>
  );
}
