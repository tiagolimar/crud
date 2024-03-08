
export default function Insert() {

    function handleSubmit(){
        return undefined
    }

    return (
        <main className="d-flex justify-content-center">
            <form onClick={()=>handleSubmit} className="d-flex border border-black rounded rounded-4 flex-column gap-3 m-4 p-4 shadow">
                <h1>Formulário de Cadastro</h1>
                <input type="text" name="nome" className="form-control border-black" />
                <input type="number" name="preco" min={0} className="form-control border-black" />
                <button className="btn btn-dark w-100">Cadastrar</button>
            </form>

        </main>
    )
}