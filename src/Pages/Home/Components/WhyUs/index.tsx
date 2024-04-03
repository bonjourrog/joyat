import './WhyUs.css';
import { WhyUs } from './WhyUs.props';

const WhyUs: React.FC<WhyUs> = ()=>{
    return <section className='whyus'>
        <h2 className='whyus__headline'>Eligenos</h2>
        <ul className='whyus__list'>
            <div className='whyus__list-row'>
                <li className='why-card'>
                    <p className='why-card__title' >Transparencia y confiabilidad</p>
                    <div className='why-card__image-contianer'>
                        <img className='why-card__image' src="https://res.cloudinary.com/dvdmz9djk/image/upload/v1712175086/JOYAT/images/a1nea6h9m18o1ap20rep.jpg" alt=""/>
                    </div>
                    <p className='why-card__message'>En Joyat, creemos en la transparencia en todas nuestras transacciones. Te proporcionamos información detallada sobre cada terreno, incluyendo su ubicación exacta, dimensiones, servicios disponibles y más.</p>
                </li>
                <li className='why-card'>
                    <p className='why-card__title' >Experiencia y conocimiento del mercado local</p>
                    <p className='why-card__message'>Nuestra agencia cuenta con años de experiencia en el mercado inmobiliario local.</p>
                    <div className='why-card__image-contianer'>
                        <img className='why-card__image' src="https://res.cloudinary.com/dvdmz9djk/image/upload/v1712175545/JOYAT/images/altldxohlhbhytg0wbra.jpg" alt=""/>
                    </div>
                </li>
            </div>
            <div className='whyus__list-row'>
                <li className='why-card'>
                    <p className='why-card__title' >Asesoramiento integral en cada etapa del proceso de compra o venta</p>
                    <p className='why-card__message'>Desde la primera consulta hasta el cierre de la transacción, nuestro equipo está aquí para guiar a nuestros clientes en cada paso del proceso de compra o venta.</p>
                    <div className='why-card__image-contianer'>
                        <img className='why-card__image' src="https://res.cloudinary.com/dvdmz9djk/image/upload/v1712175657/JOYAT/images/x0udk9wler5qexkeduk1.jpg" alt=""/>
                    </div>
                </li>
                <li className='why-card'>
                    <p className='why-card__title' >Transparencia y confiabilidad</p>
                    <p className='why-card__message'>En Joyat, creemos en la transparencia en todas nuestras transacciones. Te proporcionamos información detallada sobre cada terreno, incluyendo su ubicación exacta, dimensiones, servicios disponibles y más.</p>
                    <div className='why-card__image-contianer'>
                        <img className='why-card__image' src="https://res.cloudinary.com/dvdmz9djk/image/upload/v1712175931/JOYAT/images/v4hjgmggpwejsx9d29if.jpg" alt=""/>
                    </div>
                </li>
            </div>
        </ul>
    </section>
}

export default WhyUs;