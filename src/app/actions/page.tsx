import CreateTodo from "@/components/CreateTodo";

export const dynamic = "force-dynamic";

export default function page() {
  const todos = [
    {
      id: 1,
      todo: "Do something nice for someone I care about",
      completed: true,
      userId: 26,
    },
    {
      id: 2,
      todo: "Memorize the fifty states and their capitals",
      completed: false,
      userId: 48,
    },
  ];
  return (
    <>
      <div>
        <h2>This is SERVER page with React Query mutation.</h2>
        <p className="text-muted-foreground">
          {`Here All the initial todos are fetched on server side. And we can add more by using the useMutation hook in client side. We are using new isPending and the variables features which can helpful in Optimistic Updates (try with reject).`}
          <span className="block pt-4">{`Note : No database is used so no persist of data (using useState atm).`}</span>
        </p>
      </div>

      <CreateTodo initialTodos={todos} />
    </>
  );
}
