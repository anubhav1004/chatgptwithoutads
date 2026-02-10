"use client";

import { Plus, Mic, AudioLines } from "lucide-react";
import { useEffect } from "react";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: (message: string) => void;
  defaultValue?: string;
}

export default function ChatInput({ value, onChange, onSend, defaultValue }: ChatInputProps) {
  useEffect(() => {
    if (defaultValue && !value) {
      onChange(defaultValue);
    }
  }, [defaultValue]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend(value);
    }
  };

  return (
    <div className="w-full max-w-[680px] mx-auto px-2 sm:px-0">
      <div className="relative flex items-center bg-input-bg border border-input-border rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3">
        {/* Plus button */}
        <button className="p-1 sm:p-1.5 rounded-lg hover:bg-[#424242] transition-colors mr-1 sm:mr-2">
          <Plus size={18} className="sm:w-5 sm:h-5 text-text-secondary" />
        </button>

        {/* Input field */}
        <input
          type="text"
          placeholder="Ask anything"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent text-text-primary placeholder-text-secondary outline-none text-sm sm:text-base min-w-0"
        />

        {/* Right side icons */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          <button className="p-1.5 sm:p-2 rounded-lg hover:bg-[#424242] transition-colors hidden sm:block">
            <Mic size={20} className="text-text-secondary" />
          </button>
          <button
            onClick={() => onSend(value)}
            className="p-1.5 sm:p-2 rounded-full bg-white hover:bg-gray-200 transition-colors"
          >
            <AudioLines size={18} className="sm:w-5 sm:h-5 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
}
