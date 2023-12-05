"use Client";
import TodosClient from "@/components/TodosClient";

export default function page() {
  return (
    <>
      <h2>This is CLIENT side fetch for todos.</h2>
      <TodosClient />
    </>
  );
}
