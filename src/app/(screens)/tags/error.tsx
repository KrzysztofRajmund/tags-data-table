"use client";
import { ErrorDialog } from "@/components/molecules";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  const tryAgainButton = (
    <Button
      variant="ghost"
      onClick={
        // Recover by trying to re-render the segment
        () => reset()
      }
    >
      Try again
    </Button>
  );

  return (
    <ErrorDialog
      customButton={tryAgainButton}
      errorData={{ error_message: error.message }}
    />
  );
}
