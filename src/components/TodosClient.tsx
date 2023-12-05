"use client";
import { TodoType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingUi from "./LoadingUi";
import TodoCard from "./TodoCard";

export default function TodosClient() {
  const {
    data: todos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["userTodos"],
    queryFn: async () => {
      const { data } = await axios.get("https://dummyjson.com/todos");

      return data.todos as TodoType[];
    },
  });

  if (isLoading) return <LoadingUi />;

  if (isError || !todos)
    return <div>Error while loading the tasks, try again!!</div>;

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {todos.map((todo) => (
        <TodoCard {...todo} />
      ))}
    </div>
  );
}
