import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { BlockingLoader } from "./BlockingLoader";

const Template: StoryFn = () => {
  return (
    <div className="min-h-[250px] min-w-96">
      <BlockingLoader />
    </div>
  );
};

const meta: Meta = {
  title: "Molecules/BlockingLoader",
  component: Template,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Default: StoryObj<typeof meta> = {};
