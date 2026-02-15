Task Handler – Setup Documentation
1. Create Project (Vite + React)
npm create vite@latest todo-app
cd todo-app
npm install


Select:

Framework: React

Variant: JavaScript

2. Install Required Dependencies
npm install react-router-dom


If using Tailwind CSS (v3):

npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p

3. Configure Tailwind (If Applicable)
tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

src/main.jsx

Ensure this line exists:

import "./index.css";

4. Folder Structure

Inside src/, create:

components/
pages/
context/
utils/

5. Setup Routing (App.jsx)

Configure routes using react-router-dom:

/ → Home

/add → AddTodo

/edit/:id → EditTodo

Wrap routes inside BrowserRouter.

6. Global State Management

Create context/TodoContext.jsx.

Use createContext

Use useReducer

Manage actions:

ADD_TODO

UPDATE_TODO

DELETE_TODO

TOGGLE_TODO

SET_FILTER

SET_SEARCH

Wrap <App /> with <TodoProvider> in main.jsx.

7. Local Storage Integration

Inside TodoContext:

Load todos from localStorage during initialization.

Save todos to localStorage whenever state changes.

8. Pages Implementation
Home.jsx

Search input

Filter buttons (All, Completed, Pending)

Render TodoList

AddTodo.jsx

Form for title and description

Dispatch ADD_TODO

Redirect to home

EditTodo.jsx

Get id from URL using useParams

Pre-fill form with existing data

Dispatch UPDATE_TODO

9. Components Implementation
Header.jsx

Navigation links

Highlight active route using useLocation

TodoList.jsx

Filter and search logic

Map todos to TodoItem

TodoItem.jsx

Display title and description

Toggle completion

Edit and delete actions

10. Run Development Server
npm run dev


Open:

http://localhost:5173



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
