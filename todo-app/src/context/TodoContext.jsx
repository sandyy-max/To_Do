import { createContext, useReducer, useEffect } from "react";

export const TodoContext = createContext();

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  filter: "all",
  search: ""
};

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        id: Date.now().toString(),
        title: action.payload.title,
        description: action.payload.description || "",
        completed: false,
        createdAt: new Date()
      };
      return { ...state, todos: [...state.todos, newTodo] };

    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, ...action.payload }
            : todo
        )
      };

    case "DELETE_TODO":
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        )
      };

    case "SET_FILTER":
      return { ...state, filter: action.payload };

    case "SET_SEARCH":
      return { ...state, search: action.payload };

    default:
      return state;
  }
}

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>;
}
