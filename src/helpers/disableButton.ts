import { cn } from "@/lib/utils";

export const disableButton = (shouldDisable: boolean) => {
  return {
    className: cn(shouldDisable && "pointer-events-none opacity-45"),
    ["aria-disabled"]: shouldDisable,
    tabIndex: shouldDisable ? -1 : undefined,
  };
};
