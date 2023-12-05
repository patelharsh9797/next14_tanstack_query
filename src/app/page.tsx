import TodosClient from "@/components/providers/TodosClient";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Hello!!
      </h1>
      <TodosClient />
    </main>
  );
}
