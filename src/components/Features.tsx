import { useState, type JSX } from "react";
import ButtonDashboard from "./ui/ButtonDashboard";
import Pomodoro from "./features/Pomorodo";
import Tarefas from "./features/Tarefas";
import Ia from "./features/Ia";
import Ajustes from "./features/Ajustes";

function Features() {
  const [selectedTab, setSelectedTab] = useState<
    "pomodoro" | "tarefas" | "ia" | "ajustes"
  >("pomodoro");

  const tabs: Record<"pomodoro" | "tarefas" | "ia" | "ajustes", JSX.Element> = {
    pomodoro: <Pomodoro />,
    tarefas: <Tarefas />,
    ia: <Ia />,
    ajustes: <Ajustes />,
  };

  function handleTabClick(tab: "pomodoro" | "tarefas" | "ia" | "ajustes") {
    setSelectedTab(tab);
  }

  return (
    <main className="flex flex-col xl:flex-row gap-2 w-full max-w-[90%] min-h-130 bg-(--main-color) rounded-4xl mx-auto p-4">
      {/* Botões de navegação */}
      <nav className="flex flex-row xl:flex-col bg-(--background-color) gap-2 w-full xl:w-44 h-auto p-2 rounded-3xl xl:rounded-bl-3xl xl:rounded-tl-3xl">
        <ButtonDashboard
          icon={<i className="fa-solid fa-alarm-clock mr-2"></i>}
          className="rounded-tl-2xl"
          onClick={() => handleTabClick("pomodoro")}
        >
          <span>Pomodoro</span>
        </ButtonDashboard>
        <ButtonDashboard
          icon={<i className="fa-solid fa-list mr-2"></i>}
          onClick={() => handleTabClick("tarefas")}
          children={<span>Tarefas</span>}
        />
        <ButtonDashboard
          icon={<i className="fa-solid fa-robot mr-2"></i>}
          onClick={() => handleTabClick("ia")}
          children={<span>IA</span>}
        />
        <ButtonDashboard
          icon={<i className="fa-solid fa-gear mr-2"></i>}
          onClick={() => handleTabClick("ajustes")}
          children={<span>Ajustes</span>}
        />
      </nav>
      {/* tabela selecionada */}
      <div className="flex-1 bg-(--background-color) rounded-3xl xl:rounded-tr-3xl xl:rounded-br-3xl p-4 min-h-105">
        {tabs[selectedTab]}
      </div>
    </main>
  );
}
export default Features;
