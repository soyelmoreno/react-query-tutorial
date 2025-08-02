import { Todo } from "./entities/Todo";

type TodoCardProps = {
  todo: Todo;
};

export function TodoCard({ todo }: TodoCardProps) {
  function handleToggle(id: number) {
    console.log(id);
  }
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleToggle(todo.id)}
      />
      <p className="m-0">{todo.title}</p>
      <button>Delete</button>
    </div>
  );
}
