import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../../components/ui/alert-dialog";
import { Button } from "../../../components/ui/button";
import { DEFAULT_ERROR_MESSAGE } from "../../../constants";
import { ErrorDataType } from "../../../types";
import Link from "next/link";

interface ErrorDialog {
  errorData?: ErrorDataType;
  customButton?: JSX.Element;
  openDialog?: boolean;
}

export const ErrorDialog = ({
  errorData,
  customButton,
  openDialog = true,
}: ErrorDialog) => {
  return (
    <AlertDialog open={openDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          {errorData?.error_id && (
            <AlertDialogTitle>
              Error status: {errorData.error_id}
            </AlertDialogTitle>
          )}
          <AlertDialogDescription>
            {errorData?.error_message || DEFAULT_ERROR_MESSAGE}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <div className="flex flex-row gap-2">
            <Button asChild>
              <Link href="/">Go Back</Link>
            </Button>
            {customButton}
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
