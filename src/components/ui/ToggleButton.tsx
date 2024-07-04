"use client"

import { Flame } from "lucide-react";
import React, { useState } from "react";

interface ToggleSwitchProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ className, ...props }) => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    <div className={`relative flex items-center ${className}`} {...props}>
      <div
        className={`peer relative inline-flex h-8 w-24 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 ${checked ? 'bg-[#e2e8f0]' : 'bg-input'}`}
        onClick={handleToggle}
      >
        <div
          className={`pointer-events-none absolute left-1 flex items-center justify-center h-7 w-7 rounded-full bg-background shadow-lg ring-0 transition-transform ${checked ? 'translate-x-16' : 'translate-x-0'}`}
        >
          <Flame className="w-5" />
        </div>
      </div>
   
    </div>
  );
};

export { ToggleSwitch };
