import { cn } from "@/lib/utils";

export const disableButton = (shouldDisable: boolean) => {
  return {
    className: cn("font-semibold", {
      "pointer-events-none opacity-35": shouldDisable,
    }),
    ["aria-disabled"]: shouldDisable,
    tabIndex: shouldDisable ? -1 : undefined,
  };
};
