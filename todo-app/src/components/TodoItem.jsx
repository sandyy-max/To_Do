import { useContext } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../context/TodoContext";

export default function TodoItem({ todo }) {
  const { dispatch } = useContext(TodoContext);

  return (
  <div
    className={`p-6 rounded-2xl border flex justify-between items-center
    bg-[#493e41] border-[#2a2a2a]
    transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-900/20`}
  >
    <div>
      <h3
        className={`font-semibold text-lg ${
          todo.completed
            ? "line-through text-gray-500"
            : "text-white"
        }`}
      >
        {todo.title}
      </h3>

      {todo.description && (
        <p className="text-gray-400 text-sm mt-2">
          {todo.description}
        </p>
      )}
    </div>

    <div className="flex gap-3">
      
      {/* Done / Undo */}
      <button
        onClick={() =>
          dispatch({ type: "TOGGLE_TODO", payload: todo.id })
        }
        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
          todo.completed
            ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
            : "bg-red-800 text-white hover:bg-red-900 shadow-md shadow-red-900/30"
        }`}
      >
        {todo.completed ? "Undo" : "Done"}
      </button>

      {/* Edit */}
      <Link
        to={`/edit/${todo.id}`}
        className="px-4 py-2 rounded-lg text-sm font-semibold bg-[#222] text-gray-200 hover:bg-red-900 hover:text-white transition-all duration-300"
      >
        Edit
      </Link>

      {/* Delete */}
      <button
        onClick={() =>
          dispatch({ type: "DELETE_TODO", payload: todo.id })
        }
        className="px-4 py-2 rounded-lg text-sm font-semibold bg-[#931515] text-gray-400 hover:bg-red-950 hover:text-white transition-all duration-300"
      >
        Delete
      </button>
    </div>
  </div>
);



}
