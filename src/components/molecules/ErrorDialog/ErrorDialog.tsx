import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ErrorDataType } from "@/types";
import Link from "next/link";

interface ErrorDialog {
  errorData?: ErrorDataType;
}

const defaultErrorMessage = "Something went wrong!";

export const ErrorDialog = ({ errorData }: ErrorDialog) => {
  return (
    <AlertDialog open>
      <AlertDialogContent>
        <AlertDialogHeader>
          {errorData?.error_id && (
            <AlertDialogTitle>
              Error status: {errorData.error_id}
            </AlertDialogTitle>
          )}
          <AlertDialogDescription>
            {errorData?.error_message || defaultErrorMessage}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <div className="flex flex-row gap-2">
            <Button asChild>
              <Link href="/">Back to homepage</Link>
            </Button>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
