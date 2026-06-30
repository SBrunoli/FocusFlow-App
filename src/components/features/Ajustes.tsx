function Ajustes() {
  return (
    <div className="w-full h-full p-6 overflow-y-auto">
      <h1 className="text-(--text-color) text-lg font-medium">Ajustes</h1>
      <p className="text-(--p-color) text-xs mb-6">
        Personalize o FocusFlow do seu jeito
      </p>

      {/* Aparência */}
      <section className="mb-6">
        <p className="text-(--primary-color) text-xs tracking-widest mb-3">
          APARÊNCIA
        </p>

        <div className="flex items-center justify-between bg-(--main-color) border border-(--primary-opacity) rounded-xl p-3 mb-2">
          <div>
            <p className="text-(--text-color) text-sm">Tema</p>
            <p className="text-(--p-color) text-xs">
              Escolha entre claro e escuro
            </p>
          </div>
          <div className="flex gap-2">
            <div
              className="w-8 h-8 rounded-lg bg-(--background-color) border-2 border-(--primary-color) cursor-pointer"
              title="Escuro"
            />
            <div
              className="w-8 h-8 rounded-lg bg-gray-100 border-2 border-transparent cursor-pointer hover:border-(--primary-color) duration-300"
              title="Claro"
            />
          </div>
        </div>
      </section>

      {/* Timer */}
      <section className="mb-6">
        <p className="text-(--primary-color) text-xs tracking-widest mb-3">
          TIMER
        </p>

        {[
          { label: "Foco", desc: "Duração da sessão de foco", valor: 25 },
          {
            label: "Pausa curta",
            desc: "Duração da pausa entre sessões",
            valor: 5,
          },
          {
            label: "Pausa longa",
            desc: "Duração após 4 sessões completas",
            valor: 15,
          },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between bg-(--main-color) border border-(--primary-opacity) rounded-xl p-3 mb-2"
          >
            <div>
              <p className="text-(--text-color) text-sm">{item.label}</p>
              <p className="text-(--p-color) text-xs">{item.desc}</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-7 h-7 rounded-lg border border-(--primary-opacity) bg-(--background-color) text-(--p-color) cursor-pointer hover:border-(--primary-color) duration-300">
                −
              </button>
              <span className="text-(--text-color) text-sm w-6 text-center">
                {item.valor}
              </span>
              <button className="w-7 h-7 rounded-lg border border-(--primary-opacity) bg-(--background-color) text-(--p-color) cursor-pointer hover:border-(--primary-color) duration-300">
                +
              </button>
              <span className="text-(--p-color) text-xs">min</span>
            </div>
          </div>
        ))}

        {[
          {
            label: "Auto iniciar pausas",
            desc: "Começa a pausa automaticamente ao fim do foco",
            ativo: true,
          },
          {
            label: "Auto iniciar foco",
            desc: "Começa o foco automaticamente após a pausa",
            ativo: false,
          },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between bg-(--main-color) border border-(--primary-opacity) rounded-xl p-3 mb-2"
          >
            <div>
              <p className="text-(--text-color) text-sm">{item.label}</p>
              <p className="text-(--p-color) text-xs">{item.desc}</p>
            </div>
            <div
              className={`w-10 h-5 rounded-full relative cursor-pointer duration-300 ${item.ativo ? "bg-(--primary-color)" : "bg-(--main-color)"}`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-(--text-color) absolute top-0.5 duration-300 ${item.ativo ? "left-5" : "left-0.5"}`}
              />
            </div>
          </div>
        ))}
      </section>

      {/* Notificações */}
      <section className="mb-6">
        <p className="text-(--primary-color) text-xs tracking-widest mb-3">
          NOTIFICAÇÕES
        </p>

        {[
          {
            label: "Som de alarme",
            desc: "Toca um som ao fim de cada sessão",
            ativo: true,
          },
          {
            label: "Notificações do navegador",
            desc: "Receba alertas mesmo com a aba minimizada",
            ativo: true,
          },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between bg-(--main-color) border border-(--primary-opacity) rounded-xl p-3 mb-2"
          >
            <div>
              <p className="text-(--text-color) text-sm">{item.label}</p>
              <p className="text-(--p-color) text-xs">{item.desc}</p>
            </div>
            <div
              className={`w-10 h-5 rounded-full relative cursor-pointer duration-300 ${item.ativo ? "bg-(--primary-color)" : "bg-(--main-color)"}`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-(--text-color) absolute top-0.5 duration-300 ${item.ativo ? "left-5" : "left-0.5"}`}
              />
            </div>
          </div>
        ))}
      </section>

      {/* Dados */}
      <section className="mb-6">
        <p className="text-(--primary-color) text-xs tracking-widest mb-3">
          DADOS
        </p>

        <div className="flex items-center justify-between bg-(--main-color) border border-(--primary-opacity) rounded-xl p-3">
          <div>
            <p className="text-(--text-color) text-sm">Resetar histórico</p>
            <p className="text-(--p-color) text-xs">
              Apaga todos os seus pomodoros e sessões salvas
            </p>
          </div>
          <button className="text-(--secondary-color) text-xs border border-(--secondary-color) rounded-lg px-3 py-1.5 cursor-pointer hover:bg-(--secondary-color) hover:text-(--background-color) duration-300">
            Resetar
          </button>
        </div>
      </section>
    </div>
  );
}

export default Ajustes;
