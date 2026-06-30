import "./App.css";
import "./index.css";

import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Funcionalidades from "./Funcionalidades";

function App() {
  return (
    <div className="w-full min-h-screen bg-(--background-color)">
      <Navbar />
      <Hero />
      <Features />
      <Funcionalidades />
    </div>
  );
}

export default App;
