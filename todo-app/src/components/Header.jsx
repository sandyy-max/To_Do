import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const linkStyle = (path) =>
    `relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-md ${
      location.pathname === path
        ? "text-white"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <header className="bg-[#0f0f0f] border-b border-red-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h2 className="text-2xl font-bold tracking-wide text-red-700">
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
