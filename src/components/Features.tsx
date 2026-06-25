function Features() {
  return (
    <main className="flex flex-row gap-2 w-full max-w-[99%] h-140 bg-[#3f4e67] rounded-3xl mr-auto ml-auto p-1">
      {/* mudar conforme o link selecionado*/}
      <nav className="flex flex-col bg-(--background-color) gap-2 w-44 h-full mt-auto  p-2 rounded-bl-3xl rounded-tl-3xl">
        <button className="text-slate-50 w-full bg-[#3f4e67] hover:bg-(--primary-color) duration-300 p-2 inline-40 rounded-tl-2xl text-left">
          <i className="fa-solid fa-alarm-clock mr-2">s</i>
          Pomodoro
        </button>
        <button className="text-slate-50 w-full bg-[#3f4e67]  hover:bg-(--primary-color) duration-300 p-2 inline-40 text-left">
          <i className="fa-solid fa-list mr-2"></i>
          Tarefas
        </button>
        <button className="text-slate-50 w-full bg-[#3f4e67]   hover:bg-(--primary-color) duration-300 p-2 inline-40 text-left">
          <i className="fa-solid fa-robot mr-2"></i>
          IA
        </button>
        <button className="text-slate-50 w-full bg-[#3f4e67] hover:bg-(--primary-color) duration-300 p-2 inline-40 text-left">
          <i className="fa-solid fa-gear mr-2"></i>
          Ajustes
        </button>
      </nav>
      <div className="flex-1 h-full bg-(--background-color) rounded-tr-3xl rounded-br-3xl p-4"></div>
    </main>
  );
}

export default Features;
