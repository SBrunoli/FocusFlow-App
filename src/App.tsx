import "./App.css";
import "./index.css";

import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Funcionalidades from "./Funcionalidades";
import Precos from "./Precos";

function App() {
  return (
    <div className="w-full min-h-screen bg-(--background-color)">
      <Navbar />
      <Hero />
      <Features />
      <Funcionalidades />
      <Precos />
    </div>
  );
}

export default App;
