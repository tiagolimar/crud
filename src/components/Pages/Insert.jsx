import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Insert() {
    async function handleSubmit(e) {
        e.preventDefault();
        const nick = e.target.elements.nick.value;
        const idade = e.target.elements.idade.value;
        const foco = e.target.elements.foco.value;
        const recrutador = e.target.elements.recrutador.value;
        const cargo = e.target.elements.cargo.value;
        const status = e.target.elements.status.value;

        const data_send = { nick, idade, foco, recrutador, cargo, status };

        try {
            await axios.post("http://localhost:5000/inserir", data_send);

            toast("Cadastro realizado com sucesso!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        } catch (error) {
            console.error("Houve uma falha na requisição: ", error);
        }
    }

    return (
        <main className="d-flex justify-content-center">
            <form
                onSubmit={(e) => handleSubmit(e)}
                className="d-flex border border-black rounded rounded-4 flex-column gap-3 m-4 p-4 shadow"
            >
                <h1>Formulário de Cadastro</h1>
                <input
                    type="text"
                    name="nick"
                    placeholder="Nick"
                    className="form-control border-black"
                    required
                />
                <input
                    type="number"
                    name="idade"
                    min={0}
                    max={99}
                    step={1}
                    placeholder="Idade"
                    className="form-control border-black"
                    required
                />
                {/* COLOCAR O SELECT PARA ESCOLHA DO FOCO AQUI */}
                {/* FAZER LÓGICA QUE OBTÉM RECRUTADORES E PÕE NO SELECT AQUI */}
                {/* FAZER SELECT DOS TIPOS DE CARGOS */}
                {/* FAZER SELECT DO STATUS */}
                <button className="btn btn-dark w-100">Cadastrar</button>
            </form>
            <ToastContainer />
        </main>
    );
}
