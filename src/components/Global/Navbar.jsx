import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const itens = [
        { link: "/", descricao: "Home" },
        { link: "/inserir", descricao: "Inserir" },
        { link: "/editar", descricao: "Editar" },
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
            <a href="/" className="navbar-brand ms-4">ETY</a>
            <ul className="navbar-nav d-flex flex-row gap-4 me-auto">
                {itens.map((item, id)=>{
                    return(
                        <ItemNav key={id} item={item} />
                    )
                })}
            </ul>
        </nav>
    )
}