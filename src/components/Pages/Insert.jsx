import axios from "axios";

export default function Insert() {

    async function handleSubmit(e){
        e.preventDefault();
        const nome = e.target.elements.nome.value;
        const preco = e.target.elements.preco.value;
        
        try {
            const response = await axios.post('http://localhost:5000/inserir', {nome, preco});
            console.log(response.data);
        } catch (error) {
            console.error("Vixe, deu ruim na requisição: ",error);
        }
    }

    return (
        <main className="d-flex justify-content-center">
            <form onSubmit={(e)=>handleSubmit(e)} className="d-flex border border-black rounded rounded-4 flex-column gap-3 m-4 p-4 shadow">
                <h1>Formulário de Cadastro</h1>
                <input type="text" name="nome" placeholder="Nome do produto" className="form-control border-black" required />
                <input type="number" name="preco" min={0.00} step={0.01} placeholder="Preço do produto" className="form-control border-black" required />
                <button className="btn btn-dark w-100">Cadastrar</button>
            </form>
        </main>
    )
}