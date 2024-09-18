import './About.css';
const About = ()=>{
    return <div className='about' id='about'>
        <div className='about__caption'>
            <h2 className='about__headline'>Sobre Nosotros</h2>
            <p>En Joyat, nos dedicamos a ofrecer soluciones integrales en el mercado inmobiliario, conectando personas con sus espacios ideales y ayudando a convertir sueños en realidad. Con una trayectoria sólida y un equipo altamente capacitado, nos destacamos por nuestra pasión por el servicio al cliente, la excelencia en la gestión y el compromiso con la satisfacción del cliente.</p>
        </div>
        <div className='bg__image'>
            <img src='https://res.cloudinary.com/dvdmz9djk/image/upload/v1723074511/JOYAT/images/jolla/kww4jjfma6xuzrgh3zd8.png' alt=""/>
        </div>
    </div>
}

export default About;