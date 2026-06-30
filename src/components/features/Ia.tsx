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
        <p className="text-gray-500 text-center text-sm w-100 mt-2">
          Sou o assistente do FocusFlow. Analiso sua produtividade e te ajudo a
          focar no que importa.
        </p>
      </div>

      {/* Sugestões */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
        {/* conteiner de sugestoes */}
        <div className="w-full flex flex-col justify-center items-center mt-4 bg-(--main-color) rounded-xl p-4 gap-2 text-center cursor-pointer border border-transparent hover:border-(--primary-color) duration-300">
          {/* icone sugestao */}
          <span className="text-(--text-color) text-lg font-medium ">
            <i className="fa-solid fa-chart-simple"></i>
          </span>
          {/* Titulo Sugestao */}
          <h2 className="text-(--text-color) text-md">Analisar meu dia</h2>
          <p className="text-gray-500  text-sm w-60">
            Veja um resumo dos seus pomodoros e tarefas de hoje
          </p>
        </div>

        {/* conteiner de sugestoes */}
        <div className="w-full flex flex-col justify-center items-center mt-4 bg-(--main-color) rounded-xl p-4 gap-2 text-center cursor-pointer border border-transparent hover:border-(--primary-color) duration-300">
          {/* icone sugestao */}
          <span className="text-(--text-color) text-lg font-medium ">
            <i className="fa-solid fa-list-check"></i>
          </span>
          {/* Titulo Sugestao */}
          <h2 className="text-(--text-color) text-md">Priorizar tarefas</h2>
          <p className="text-gray-500  text-sm w-60">
            A IA organiza sua lista pelo impacto e tempo disponível
          </p>
        </div>

        {/* conteiner de sugestoes */}
        <div className="w-full flex flex-col justify-center items-center mt-4 bg-(--main-color) rounded-xl p-4 gap-2 text-center cursor-pointer border border-transparent hover:border-(--primary-color) duration-300">
          {/* icone sugestao */}
          <span className="text-(--text-color) text-lg font-medium ">
            <i className="fa-solid fa-clock"></i>
          </span>
          {/* Titulo Sugestao */}
          <h2 className="text-(--text-color) text-md">Sugerir horários</h2>
          <p className="text-gray-500  text-sm w-60">
            Descubra quando você é mais produtivo para focar nas tarefas mais
            importantes
          </p>
        </div>

        {/* conteiner de sugestoes */}
        <div className="w-full flex flex-col justify-center items-center mt-4 bg-(--main-color) rounded-xl p-4 gap-2 text-center cursor-pointer border border-transparent hover:border-(--primary-color) duration-300">
          {/* icone sugestao */}
          <span className="text-(--text-color) text-lg font-medium ">
            <i className="fa-solid fa-fire"></i>
          </span>
          {/* Titulo Sugestao */}
          <h2 className="text-(--text-color) text-md">Modo deep focus</h2>
          <p className="text-gray-500  text-sm w-60">
            Monte um bloco de 2h sem distrações com plano guiado
          </p>
        </div>
      </div>

      {/* Bloco de pesquisa IA */}
      <div className="w-full flex justify-center items-center gap-2 mb-14">
        <input
          type="text"
          placeholder="Pergunte algo sobre sua produtividade..."
          className="w-[50%] bg-(--main-color) text-(--text-color) placeholder:text-gray-500 focus:outline-none focus:ring-2 p-2 mt-10 rounded-xl"
        />

        <button className="w-[10%] bg-(--main-color) text-(--text-color) hover:bg-(--primary-opacity) duration-300 p-2 mt-10  rounded-xl cursor-pointer">
          <i className="fa-solid fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
}

export default Ia;
