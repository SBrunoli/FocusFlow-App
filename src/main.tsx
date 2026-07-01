import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
// Ajusta o problema com os routers do Features
import "./index.css";
import App from "./App.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <App />
  </HashRouter>,
);
