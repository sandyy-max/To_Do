import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoList from "../components/TodoList";

export default function Home() {
  const { state, dispatch } = useContext(TodoContext);

  return (
    <div className="bg-pink-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-red-900 mb-6">Your Tasks</h1>

      <input
        type="text"
        placeholder="Search by title..."
        value={state.search}
        onChange={e => dispatch({ type: "SET_SEARCH", payload: e.target.value })}
        className="w-full border border-pink-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-sm"
      />

      <div className="flex gap-3 mb-6">
        <button
          onClick={() => dispatch({ type: "SET_FILTER", payload: "all" })}
          className={`px-4 py-2 rounded-lg ${state.filter === "all" ? "bg-red-800 text-white" : "bg-pink-200 text-red-900"}`}
        >
          All
        </button>
        <button
          onClick={() => dispatch({ type: "SET_FILTER", payload: "completed" })}
          className={`px-4 py-2 rounded-lg ${state.filter === "completed" ? "bg-red-800 text-white" : "bg-pink-200 text-red-900"}`}
        >
          Completed
        </button>
        <button
          onClick={() => dispatch({ type: "SET_FILTER", payload: "pending" })}
          className={`px-4 py-2 rounded-lg ${state.filter === "pending" ? "bg-red-800 text-white" : "bg-pink-200 text-red-900"}`}
        >
          Pending
        </button>
      </div>

      <TodoList />
    </div>
  );
}
