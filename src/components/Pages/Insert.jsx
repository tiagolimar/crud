import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { PriceContext } from "../../context/PriceContext";
import { useContext } from "react";

export default function Insert() {
    const {getPriceSum} = useContext(PriceContext);

    async function handleSubmit(e) {
        e.preventDefault();
        const nome = e.target.elements.nome.value;
        const preco = e.target.elements.preco.value;

        try {
            const response = await axios.post('http://localhost:5000/inserir', { nome, preco });
            toast('Cadastro realizado com sucesso!', {
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
            console.log(response.data);
            getPriceSum();
        } catch (error) {
            console.error("Vixe, deu ruim na requisição: ", error);
        }
    }

    return (
        <main className="d-flex justify-content-center">
            <form onSubmit={(e) => handleSubmit(e)} className="d-flex border border-black rounded rounded-4 flex-column gap-3 m-4 p-4 shadow">
                <h1>Formulário de Cadastro</h1>
                <input type="text" name="nome" placeholder="Nome do produto" className="form-control border-black" required />
                <input type="number" name="preco" min={0.00} step={0.01} placeholder="Preço do produto" className="form-control border-black" required />
                <button className="btn btn-dark w-100">Cadastrar</button>
            </form>
            <ToastContainer />
        </main>
    )
}