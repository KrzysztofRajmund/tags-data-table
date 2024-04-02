import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tag } from "@/types";

interface TagsTable {
  tagsList: Tag[];
}

export const TagsTable = ({ tagsList }: TagsTable) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Tag name</TableHead>
          <TableHead className="text-right">Questions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tagsList.map((tag: Tag) => {
          return (
            <TableRow key={tag.name}>
              <TableCell>
                <div className="font-semibold">{tag.name}</div>
              </TableCell>
              <TableCell className="text-right">{tag.count}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
