import { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./skeleton";

type Story = StoryObj<typeof Skeleton>;

const meta: Meta<typeof Skeleton> = {
  title: "Shadcn/UI/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Default: Story = {
  render: (args) => (
    <div className="space-y-4 pt-10">
      <Skeleton {...args} className="h-12 w-72" />
      <Skeleton {...args} className="h-12 w-72" />
    </div>
  ),
};

export const NotRounded: Story = {
  render: (args) => (
    <div className="space-y-4 pt-10">
      <Skeleton {...args} className="h-12 w-72 rounded-none" />
      <Skeleton {...args} className="h-12 w-72 rounded-none" />
    </div>
  ),
};
