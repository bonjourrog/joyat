import { useContext, useState } from 'react';
import './Header.css';
import { HeaderProps } from './header.props';
import { HiMenuAlt3 } from "react-icons/hi";
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
                        <li className='navigation__link' onClick={()=>{
                            const about = document.getElementById('about');
                            setMenuOpened(false)
                            about?.scrollIntoView({behavior:'smooth'})
                        }}>Conocenos</li>
                        <li className='navigation__link' onClick={()=>{
                            const contact = document.getElementById('contact');
                            setMenuOpened(false)
                            contact?.scrollIntoView({behavior:'smooth'})
                        }}>Contacto</li>
                        <li className='navigation__link' onClick={()=>{
                            const location = document.getElementById('location');
                            setMenuOpened(false)
                            location?.scrollIntoView({behavior:'smooth'})
                        }}>Ubicación</li>
                    </ul>
                </nav>
            : null
        }
        <HiMenuAlt3 style={{ color: scrollPosition>60 ||menuOpened ? 'black': 'white'}} onClick={()=>setMenuOpened(!menuOpened)} className='menu-btn'/>
    </header>
}
export default Header;