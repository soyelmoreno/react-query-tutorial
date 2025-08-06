import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTodo, fetchTodos } from "./api";
import { TodoCard } from "./TodoCard";
import { FormEvent, useState } from "react";

export function Demo() {
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");
  const queryClient = useQueryClient();

  const { data: todos, isLoading } = useQuery({
    queryFn: () => fetchTodos(search),
    queryKey: ["todos", { search }],
    // TO prevent RQ from refetching the data in the background, set stateTime
    // to Infinity. Basically tell it, never consider the cache stale, so always
    // show it when you can, do not refetch.
    staleTime: Infinity,
    // Tell RQ it should never cache the data at all, so it should always
    // refetch, no matter what.
    cacheTime: 0,
  });
  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      // Invalidate our todos query and cache to make it refetch data.
      //
      // Here we **do not** want to provide the { search } parameter, because we
      // want to invalidate every single query that has todos, and we don't care
      // about the search
      queryClient.invalidateQueries(["todos"]);
    },
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await addTodoMutation({ title });
      setTitle("");
    } catch (error) {
      throw new Error(error as string);
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>React Query Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title-input" className="sr-only">
          Title
        </label>
        <input
          type="text"
          id="title-input"
          placeholder="Enter todo"
          className="mb-2 min-w-[16rem] w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
      <div className="grid gap-1 bg-indigo-50 p-3">
        {todos?.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  );
}
