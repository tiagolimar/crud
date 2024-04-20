import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Remover(){

    async function handleSubmit(e){
        e.preventDefault();
        const id = e.target.elements.id.value;
        try {
            const response = await axios.delete(`http://localhost:5000/remover/${id}`);
            console.log(response.data);
            toast.error('Removido com sucesso!', {
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
            console.error("Vixe, deu ruim na requisição: ",error);
        }
    }
    return(
        <main className="d-flex justify-content-center">
            <form onSubmit={(e)=>handleSubmit(e)} className="d-flex border border-black rounded rounded-4 flex-column gap-3 m-4 p-4 shadow">
                <h1>Formulário de Remoção</h1>
                <input type="number" name="id" placeholder="ID do membro" className="form-control border-black" />
                <button className="btn btn-dark w-100">Remover</button>
            </form>
            <ToastContainer />
        </main>
    )
}