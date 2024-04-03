import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: "Shadcn/UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Button",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Button",
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="space-x-4">
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="default">
        Default
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
      <Button {...args} size="icon">
        Icon
      </Button>
    </div>
  ),
};
