import ButtonDashboard from "./ui/ButtonDashboard";

function Convite() {
  return (
    <section className="mt-20 h-90 p-2">
      {/* apresentação */}
      <div className="w-full h-fit flex flex-col justify-center items-center">
        <h2 className="text-(--text-color) text-3xl font-medium">
          pronto para focar de verdade?
        </h2>
        <p className="text-(--p-color) mt-2 text-center">
          Crie sua conta grátis e comece sua primeira sessão em 30 segundos.
        </p>
      </div>

      {/* enviar email */}
      <div className="w-full flex flex-col justify-center items-center">
        <input
          type="text"
          placeholder="seu@email.com"
          className="w-[70%] block bg-(--main-color) text-(--text-color) border border-(--text-color) rounded-3xl p-2 mt-5 placeholder:text-(--p-color)"
        />
        <ButtonDashboard className="text-center! border borde-(--text-color) mt-6">
          começar grátis
        </ButtonDashboard>
        <p className="text-(--p-color) text-sm mt-2">
          Sem cartão de crédito. Cancele quando quiser.
        </p>
      </div>
    </section>
  );
}

export default Convite;
