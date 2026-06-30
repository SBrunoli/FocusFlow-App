type Avaliação = {
  rate: string;
  estrelas: string;
  descricao: string;
  nome: string;
  icone: string;
  funcao: string;
};

type CardDepoimentosProps = {
  item: Avaliação;
};

function CardDepoimentos({ item }: CardDepoimentosProps) {
  return (
    <div className="lg:w-90 md:w-90 sm:w-full min-h-fit bg-(--main-color) p-4 rounded-3xl ">
      {/* Estrelas de avaliação */}
      <p>
        <span className="text-(--primary-color) text-lg font-medium">
          {item.rate}
          <i
            className={`${item.estrelas} text-(--primary-color) ml-2 text-sm`}
          ></i>
        </span>
      </p>
      {/* Descrição */}
      <p className="w-[80%] lg:h-30 sm:h-fit text-(--p-color)">
        {item.descricao}
      </p>

      <div className="flex flex-row items-center gap-3 lg:mt-2 md:mt-2 sm:mt-0">
        <p className="w-10 h-10 flex items-center justify-center bg-(--primary-opacity) rounded-full text-(--text-color)">
          {item.icone}
        </p>

        <ul className="leading-4">
          <li className="text-(--text-color)">{item.nome}</li>
          <li className="text-[.7rem] text-(--p-color)">{item.funcao}</li>
        </ul>
      </div>
    </div>
  );
}

export default CardDepoimentos;
