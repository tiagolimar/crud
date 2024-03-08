import { useEffect, useState } from "react";
import axios from "axios";

export default function Listar() {
    const [produtos, setProdutos] = useState([
        { id:0, nome: "-", preco: 0 },
        { id:0, nome: "-", preco: 0 },
        { id:0, nome: "-", preco: 0 },
    ]);

    useEffect(()=>{
        async function getProdutos(){
            const dados = await axios.get('http://localhost:5000/listar');
            setProdutos(dados.data);
        }
        getProdutos();
    },[]);

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