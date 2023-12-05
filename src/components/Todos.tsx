"use client";
import { TodoType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingUi from "./LoadingUi";
import TodoCard from "./TodoCard";

type TodosClientProps = {
  initialTodos?: TodoType[];
};

export default function Todos({ initialTodos }: TodosClientProps) {
  const {
    data: todos,
    isLoading,
    isError,
  } = useQuery({
    initialData: initialTodos,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
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
    <>
      <div className="grid md:grid-cols-2 gap-4">
        {todos.map((todo) => (
          <TodoCard key={todo.id} {...todo} />
        ))}
      </div>
    </>
  );
}
