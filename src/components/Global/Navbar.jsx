import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PriceContext } from '../../context/PriceContext'

export default function Navbar() {
    const {price, getPriceSum} = useContext(PriceContext);
    const location = useLocation();
    const itens = [
        { link: "/", descricao: "Home" },
        { link: "/inserir", descricao: "Inserir" },
        { link: "/listar", descricao: "Listar" },
        { link: "/remover", descricao: "Remover" },
    ]
    
    function ItemNav({item}) {
        const { link, descricao } = item;
        const active = location.pathname == link ? 'active' : '';
        return (
            <li className="nav-item text-white">
                <Link className={`nav-link ${active}`} aria-current="page" to={link}>{descricao}</Link>
            </li>
        )
    }


    return (
        <nav className="navbar navbar-expand-lg bg-dark text-white" data-bs-theme="dark">
            <a href="/" className="navbar-brand">CRUD</a>
            <ul className="navbar-nav d-flex flex-row gap-4 me-auto">
                {itens.map((item, id)=>{
                    return(
                        <ItemNav key={id} item={item} />
                    )
                })}
            </ul>
            <h3 className='me-4'>Valor Total = {price.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}</h3>
        </nav>
    )
}