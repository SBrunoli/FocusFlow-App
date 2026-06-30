import CardPrecos from "./ui/CardPrecos";

const planosPreco = [
  {
    badge: "gratuito",
    titulo: "Free",
    preco: "R$0",
    periodo: "/mês",
    descricao: "Para quem está começando",
    beneficios: [
      "Timer Pomodoro básico",
      "Até 5 tarefas por dia",
      "Histórico de 7 dias",
    ],
    botao: "começar grátis",
  },
  {
    badge: "popular",
    titulo: "Pro",
    preco: "R$19",
    periodo: "/mês",
    descricao: "Para devs sérios em produtividade.",
    beneficios: [
      "Tudo do Free",
      "Tarefas ilimitadas",
      "Analytics completo",
      "Modo foco com IA",
      "Sync entre dispositivos",
    ],
    botao: "assinar Pro",
  },
  {
    badge: "times",
    titulo: "Team",
    preco: "R$49",
    periodo: "/mês",
    descricao: "Para equipes que entregam junto.",
    beneficios: [
      "Tudo do Pro",
      "Até 10 usuários",
      "Dashboard de time",
      "Relatórios exportáveis",
    ],
    botao: "falar com vendas",
  },
];

function Precos() {
  return (
    <section className="w-full flex flex-col items-center mt-20 px-4 md:px-0">
      <div className="w-full max-w-6xl flex flex-col justify-center items-center text-center">
        <p className="text-(--primary-color) font-medium text-lg">Preços</p>
        <h2 className="text-(--text-color) text-3xl font-medium mt-4">
          Simples e transparente
        </h2>
        <p className="text-(--p-color) mt-4 text-lg">
          Comece grátis, faça upgrade quando precisar.
        </p>
      </div>

      <div className="w-full max-w-6xl p-6 grid gap-6 mt-12 md:grid-cols-3">
        {planosPreco.map((plano) => (
          <CardPrecos key={plano.titulo} plano={plano} />
        ))}
      </div>
    </section>
  );
}

export default Precos;
