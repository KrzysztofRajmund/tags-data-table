import { Meta, StoryFn, StoryObj } from "@storybook/react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

const Template: StoryFn = () => {
  return (
    <Table className="min-w-[345px] p-8">
      <TableHeader>
        <TableRow>
          <TableHead>Tag name</TableHead>
          <TableHead className="text-right">Questions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <div className="font-semibold">Item 1</div>
          </TableCell>
          <TableCell className="text-right">25450</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="font-semibold">Item 2</div>
          </TableCell>
          <TableCell className="text-right">5550</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

const meta: Meta = {
  title: "Shadcn/UI/Table",
  component: Template,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Default: StoryObj<typeof meta> = {};
