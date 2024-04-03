import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TableWrapper {
  children: ReactNode;
}

export const TableWrapper = ({ children }: TableWrapper) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Stackoverflow tags</CardTitle>
        <CardDescription>
          Table of tags with the number of related questions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};
