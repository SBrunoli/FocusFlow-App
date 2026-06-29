import { useState, useEffect } from "react";

type Modo = "foco" | "curta" | "longa";

const modos: Record<Modo, number> = {
  foco: 25 * 60,
  curta: 5 * 60,
  longa: 15 * 60,
};

function Pomodoro() {
  const [segundos, setSegundos] = useState<number>(25 * 60);
  const [rodando, setRodando] = useState<boolean>(false);
  const [modo, setModo] = useState<Modo>("foco");
  const [sessoes, setSessoes] = useState<number>(0);

  useEffect(() => {
    if (!rodando) return;

    const intervalo = setInterval(() => {
      setSegundos((s: number) => {
        if (s <= 0) {
          clearInterval(intervalo);
          setRodando(false);
          if (modo === "foco") setSessoes((prev: number) => prev + 1);
          return 0;
        }
        return s - 1;
      });
    }, 1000);

    return () => clearInterval(intervalo);
  }, [rodando, modo]);

  function trocarModo(novoModo: Modo): void {
    setModo(novoModo);
    setRodando(false);
    setSegundos(modos[novoModo]);
  }

  function reiniciar(): void {
    setRodando(false);
    setSegundos(modos[modo]);
  }

  function formatarTempo(s: number): string {
    const min = String(Math.floor(s / 60)).padStart(2, "0");
    const sec = String(s % 60).padStart(2, "0");
    return `${min}:${sec}`;
  }

  const progresso: number = ((modos[modo] - segundos) / modos[modo]) * 100;

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-10">
      {/* modos */}
      <div className="flex gap-4 text-sm">
        {(["foco", "curta", "longa"] as Modo[]).map((m) => (
          <button
            key={m}
            onClick={() => trocarModo(m)}
            className={`pb-1 cursor-pointer duration-300 capitalize ${
              modo === m
                ? "text-purple-400 border-b border-purple-400"
                : "text-slate-500 hover:text-slate-300"
            }`}
          >
            {m === "foco"
              ? "Foco"
              : m === "curta"
                ? "Pausa curta"
                : "Pausa longa"}
          </button>
        ))}
      </div>
      <p className="text-purple-400 text-sm tracking-widest uppercase -mb-6">
        {modo === "foco"
          ? "sessão de foco"
          : modo === "curta"
            ? "pausa curta"
            : "pausa longa"}
      </p>
      {/* timer */}
      <h2 className="text-7xl text-(--text-color)">
        {formatarTempo(segundos)}
      </h2>
      {/* barra de progresso */}
      <div className="w-64 h-1 bg-[#3f4e67] rounded-full -mt-6">
        <div
          className="h-1 bg-purple-500 rounded-full duration-500"
          style={{ width: `${progresso}%` }}
        ></div>
      </div>
      <div className="flex gap-2 -mt-6">
        {([0, 1, 2, 3] as number[]).map((i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${
              i < sessoes % 4 ? "bg-purple-500" : "bg-[#3f4e67]"
            }`}
          ></span>
        ))}
      </div>
      {/* botões */}
      <div className="flex flex-row gap-6 text-xl">
        <button
          onClick={() => setRodando(true)}
          className="text-slate-50 bg-(--main-color) hover:bg-(--primary-opacity) duration-300 p-2 px-6 cursor-pointer rounded-2xl"
        >
          Iniciar
        </button>
        <button
          onClick={() => setRodando(false)}
          className="text-slate-50 bg-(--main-color) hover:bg-(--primary-opacity) duration-300 p-2 px-6 cursor-pointer rounded-2xl"
        >
          Pausar
        </button>
        <button
          onClick={reiniciar}
          className="text-slate-50 bg-(--main-color) hover:bg-(--primary-opacity) duration-300 p-2 px-6 cursor-pointer rounded-2xl"
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
}

export default Pomodoro;
