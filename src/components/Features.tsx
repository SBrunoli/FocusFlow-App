import { useState, type JSX } from "react";
import ButtonDashboard from "./ui/ButtonDashboard";
import Pomodoro from "./features/Pomorodo";
import Tarefas from "./features/Tarefas";

function Features() {
  const [selectedTab, setSelectedTab] = useState<
    "pomodoro" | "tarefas" | "ia" | "ajustes"
  >("pomodoro");

  const tabs: Record<"pomodoro" | "tarefas" | "ia" | "ajustes", JSX.Element> = {
    pomodoro: <Pomodoro />,
    tarefas: <Tarefas />,
    ia: <div className="text-white">Em breve</div>,
    ajustes: <div className="text-white">Em breve</div>,
  };

  function handleTabClick(tab: "pomodoro" | "tarefas" | "ia" | "ajustes") {
    setSelectedTab(tab);
  }

  return (
    <main className="flex flex-row gap-2 w-full max-w-[90%] h-140 bg-(--main-color) rounded-4xl mr-auto ml-auto p-4">
      {/* Botões de navegação */}
      <nav className="flex flex-col bg-(--background-color) gap-2 w-44 h-full mt-auto  p-2 rounded-bl-3xl rounded-tl-3xl">
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
      <div className="flex-1 h-full bg-(--background-color) rounded-tr-3xl rounded-br-3xl p-4">
        {tabs[selectedTab]}
      </div>
    </main>
  );
}
export default Features;
