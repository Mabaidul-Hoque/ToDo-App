import "./App.css";
import { Home, Navbar } from "./components";

function App() {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="px-2 min-[500px]:px-8 sm:px-20 md:px-10 lg:px-20 h-24 bg-gray-700 text-white sticky top-0">
        <Navbar />
      </nav>
      {/* MAIN SECTION */}
      <main className="px-2 min-[500px]:px-8 sm:px-20 md:px-10 lg:px-20 min-h-[calc(100vh-6rem)] bg-gradient-to-r from-teal-100 to-rose-100">
        <Home />
      </main>
    </div>
  );
}

export default App;
