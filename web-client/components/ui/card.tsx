import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md shadow-xl text-white",
                className
            )}
            {...props}
        />
    )
);
Card.displayName = "Card";

export { Card };
