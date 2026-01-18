import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", ...props }, ref) => {
        const variants = {
            primary: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] border-transparent",
            secondary: "bg-white text-black hover:bg-gray-200",
            outline: "bg-transparent border border-white/20 text-white hover:bg-white/10 hover:border-white/40",
            ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-bold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none active:scale-95 border",
                    variants[variant],
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
