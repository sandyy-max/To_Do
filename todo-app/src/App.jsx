import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AddTodo from "./pages/AddTodo";
import EditTodo from "./pages/EditTodo";

export default function App() {
  return (
    <BrowserRouter>
      <div
  className="min-h-screen"
  style={{
    background: "radial-gradient(circle, rgba(227, 125, 125, 0.5) 5%, rgba(214, 79, 79, 0.5) 56%, rgba(252, 70, 125, 0.5) 100%)"
  }}
>

        <Header />
        <div className="max-w-3xl mx-auto px-6 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddTodo />} />
            <Route path="/edit/:id" element={<EditTodo />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
