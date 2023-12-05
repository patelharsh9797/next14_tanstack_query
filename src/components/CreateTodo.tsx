"use client";
import { cn, delay } from "@/lib/utils";
import { TodoType } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import TodoCard from "./TodoCard";
import { Button } from "./ui/button";

type CreateTodoProps = {
  initialTodos: TodoType[];
};

type MutationData = {
  resType: "resolve" | "reject";
  todoObj: TodoType;
};

export default function CreateTodo({ initialTodos }: CreateTodoProps) {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(initialTodos);

  const { mutate, isPending, variables } = useMutation({
    mutationKey: ["addTodos"],
    mutationFn: async ({ resType, todoObj }: MutationData) => {
      if (todo === "") {
        alert("Please type something!!!");
        return;
      }

      if (resType === "reject") {
        await new Promise((resolve, reject) => setTimeout(reject, 1000));
      } else {
        await delay(1000);
      }
      setTodos((prev) => [todoObj, ...prev]);
      setTodo("");
      return todos;
    },
    onError: (error) => {
      alert("Can't add todo! Try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({
      resType: "resolve",
      todoObj: {
        id: todos.length + 1,
        todo,
        completed: false,
        userId: 324,
      },
    });
  };

  return (
    <>
      <form
        className="flex items-center justify-center gap-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className={cn(
            "flex h-10 max-w-sm w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          )}
          disabled={isPending}
        />

        <Button disabled={isPending} type="submit">
          Submit (w/ resolve)
        </Button>

        <Button
          disabled={isPending}
          type="button"
          onClick={() =>
            mutate({
              resType: "reject",
              todoObj: {
                id: todos.length + 1,
                todo,
                completed: false,
                userId: 324,
              },
            })
          }
        >
          Submit (w/ reject)
        </Button>
      </form>

      <div className="grid md:grid-cols-2 gap-4">
        {isPending && (
          <TodoCard className="opacity-50" {...variables.todoObj} />
        )}

        {todos.map((todo) => (
          <TodoCard key={todo.id} {...todo} />
        ))}
      </div>
    </>
  );
}
