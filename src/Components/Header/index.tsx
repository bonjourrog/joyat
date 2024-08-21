import { useContext, useState } from 'react';
import './Header.css';
import { HeaderProps } from './header.props';
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-scroll";
import {Link as NavigaTo} from 'react-router-dom';
import { AppContext } from '../../Context/App';

const Header: React.FC<HeaderProps> = ({showNavigation})=>{
    const [menuOpened, setMenuOpened] = useState(false);
    const {scrollPosition} = useContext(AppContext);
    return <header style={{backgroundColor:scrollPosition>60?'white': 'transparent', color:scrollPosition>60?'#1b1b1b':'white', boxShadow:scrollPosition>60?'.3em .3em 1em rgba(0, 0, 0, 0.1)':''}} className='header'>
        <span style={{width:showNavigation ? 'auto' : '100%'}}><NavigaTo style={{color:scrollPosition>60?'#1b1b1b':'white'}} to={"/"}>JOYAT</NavigaTo></span>
        {
            showNavigation ? 
                <nav className='navigation' style={{right: menuOpened ? '0em' : '-100vw'}}>
                    <ul className='navigation__list'>
                        <li className='navigation__link'><Link onClick={()=>setMenuOpened(false)} to='about' smooth={true}>Conocenos</Link></li>
                        <li className='navigation__link'><Link onClick={()=>setMenuOpened(false)} to='contact' smooth={true}>Contacto</Link></li>
                        <li className='navigation__link'><Link onClick={()=>setMenuOpened(false)} to='location'smooth={true}>Ubicación</Link></li>
                    </ul>
                </nav>
            : null
        }
        <HiMenuAlt3 style={{ color: scrollPosition>60 ||menuOpened ? 'black': 'white'}} onClick={()=>setMenuOpened(!menuOpened)} className='menu-btn'/>
    </header>
}
export default Header;