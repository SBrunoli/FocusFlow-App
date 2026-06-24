import "./App.css";
import "./index.css";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-w-screen min-h-screen bg-zinc-900">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
