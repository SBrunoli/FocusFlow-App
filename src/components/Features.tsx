/* eslint-disable */

import ButtonDashboard from "./ui/ButtonDashboard";

function Features() {
  return (
    <main className="flex flex-row gap-2 w-full max-w-[90%] h-140 bg-(--main-color) rounded-3xl mr-auto ml-auto p-1">
      {/* mudar conforme o link selecionado*/}
      <nav className="flex flex-col bg-(--background-color) gap-2 w-44 h-full mt-auto  p-2 rounded-bl-3xl rounded-tl-3xl">
        <ButtonDashboard
          icon={<i className="fa-solid fa-alarm-clock mr-2"></i>}
          className="rounded-tl-2xl"
        >
          Pomodoro
        </ButtonDashboard>
        <ButtonDashboard
          icon={<i className="fa-solid fa-list mr-2"></i>}
          children="Tarefas"
        />
        <ButtonDashboard
          icon={<i className="fa-solid fa-robot mr-2"></i>}
          children="IA"
        />
        <ButtonDashboard
          icon={<i className="fa-solid fa-gear mr-2"></i>}
          children="Ajustes"
        />
      </nav>
      <div className="flex-1 h-full bg-(--background-color) rounded-tr-3xl rounded-br-3xl p-4"></div>
    </main>
  );
}
export default Features;
