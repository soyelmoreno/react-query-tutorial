import { Todo } from "./entities/Todo";

type TodoCardProps = {
  todo: Todo;
};

export function TodoCard({ todo }: TodoCardProps) {
  function handleToggle(id) {
    console.log(id);
  }
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleToggle(todo.id)}
      />
      <div>{todo.title}</div>
      <button>Delete</button>
    </div>
  );
}
