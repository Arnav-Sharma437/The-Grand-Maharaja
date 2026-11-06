import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-50 cursor-pointer tracking-wider uppercase text-xs";

    const variants = {
      primary:
        "bg-gold text-brand-black hover:bg-gold-champagne shadow-[0_4px_20px_rgba(212,175,55,0.15)]",
      secondary:
        "bg-brand-black-card text-ivory border border-brand-black-border hover:border-gold/50",
      outline:
        "border border-gold text-gold hover:bg-gold hover:text-brand-black",
      ghost:
        "text-ivory hover:text-gold hover:bg-white/5",
    };

    const sizes = {
      sm: "h-9 px-4 py-2",
      md: "h-11 px-6 py-2.5",
      lg: "h-13 px-8 py-3 text-sm",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
