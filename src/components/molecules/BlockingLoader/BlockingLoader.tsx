import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface BlockingLoader {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BlockingLoader = ({
  size = 56,
  color = "#6b21a8",
  className,
}: BlockingLoader) => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-gray-400 opacity-75">
      <Loader2
        size={size}
        color={color}
        className={cn("animate-spin", className)}
      />
    </div>
  );
};
