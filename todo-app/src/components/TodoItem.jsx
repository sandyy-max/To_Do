import { useContext } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../context/TodoContext";

export default function TodoItem({ todo }) {
  const { dispatch } = useContext(TodoContext);

  return (
    <div
  className={`p-5 rounded-xl shadow-lg border flex justify-between items-center
    transition transform hover:scale-105 hover:shadow-2xl duration-200
    ${todo.completed ? "bg-pink-50 border-pink-200" : "bg-white border-pink-300"}
  `}
>
  <div>
    <h3
      className={`font-semibold text-lg ${
        todo.completed ? "line-through text-red-700" : "text-red-900"
      }`}
    >
      {todo.title}
    </h3>
    {todo.description && (
      <p className="text-gray-600 text-sm mt-1">{todo.description}</p>
    )}
  </div>

  <div className="flex gap-2">
    <button
      onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
      className="px-4 py-2 rounded-lg text-sm font-medium bg-pink-200 text-red-900 hover:bg-pink-300 hover:text-red-800 transition"
    >
      {todo.completed ? "Undo" : "Done"}
    </button>

    <Link
      to={`/edit/${todo.id}`}
      className="px-4 py-2 rounded-lg text-sm font-medium bg-red-700 text-white hover:bg-red-800 transition"
    >
      Edit
    </Link>

    <button
      onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
      className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-200 hover:bg-gray-300 transition"
    >
      Delete
    </button>
  </div>
</div>

  );
}
