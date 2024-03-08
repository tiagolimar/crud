import axios from "axios";

export default function Remover(){
    async function handleSubmit(e){
        e.preventDefault();
        const id = e.target.elements.id.value;
        console.log(id);
        try {
            const response = await axios.delete(`http://localhost:5000/remover/${id}`);
            console.log(response.data);
        } catch (error) {
            console.error("Vixe, deu ruim na requisição: ",error);
        }
    }
    return(
        <main className="d-flex justify-content-center">
            <form onSubmit={(e)=>handleSubmit(e)} className="d-flex border border-black rounded rounded-4 flex-column gap-3 m-4 p-4 shadow">
                <h1>Formulário de Remoção</h1>
                <input type="number" name="id" placeholder="ID do produto" className="form-control border-black" />
                <button className="btn btn-dark w-100">Remover</button>
            </form>
        </main>
    )
}