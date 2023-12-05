"use client";
import { TodoType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function TodosClient() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["userTodos"],
    queryFn: async () => {
      const { data } = await axios.get("https://dummyjson.com/todos");

      return data.todos as TodoType[];
    },
  });

  if (isLoading) return <div>Loading the tasks...</div>;
  if (isError || !data)
    return <div>Error while loading the tasks, try again!!</div>;

  return (
    <>
      <div className="flex flex-col gap-2">{JSON.stringify(data, null, 4)}</div>
    </>
  );
}
