import type { ReactNode } from "react";

type CardFuncionalidadesProps = {
  children: ReactNode;
};

function CardFuncionalidades(props: CardFuncionalidadesProps) {
  return (
    <div className="w-100 min-h-fit flex flex-col justify-center items-left mt-4 bg-(--main-color) rounded-xl p-6 gap-3 text-left ">
      {props.children}
    </div>
  );
}

export default CardFuncionalidades;
