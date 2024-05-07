//nomes: Larissa Araújo -RM - 96496
//nomes: Luna Faustino - RM - 552473
//nomes: Murillo Ferreira - RM - 553315
//nomes: Pedro Luiz - RM - 553874
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "./dashboard.css";

const dashboard: React.FC = () => {
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState({ Nome: "", Descrição: "", Data: "" });

    useEffect(() => {
        fetch("./tarefas.json")
            .then((response) => response.json())
            .then((response) => { setTarefas(response) })
            .catch((error) => { console.log(error); })
    }, []);

    const router = useRouter();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (!isLoggedIn) {
            router.push("/");
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        router.push("/");
    };

    const handleAdicionarTarefa = () => {
        setTarefas([...tarefas, novaTarefa]);
        fetch("./tarefas.json", { method: "POST", body: JSON.stringify(novaTarefa) });
        setNovaTarefa({ Nome: "", Descrição: "", Data: "" });
    };

    const handleExcluirTarefa = (id: number) => {
        const novaListaTarefas = tarefas.filter((tarefa) => tarefa.id !== id);
        setTarefas(novaListaTarefas);
    };

    return (
        <>
            <h1>To do List</h1>

            <input
                type="text"
                placeholder="Nome da tarefa"
                value={novaTarefa.Nome}
                onChange={(e) => setNovaTarefa({ ...novaTarefa, Nome: e.target.value })}
            />
            <input
                type="text"
                placeholder="Descrição da tarefa"
                value={novaTarefa.Descrição}
                onChange={(e) => setNovaTarefa({ ...novaTarefa, Descrição: e.target.value })}
            />
            <input
                type="text"
                placeholder="Data da tarefa"
                value={novaTarefa.Data}
                onChange={(e) => setNovaTarefa({ ...novaTarefa, Data: e.target.value })}
            />

            <button onClick={handleAdicionarTarefa}>Inserir Tarefa</button>

            <table>
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>Descrição</th>
                        <th>Data</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {tarefas.map((tarefa) => (
                        <tr key={tarefa.id}>
                            <td>{tarefa.Nome}</td>
                            <td>{tarefa.Descrição}</td>
                            <td>{tarefa.Data}</td>
                            <td>
                                <button>Concluir</button>
                                <button onClick={() => handleExcluirTarefa(tarefa.id)}>Excluir</button>
                                {/* Comentário: Adicionei o botão "Excluir" */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default dashboard;
