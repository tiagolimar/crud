
export default function Remover(){
    return(
        <main className="d-flex justify-content-center">
            <form onClick={()=>handleSubmit} className="d-flex border border-black rounded rounded-4 flex-column gap-3 m-4 p-4 shadow">
                <h1>Formulário de Remoção</h1>
                <input type="number" name="id" placeholder="ID do produto" className="form-control border-black" />
                <button className="btn btn-dark w-100">Remover</button>
            </form>
        </main>
    )
}