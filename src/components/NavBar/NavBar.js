import { CartWidget } from './CartWidget.js';
import { menu } from '../utiles/helpers.js';
import logo from '../../logo.svg';

export const NavBar = () => {
    return (
        <nav>
            <div>
                <ul id="nav">
                    <img src={logo} alt="logo" />
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

