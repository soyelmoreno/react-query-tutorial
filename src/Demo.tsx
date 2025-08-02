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
    <div className="p-3">
      <h1>React Query Tutorial</h1>
      <div className="bg-indigo-50 p-3">
        {todos?.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}
