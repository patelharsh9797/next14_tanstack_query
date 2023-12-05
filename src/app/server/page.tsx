import Todos from "@/components/Todos";
import { TodoType } from "@/types";
import axios from "axios";

async function getTodos() {
  const { data } = await axios.get("https://dummyjson.com/todos");

  return data.todos as TodoType[];
}

export default async function page() {
  const initialTodos = await getTodos();

  return (
    <>
      <div>
        <h2>
          This is SERVER side fetch for todos. Check page source for more.
        </h2>
        <p className="text-muted-foreground">
          {`If you refresh the page you are not getting that loading state. It's fetching the data in server side and pass the initial data to our same <Todos /> component. But since it's already have the initial data it's fully rendered on the server.`}
        </p>
      </div>
      <Todos initialTodos={initialTodos} />
    </>
  );
}
