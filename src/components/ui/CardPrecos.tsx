import ButtonDashboard from "./ButtonDashboard";

type PlanoDePreco = {
  badge: string;
  titulo: string;
  preco: string;
  periodo: string;
  descricao: string;
  beneficios: string[];
  botao: string;
};

type CardPrecosProps = {
  plano: PlanoDePreco;
};

function CardPrecos({ plano }: CardPrecosProps) {
  return (
    <div className="text-(--text-color) bg-(--main-color) rounded-3xl p-6 flex flex-col gap-4 shadow-lg">
      <p className="w-fit text-sm px-3 py-1 rounded-2xl text-(--primary-color) bg-(--primary-opacity)">
        {plano.badge}
      </p>

      <div className="space-y-2">
        <h3 className="text-3xl font-semibold">{plano.titulo}</h3>
        <p className="text-2xl">
          {plano.preco}
          <span className="text-(--p-color) text-sm">{plano.periodo}</span>
        </p>
        <p className="text-(--p-color)">{plano.descricao}</p>
      </div>

      <ul className="flex flex-col gap-2">
        {plano.beneficios.map((beneficio) => (
          <li key={beneficio}>
            <p className="text-(--p-color) flex gap-2">
              <span className="text-(--primary-color) font-extrabold">-</span>
              {beneficio}
            </p>
          </li>
        ))}
      </ul>

      <ButtonDashboard className="mt-auto text-center! border border-white">
        {plano.botao}
      </ButtonDashboard>
    </div>
  );
}

export default CardPrecos;
