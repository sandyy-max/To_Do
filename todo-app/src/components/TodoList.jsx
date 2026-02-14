import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { state } = useContext(TodoContext);
  const { todos, filter, search } = state;

  const filteredTodos = todos
    .filter(todo => {
      if (filter === "completed") return todo.completed;
      if (filter === "pending") return !todo.completed;
      return true;
    })
    .filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()));

  if (filteredTodos.length === 0)
    return <p className="text-center text-gray-500 mt-6">No tasks found.</p>;

  return (
    <div className="flex flex-col gap-4 mt-6">
      {filteredTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
}
