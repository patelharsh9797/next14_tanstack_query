"use Client";
import Todos from "@/components/Todos";

export default function page() {
  return (
    <>
      <div>
        <h2>
          This is CLIENT side fetch for todos. Check page source for more.
        </h2>
        <p className="text-muted-foreground">
          {` If you refresh the page you are getting that loading state for while,
          which indicate that it's calling fetch after the component loads on
          client.`}
        </p>
      </div>
      <Todos />
    </>
  );
}
