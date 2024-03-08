
export default function Listar() {

    const produtos = [
        { nome: "Goiaba Rosa", preco: 2.15 },
        { nome: "Abacaxi Verde", preco: 5.50 },
        { nome: "Manga", preco: 3.75 },
        { nome: "Laranja", preco: 4.25 },
        { nome: "Morango", preco: 2.50 },
        { nome: "Uva", preco: 3.00 },
        { nome: "Banana", preco: 1.75 },
        { nome: "Pera", preco: 3.50 },
        { nome: "Kiwi", preco: 5.00 },
        { nome: "Limão", preco: 2.25 }
    ];

    return (
        <div className="container">
            <h1 className="text-center mt-4 mb-4">Lista de Produtos</h1>
            <table className="table table-striped border border-black shadow">
                <thead>
                    <tr>
                        {Object.keys((produtos[0])).map((chave, id) => {
                            return (
                                <th key={id} className="text-center">{chave.toUpperCase()}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto,id)=>{
                        return(
                            <tr key={id} >
                                {Object.keys(produto).map((key,id)=>{
                                    return(
                                        <td key={id} className="text-center">{produto[key]}</td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}