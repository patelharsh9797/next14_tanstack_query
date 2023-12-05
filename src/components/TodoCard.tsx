import { TodoType } from "@/types";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

export default function TodoCard({
  todo,
  completed,
  className,
}: TodoType & { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className={completed ? "line-through" : ""}>
          {todo}
        </CardTitle>
      </CardHeader>
      <CardFooter>
        <Button>Actions</Button>
      </CardFooter>
    </Card>
  );
}
