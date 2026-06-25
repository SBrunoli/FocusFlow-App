import Button from "./ui/Button";

function Hero() {
  return (
    <section className="flex flex-col justify-center items-center gap-4 text-center p-4 w-full h-150">
      <p className="text-purple-200 text-[10px] font-semibold drop-shadow-[0_0_5px_rgba(168,85,247,1)] bg-purple-900/20 p-2 rounded-2xl border border-purple-500/50">
        <img
          width="15"
          height="15"
          src="https://img.icons8.com/fluency/48/sparkles.png"
          alt="sparkles"
          className="inline-block mr-2"
        />
        novo — modo foco com IA
      </p>

      <h1 className="text-white text-6xl font-bold">Pare de procastinar.</h1>
      <p className="text-(--primary-color) text-5xl font-semibold ]">
        Comece a entregar.
      </p>

      <p className="text-(--text-color) text-lg font-medium w-full max-w-2xl mt-4 mb-4">
        FocusFlow combina timer Pomodoro, gestão de tarefas e analytics de
        produtividade em um só lugar. Para devs que querem fazer mais em menos
        tempo.
      </p>

      <div className="flex flex-row gap-10">
        <Button>Começar grátis</Button>
        <Button>Ver no github</Button>
      </div>
    </section>
  );
}

export default Hero;
