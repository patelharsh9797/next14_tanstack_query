import { ModeToggle } from "@/components/ModeToggle";
import TodosClient from "@/components/TodosClient";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-8 py-12 px-24">
      <div className="flex justify-between w-full gap-8 ">
        <h1 className="scroll-m-20 text-3xl text-primary font-extrabold tracking-tight lg:text-4xl underline underline-offset-4">
          Hello Tanstack Query!!
        </h1>
        <ModeToggle />
      </div>

      <TodosClient />
    </main>
  );
}
