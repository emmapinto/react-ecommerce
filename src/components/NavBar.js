import nav_logo from '../assets/img/blockbuster_nav_logo.png';
import { CartWidget } from './CartWidget.js';
import { Link } from "react-router-dom";

export const NavBar = () => {

    return (
        <nav>
            <div>
                <ul id="nav">
                    <Link to="/"><img src={nav_logo} alt="logo"/></Link>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/category/Comedia">Comedia</Link></li>
                    <li><Link to="/category/Accion">Accion</Link></li>
                    <li><Link to="/category/Aventuras">Aventuras</Link></li>
                    <li><Link to="/category/Terror">Terror</Link></li>
                    <li><Link to="/category/Sci-Fi">Sci-Fi</Link></li>
                    <li><Link to="/category/Drama">Drama</Link></li>
                    <Link to="/Cart"><CartWidget /></Link>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;