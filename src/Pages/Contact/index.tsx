import './Contact.css';
import { ContactFormProps } from './Contact.props';
import ContactForm from '../Home/Components/Contact';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

const Contact: React.FC<ContactFormProps> = ()=>{
    return <div className='contact'>
        <div className='contact__header'>
            <h1>¿Necesitas ayuda? Contáctanos y te brindaremos asistencia personalizada</h1>
            <Header showNavigation/>
            <img src="https://res.cloudinary.com/dvdmz9djk/image/upload/v1711558391/JOYAT/images/vgjnh5kfbvre9pysgpmp.jpg" alt="" />
        </div>
        <ContactForm/>
        <Footer/>
    </div>
}

export default Contact;