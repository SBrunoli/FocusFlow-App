const sugestoes = [
  {
    icon: "fa-solid fa-chart-simple",
    title: "Analisar meu dia",
    description: "Veja um resumo dos seus pomodoros e tarefas de hoje",
  },
  {
    icon: "fa-solid fa-list-check",
    title: "Priorizar tarefas",
    description: "A IA organiza sua lista pelo impacto e tempo disponível",
  },
  {
    icon: "fa-solid fa-clock",
    title: "Sugerir horários",
    description:
      "Descubra quando você é mais produtivo para focar nas tarefas mais importantes",
  },
  {
    icon: "fa-solid fa-fire",
    title: "Modo deep focus",
    description: "Monte um bloco de 2h sem distrações com plano guiado",
  },
];

function Ia() {
  return (
    <div className="w-full h-full">
      {/* Icone IA */}
      <div className="w-full flex justify-center text-white text-2xl mt-2 ">
        <div className="w-fit border border-(--primary-color) bg-(--primary-opacity) rounded-xl p-3">
          <i className="fa-solid fa-lightbulb"></i>
        </div>
      </div>

      {/* Titulo e subtitulo*/}
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-(--text-color) text-2xl font-medium text-center mt-4">
          Como te ajudar hoje?
        </h1>
        <p className="text-(--p-color) text-center text-sm w-100 mt-2">
          Sou o assistente do FocusFlow. Analiso sua produtividade e te ajudo a
          focar no que importa.
        </p>
      </div>

      {/* Sugestões */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
        {sugestoes.map((item) => (
          <div
            key={item.title}
            className="w-full flex flex-col justify-center items-center mt-4 bg-(--main-color) rounded-xl p-4 gap-2 text-center cursor-pointer border border-transparent hover:border-(--primary-color) duration-300"
          >
            <span className="text-(--text-color) text-lg font-medium">
              <i className={item.icon}></i>
            </span>
            <h2 className="text-(--text-color) text-md">{item.title}</h2>
            <p className="text-(--p-color) text-sm w-60">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Bloco de pesquisa IA */}
      <div className="w-full flex justify-center items-center gap-2 mb-14">
        <input
          type="text"
          placeholder="Pergunte algo sobre sua produtividade..."
          className="w-[50%] bg-(--main-color) text-(--text-color) placeholder:text-(--p-color) focus:outline-none focus:ring-2 p-2 mt-10 rounded-xl"
        />

        <button className="w-[10%] bg-(--main-color) text-(--text-color) hover:bg-(--primary-opacity) duration-300 p-2 mt-10  rounded-xl cursor-pointer">
          <i className="fa-solid fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
}

export default Ia;
