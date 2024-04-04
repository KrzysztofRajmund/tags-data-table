import { Meta, StoryObj } from "@storybook/react";
import { SearchInput } from "./search-input";

type Story = StoryObj<typeof SearchInput>;

const meta: Meta<typeof SearchInput> = {
  title: "Atoms/SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Default: Story = {
  args: {
    placeholder: "Search tag ...",
  },
};

export const WithIcon: Story = {
  args: {
    placeholder: "Search tag ...",
    className: "pr-10",
    withIcon: true,
  },
};
