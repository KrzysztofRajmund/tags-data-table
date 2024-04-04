import { Meta, StoryFn, StoryObj } from "@storybook/react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./pagination";

const Template: StoryFn = () => {
  return (
    <div className="flex p-8">
      <Pagination>
        <PaginationContent className="min-h-[125px] p-10">
          <PaginationItem>
            <PaginationPrevious href={""} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={""}>1</PaginationLink>
            <PaginationLink isActive={true} href={""}>
              2
            </PaginationLink>
            <PaginationLink href={""}>3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href={""} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

const meta: Meta = {
  title: "Molecules/Pagination",
  component: Template,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Default: StoryObj<typeof meta> = {};
