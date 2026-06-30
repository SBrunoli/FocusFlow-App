import CardFuncionalidades from "./components/ui/CardFuncionalidades";

// Refatoraçãosaaaa
const funcionalidades = [
  {
    icon: "fa-solid fa-alarm-clock",
    title: "Timer Pomodoro",
    description:
      "Ciclos de foco e pausa configuráveis. Notificações nativas para não perder o ritmo.",
  },
  {
    icon: "fa-solid fa-list",
    title: "Gestão de tarefas",
    description:
      "Vincule tarefas às sessões e veja exatamente quanto tempo cada projeto consome",
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Analytics",
    description:
      "Gráficos de produtividade por dia, semana e mês. Descubra seus horários de pico.",
  },
  {
    icon: "fa-solid fa-lightbulb",
    title: "Modo foco com IA",
    description:
      "A IA sugere blocos de tempo ideias com base no seu histórico de produtividade.",
  },
];

function Funcionalidades() {
  return (
    <div>
      {/* titles */}
      <div className="w-full flex flex-col justify-center items-center mt-20">
        <p className="text-(--primary-color) font-medium text-lg">
          Funcionalidades
        </p>
        <h2 className="text-(--text-color) text-3xl font-medium mt-4">
          Tudo o que você precisa para focar
        </h2>
        <p className="text-(--p-color) mt-4 text-lg">
          Sem distrações, sem complexidade.
        </p>
      </div>

      {/* Cards */}
      <div className="w-full min-h-fit p-2 flex flex-row justify-center gap-4 flex-wrap">
        {funcionalidades.map((item) => (
          <CardFuncionalidades key={item.title}>
            <span className="text-(--text-color) text-2xl font-medium w-fit bg-(--primary-opacity) p-2 rounded-2xl">
              <i className={item.icon}></i>
            </span>
            <h2 className="text-(--text-color) text-2xl font-medium">
              {item.title}
            </h2>
            <p className="text-(--p-color) text-md w-60">{item.description}</p>
          </CardFuncionalidades>
        ))}
      </div>
    </div>
  );
}

export default Funcionalidades;
