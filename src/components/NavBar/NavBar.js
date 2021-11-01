import { CartWidget } from './CartWidget.js';
import { menu } from '../utiles/helpers.js';
import logo from '../../logo.svg';
import nav_logo from '../../assets/img/blockbuster_nav_logo.png';


export const NavBar = () => {
    return (
        <nav>
            <div>
                <ul id="nav">
                    <img src={nav_logo} alt="logo"  />
                    {
                        menu.map(item =>{
                            return <li><a href="#">{item}</a></li>
                        })
                    }
                    <CartWidget />
                </ul>
            </div>
        </nav>
    )
}

