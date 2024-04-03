import { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

type Story = StoryObj<typeof Card>;

const meta: Meta<typeof Card> = {
  title: "Shadcn/UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Basic: Story = {
  args: {
    children: (
      <CardContent className="min-h-[95px] p-10">Card Content</CardContent>
    ),
  },
};

export const CustomHeader: Story = {
  args: {
    children: (
      <CardHeader className="min-h-[95px] min-w-[245px] p-10 text-center">
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
    ),
  },
};
