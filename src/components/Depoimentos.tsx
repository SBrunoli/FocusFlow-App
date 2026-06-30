import CardDepoimentos from "./ui/CardDepoimentos";

const avaliacoes = [
  {
    rate: "5/5",
    estrelas: "fa-solid fa-star ml-2",
    descricao:
      '"Dobrei minha produtividade em 3 semanas. O analytics me mostrou que eu era mais focado de manhã - mudou minha rotina"',
    nome: "Gabiel M.",
    icone: "Gabiel M."
      .split(" ")
      .map((palavra: string) => palavra.charAt(0))
      .join(""),
    funcao: "dev fullstack",
  },

  {
    rate: "5/5",
    estrelas: "fa-solid fa-star",
    descricao:
      '"Interface linda e sem frescura. Usei outros 4 apps de pomodoro e esse é o único que ficou instalado"',
    nome: "Larissa C.",
    icone: "Larissa C."
      .split(" ")
      .map((palavra: string) => palavra.charAt(0))
      .join(""),
    funcao: "Designer UX",
  },

  {
    rate: "5/5",
    estrelas: "fa-solid fa-star",
    descricao:
      '"Nosso time adotou o plano Team. Os relatórios de foco ajudam nas retrospectivas da sprint."',
    nome: "Rodrigo S.",
    icone: "Rodrigo S."
      .split(" ")
      .map((palavra: string) => palavra.charAt(0))
      .join(""),
    funcao: "tech lead",
  },
];

function Depoimentos() {
  return (
    <section className="w-full h-fit flex flex-col items-center mt-20 px-4 md:px-0">
      <div className="w-full max-w-6xl flex flex-col justify-center items-center text-center">
        <p className="text-(--primary-color) font-medium text-lg">
          Depoimentos
        </p>
        <h2 className="text-(--text-color) text-3xl font-medium mt-4">
          Quem já usa, não para
        </h2>
        <p className="text-(--p-color) mt-4 text-lg">
          +4.200 devs e designer usando todo dia.
        </p>
      </div>

      <div className="w-full flex flex-row flex-wrap justify-center gap-6 mt-10">
        {avaliacoes.map((item) => (
          <CardDepoimentos key={item.nome} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Depoimentos;
