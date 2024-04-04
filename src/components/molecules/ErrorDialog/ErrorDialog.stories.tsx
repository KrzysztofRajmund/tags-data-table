import { Button } from "../../../components/ui/button";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ErrorDialog } from "./ErrorDialog";

const Template: StoryFn = (args) => {
  const [show, setShow] = useState(false);

  const closeDialog = (
    <Button variant="outline" onClick={() => setShow(false)}>
      Close Dialog
    </Button>
  );

  return (
    <div className="flex p-8">
      <Button variant="outline" onClick={() => setShow(true)}>
        Open Dialog
      </Button>
      <ErrorDialog openDialog={show} customButton={closeDialog} {...args} />
    </div>
  );
};

const meta: Meta = {
  title: "Molecules/ErrorDialog",
  component: Template,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Default: StoryObj<typeof meta> = {};
export const Custom: StoryObj<typeof meta> = {
  args: {
    errorData: { error_id: 403, error_message: "Custom error message..." },
  },
};
