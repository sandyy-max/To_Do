import { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TodoContext } from "../context/TodoContext";

export default function EditTodo() {
  const { id } = useParams();
  const { state, dispatch } = useContext(TodoContext);
  const navigate = useNavigate();

  const existingTodo = state.todos.find(todo => todo.id === id);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (existingTodo) {
      setTitle(existingTodo.title);
      setDescription(existingTodo.description);
    }
  }, [existingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch({ type: "UPDATE_TODO", payload: { id, title, description } });
    navigate("/");
  };

  if (!existingTodo) return <p className="text-center text-gray-500 mt-6">Task not found.</p>;

  return (
    <div className="bg-pink-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
  <div className="bg-white p-6 rounded-xl shadow-lg">
    <h1 className="text-2xl font-bold text-red-900 mb-6 text-center">
      {isEdit ? "Edit Task" : "Add New Task"}
    </h1>

    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input
        type="text"
        value={title}
        placeholder="Task Title"
        onChange={(e) => setTitle(e.target.value)}
        className="border border-pink-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 shadow-sm"
      />

      <textarea
        value={description}
        placeholder="Task Description (optional)"
        onChange={(e) => setDescription(e.target.value)}
        className="border border-pink-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 shadow-sm"
      />

      <button
  type="submit"
  className="bg-red-800 text-white py-3 rounded-xl hover:bg-red-900 transition font-semibold"
>
  Update Task
</button>

    </form>
  </div>
</div>

  );
}
