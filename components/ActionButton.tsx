"use client";

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

export default function ActionButton({ icon, label, onClick }: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full border border-input-border hover:bg-hover-bg transition-colors"
    >
      {icon}
      <span className="text-xs sm:text-sm text-text-primary">{label}</span>
    </button>
  );
}
