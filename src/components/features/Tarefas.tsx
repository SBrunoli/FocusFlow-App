import { useState } from "react";
import ButtonDashboard from "../ui/ButtonDashboard";

type Tarefa = {
  id: number;
  title: string;
  concluido: boolean;
};

type Filtro = "todos" | "pendentes" | "concluidas";

function Tarefas() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([
    { id: 1, title: "Tarefa 1", concluido: false },
  ]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [filtro, setFiltro] = useState<Filtro>("todos");
  const [editandoId, setEditandoId] = useState<number | null>(null);
  const [textoEdicao, setTextoEdicao] = useState("");

  const toggleTarefa = (id: number) => {
    setTarefas((prev) =>
      prev.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluido: !tarefa.concluido } : tarefa,
      ),
    );
  };

  const adicionarTarefa = () => {
    const title = novaTarefa.trim();
    if (!title) return;

    setTarefas((prev) => [
      ...prev,
      { id: Date.now(), title, concluido: false },
    ]);
    setNovaTarefa("");
  };

  const excluirTarefa = (id: number) => {
    setTarefas((prev) => prev.filter((tarefa) => tarefa.id !== id));
    if (editandoId === id) {
      setEditandoId(null);
      setTextoEdicao("");
    }
  };

  const iniciarEdicao = (tarefa: Tarefa) => {
    setEditandoId(tarefa.id);
    setTextoEdicao(tarefa.title);
  };

  const salvarEdicao = (id: number) => {
    const title = textoEdicao.trim();
    if (!title) return;
    setTarefas((prev) =>
      prev.map((tarefa) => (tarefa.id === id ? { ...tarefa, title } : tarefa)),
    );
    setEditandoId(null);
    setTextoEdicao("");
  };

  const cancelarEdicao = () => {
    setEditandoId(null);
    setTextoEdicao("");
  };

  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === "pendentes") return !tarefa.concluido;
    if (filtro === "concluidas") return tarefa.concluido;
    return true;
  });

  return (
    <div className="w-full h-full flex flex-col">
      {/* Inserção de tarefas */}
      <div className="w-[98%] flex flex-row items-center gap-4">
        <input
          type="text"
          value={novaTarefa}
          onChange={(event) => setNovaTarefa(event.target.value)}
          placeholder="Adicione uma nova tarefa..."
          className="bg-(--background-color) text-(--text-color) placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl p-2 w-[50%]"
        />
        <ButtonDashboard
          onClick={adicionarTarefa}
          className="text-center! border border-gray-600"
        >
          + Criar Tarefa
        </ButtonDashboard>
      </div>

      {/* filtros */}
      <div className="flex flex-row gap-3 mt-3">
        <ButtonDashboard
          onClick={() => setFiltro("todos")}
          className={`text-center! w-fit! border border-gray-600 ${
            filtro === "todos" ? "bg-purple-600 text-white" : ""
          }`}
        >
          Todos
        </ButtonDashboard>

        <ButtonDashboard
          onClick={() => setFiltro("pendentes")}
          className={`text-center! w-fit! border border-gray-600 ${
            filtro === "pendentes" ? "bg-purple-600 text-white" : ""
          }`}
        >
          Pendentes
        </ButtonDashboard>

        <ButtonDashboard
          onClick={() => setFiltro("concluidas")}
          className={`text-center! w-fit! border border-gray-600 ${
            filtro === "concluidas" ? "bg-purple-600 text-white" : ""
          }`}
        >
          Concluídas
        </ButtonDashboard>
      </div>

      {/* Tarefas */}
      <div className="w-full h-full flex flex-col gap-2 mt-3 p-2 overflow-y-auto">
        {tarefasFiltradas.length === 0 ? (
          <div className="text-(--text-color) p-4 rounded-xl border border-gray-600 bg-(--background-color)">
            Nenhuma tarefa encontrada.
          </div>
        ) : (
          tarefasFiltradas.map((tarefa) => (
            <div
              key={tarefa.id}
              className="w-full flex flex-row gap-2 items-center bg-(--background-color) p-2 rounded-xl border border-gray-600"
            >
              <input
                type="checkbox"
                checked={tarefa.concluido}
                onChange={() => toggleTarefa(tarefa.id)}
                style={{
                  backgroundColor: tarefa.concluido ? "#7c3aed" : "#1f2937",
                }}
                className="w-5 h-5 rounded-md border border-gray-600 cursor-pointer duration-300 accent-white"
              />

              {editandoId === tarefa.id ? (
                <input
                  type="text"
                  value={textoEdicao}
                  onChange={(event) => setTextoEdicao(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") salvarEdicao(tarefa.id);
                    if (event.key === "Escape") cancelarEdicao();
                  }}
                  className="bg-(--background-color) text-(--text-color) placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl p-2 flex-1"
                />
              ) : (
                <span
                  className={`text-(--text-color) ${
                    tarefa.concluido ? "line-through opacity-70" : ""
                  }`}
                >
                  {tarefa.title}
                </span>
              )}

              <div className="text-(--text-color) ml-auto flex flex-row gap-2">
                {editandoId === tarefa.id ? (
                  <>
                    <button
                      onClick={() => salvarEdicao(tarefa.id)}
                      className="w-fit! p-2 border border-gray-600 cursor-pointer rounded-xl"
                    >
                      Salvar
                    </button>
                    <button
                      onClick={cancelarEdicao}
                      className="w-fit! p-2 border border-gray-600 cursor-pointer rounded-xl"
                    >
                      Cancelar
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => iniciarEdicao(tarefa)}
                      className="w-fit! p-2 border border-gray-600 cursor-pointer rounded-xl"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => excluirTarefa(tarefa.id)}
                      className="w-fit! p-2 border border-gray-600 cursor-pointer rounded-xl"
                    >
                      Excluir
                    </button>
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Tarefas;
