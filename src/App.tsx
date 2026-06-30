import "./App.css";
import "./index.css";

import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Funcionalidades from "./components/Funcionalidades";
import Precos from "./components/Precos";
import Depoimentos from "./components/Depoimentos";

function App() {
  return (
    <div className="w-full min-h-screen bg-(--background-color)">
      <Navbar />
      <Hero />
      <Features />
      <Funcionalidades />
      <Precos />
      <Depoimentos />
    </div>
  );
}

export default App;
