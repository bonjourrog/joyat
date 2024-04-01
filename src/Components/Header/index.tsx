import { useState } from 'react';
import './Header.css';
import { HeaderProps } from './header.props';
import { HiMenuAlt3 } from "react-icons/hi";

const Header: React.FC<HeaderProps> = ({showNavigation})=>{
    const [menuOpened, setMenuOpened] = useState(false);
    return <header className='header'>
        <span style={{width:showNavigation ? 'auto' : '100%'}}>JOYAT</span>
        {
            showNavigation ? 
                <nav className='navigation' style={{right: menuOpened ? '0em' : '-100vw'}}>
                    <ul className='navigation__list'>
                        <li className='navigation__link'>Conocenos</li>
                        <li className='navigation__link'>Contacto</li>
                        <li className='navigation__link'>Ubicación</li>
                    </ul>
                </nav>
            : null
        }
        <HiMenuAlt3 style={{ color:menuOpened ? 'black': 'white'}} onClick={()=>setMenuOpened(!menuOpened)} className='menu-btn'/>
    </header>
}
export default Header;