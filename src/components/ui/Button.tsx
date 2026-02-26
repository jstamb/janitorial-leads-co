"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
          // Variants
          variant === "primary" && "bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary shadow-lg shadow-secondary/30",
          variant === "secondary" && "bg-primary text-white hover:bg-primary-light focus:ring-primary",
          variant === "outline" && "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
          variant === "ghost" && "text-primary hover:bg-primary/10 focus:ring-primary",
          // Sizes
          size === "sm" && "px-4 py-2 text-sm",
          size === "md" && "px-6 py-3 text-base",
          size === "lg" && "px-8 py-4 text-lg",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
