import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const linkStyle = (path) =>
    `relative px-4 py-2 text-md font-semibold transition-all duration-300 rounded-md ${
      location.pathname === path
        ? "text-red-700 hover:text-red-600"
        : "text-black-300 hover:text-red-600"
    }`;

  return (
    <header className=" bg-pink-100/40 border-b sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h2 className="text-2xl font-bold tracking-wide text-red-900">
          Task Handler
        </h2>

        {/* Navigation */}
        <nav className="flex gap-6 items-center">
          <Link to="/" className={linkStyle("/")}>
            Home
          </Link>

          <Link to="/add" className={linkStyle("/add")}>
            Add Task
          </Link>
        </nav>
      </div>
    </header>
  );
}
