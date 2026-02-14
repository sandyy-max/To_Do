import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const linkStyle = (path) =>
    `px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
      location.pathname === path
        ? "bg-red-800 text-white"
        : "text-red-900 hover:bg-pink-200 hover:text-red-800"
    }`;

  return (
    <header className="bg-pink-100 shadow-md">
      <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-red-900">Task Handler</h2>
        <nav className="flex gap-4 items-center">
          <Link to="/" className={linkStyle("/")}>Home</Link>
          <Link to="/add" className={linkStyle("/add")}>Add Task</Link>
        </nav>
      </div>
    </header>
  );
}
