import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoList from "../components/TodoList";

export default function Home() {
  const { state, dispatch } = useContext(TodoContext);

  return (
    <div className="min-h-screen bg-[#0f0f0f] py-10 px-6 max-w-5xl mx-auto">
    

  <h1 className="text-4xl font-bold text-red-900 mb-6 text-center">
    Your Tasks
  </h1>

  <input
    type="text"
    placeholder="Search by title..."
    value={state.search}
    onChange={(e) =>
      dispatch({ type: "SET_SEARCH", payload: e.target.value })
    }
    className="w-full border border-pink-300 p-4 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-sm"
  />

  <div className="flex gap-3 mb-6 justify-center">
    <button
      onClick={() => dispatch({ type: "SET_FILTER", payload: "all" })}
      className={`px-6 py-2 rounded-xl font-medium transition ${
        state.filter === "all"
          ? "bg-red-800 text-white"
          : "bg-pink-200 text-red-900 hover:bg-pink-300 hover:text-red-800"
      }`}
    >
      All
    </button>
    <button
      onClick={() => dispatch({ type: "SET_FILTER", payload: "completed" })}
      className={`px-6 py-2 rounded-xl font-medium transition ${
        state.filter === "completed"
          ? "bg-red-800 text-white"
          : "bg-pink-200 text-red-900 hover:bg-pink-300 hover:text-red-800"
      }`}
    >
      Completed
    </button>
    <button
      onClick={() => dispatch({ type: "SET_FILTER", payload: "pending" })}
      className={`px-6 py-2 rounded-xl font-medium transition ${
        state.filter === "pending"
          ? "bg-red-800 text-white"
          : "bg-pink-200 text-red-900 hover:bg-pink-300 hover:text-red-800"
      }`}
    >
      Pending
    </button>
  </div>

  <TodoList />
</div>

  );
}
