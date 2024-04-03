import { Meta, StoryFn, StoryObj } from "@storybook/react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog";
import { Button } from "./button";

const Template: StoryFn = () => {
  return (
    <div className="flex p-8">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Show Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Title example</AlertDialogTitle>
            <AlertDialogDescription>Description example</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

const meta: Meta = {
  title: "Shadcn/UI/AlertDialog",
  component: Template,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Default: StoryObj<typeof meta> = {};
