import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "./api";
import { TodoCard } from "./TodoCard";

export function Demo() {
  const { data: todos, isLoading } = useQuery({
    queryFn: () => fetchTodos(),
    queryKey: ["todos"],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>React Query Tutorial</h1>
      {todos?.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
