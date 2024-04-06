import { useEffect, useState } from 'react';
import './Header.css';
import { HeaderProps } from './header.props';
import { HiMenuAlt3 } from "react-icons/hi";

const Header: React.FC<HeaderProps> = ({showNavigation})=>{
    const [menuOpened, setMenuOpened] = useState(false);
    const [scrollPosition, setScrollPosition] = useState<number>(window.screenY);
    const handleScroll = ()=>{
        setScrollPosition(window.scrollY);
    }
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    return <header style={{backgroundColor:scrollPosition>60?'white': 'transparent', color:scrollPosition>60?'#1b1b1b':'white'}} className='header'>
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
        <HiMenuAlt3 style={{ color: scrollPosition>60 ||menuOpened ? 'black': 'white'}} onClick={()=>setMenuOpened(!menuOpened)} className='menu-btn'/>
    </header>
}
export default Header;