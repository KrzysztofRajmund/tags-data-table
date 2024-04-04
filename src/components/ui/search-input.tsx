import * as React from "react";

import { cn } from "../../lib/utils";
import { Search } from "lucide-react";

export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  withIcon?: boolean;
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, type, withIcon, ...props }, ref) => {
    return (
      <div className="relative max-w-[185px] items-center">
        <input
          type={type}
          className={cn(
            "focus-visible:ring-brand flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
        {withIcon && (
          <Search
            className=" text-brand pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
            size={21}
          />
        )}
      </div>
    );
  },
);
SearchInput.displayName = "SearchInput";

export { SearchInput };
