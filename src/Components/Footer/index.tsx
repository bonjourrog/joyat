import { Link } from 'react-router-dom';
import './Footer.css';
import { FooterProps } from './Footer.props';
import { Socials } from '../Socials';

const Footer: React.FC<FooterProps> = ()=>{
    return <footer className='footer'>
        <section className='footer__top'>
            <div className='footer__logo-container'>
                <img className='footer__logo' src="https://res.cloudinary.com/dvdmz9djk/image/upload/v1724189435/JOYAT/images/szkxdyuo7dvtlmr5oo6d.png" alt="" />
            </div>
            <nav className='footer__nav'>
                <ul>
                    <li className='footer__nav-title'>Menu</li>
                    <li><Link className='footer__nav-link' to={"/contact"}>Contacto</Link></li>
                    <li><Link className='footer__nav-link' to={"/results"}>Buscador</Link></li>
                </ul>
            </nav>
            <div className='footer__socials'>
                <h3>Siguenos</h3>
                <Socials/>
            </div>
            <ul className='footer__times'>
                <li className='footer__time'><p className='footer__day'>Lunes</p>...........08:00am - 07:00pm</li>
                <li className='footer__time'><p className='footer__day'>Martes</p>..........08:00am - 07:00pm</li>
                <li className='footer__time'><p className='footer__day'>Miercoles</p>....08:00am - 07:00pm</li>
                <li className='footer__time'><p className='footer__day'>Jueves</p>...........08:00am - 07:00pm</li>
                <li className='footer__time'><p className='footer__day'>Viernes</p>..........08:00am - 07:00pm</li>
                <li className='footer__time'><p className='footer__day'>Sabado</p>..........08:00am - 07:00pm</li>
                <li className='footer__time'><p className='footer__day'>Domingo</p>......08:00am - 03:00pm</li>
            </ul>
        </section>
        <section className='footer__bottom'>
            <ul className='footer__contact'>
                <li>contacto@joyatinmobiliaria.com</li>
                <li>638-105-6863</li>
                <li>Boulevard Freemont 210 Puerto Peñasco, Sonora</li>
            </ul>
        </section>
    </footer>
}
export default Footer;