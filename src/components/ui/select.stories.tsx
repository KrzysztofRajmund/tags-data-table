import { Meta, StoryFn, StoryObj } from "@storybook/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "./select";

const Template: StoryFn = () => {
  return (
    <div className="flex p-8">
      <Select defaultValue="default option">
        <SelectTrigger className="min-w-[145px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent align="center" className="min-w-[145px]">
          <SelectGroup>
            <SelectItem value="default option">Default Option</SelectItem>
            <SelectSeparator className="my-1" />
            <SelectItem value="option 1">Option 1</SelectItem>
            <SelectSeparator className="my-1" />
            <SelectItem value="option 2">Option 2</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

const meta: Meta = {
  title: "Molecules/Select",
  component: Template,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Default: StoryObj<typeof meta> = {};
