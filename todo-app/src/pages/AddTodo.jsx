import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TodoContext } from "../context/TodoContext";

export default function AddTodo() {
  const { dispatch } = useContext(TodoContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch({ type: "ADD_TODO", payload: { title, description } });
    navigate("/");
  };

  return (
    <div className="bg-pink-100/30 rounded-3xl min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <div className="bg-pink-50/60 p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-red-900 mb-6">Add New Task</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="border border-pink-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 shadow-sm"
          />
          <textarea
            placeholder="Task Description (optional)"
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="border border-pink-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 shadow-sm"
          />
          <button
            type="submit"
            className="bg-red-800 text-white py-3 rounded-lg hover:bg-red-900 transition"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}
