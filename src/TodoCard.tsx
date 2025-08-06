import { Todo } from "./entities/Todo";

type TodoCardProps = {
  todo: Todo;
};

export function TodoCard({ todo }: TodoCardProps) {
  function handleToggle(id: number) {
    console.log(id);
  }
  return (
    <div className="grid grid-cols-[2rem_1fr_auto] items-center gap-2">
      <label htmlFor={`checkbox-${todo.id}`} className="sr-only">
        Complete
      </label>
      <input
        type="checkbox"
        id={`checkbox-${todo.id}`}
        checked={todo.completed}
        onChange={() => handleToggle(todo.id)}
      />
      <p className="m-0 truncate">{todo.title}</p>
      <button>Delete</button>
    </div>
  );
}
