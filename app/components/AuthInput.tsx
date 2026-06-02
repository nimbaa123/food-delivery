// app/components/AuthInput.tsx
"use client";

import { InputHTMLAttributes } from "react";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function AuthInput({ label, error, ...props }: AuthInputProps) {
  return (
    <div className="w-full space-y-2">
      <label className="text-sm font-medium text-gray-300 block">
        {label} <span className="text-[#E53935]">*</span>
      </label>
      <input
        {...props}
        className={`w-full px-4 py-3 rounded-xl bg-[#262626] border text-white placeholder-gray-500 focus:outline-none transition-all ${
          error
            ? "border-[#E53935] focus:border-[#E53935] ring-1 ring-[#E53935]/20"
            : "border-gray-850 focus:border-[#E53935]"
        }`}
      />
      {error && (
        <p className="text-xs text-[#E53935] font-medium mt-1 animate-pulse">
          {error}
        </p>
      )}
    </div>
  );
}
