import './Contact.css';
import { ContactProps } from './Contact.props';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ContactSchema } from './Contact.schema';
import emailjs from '@emailjs/browser';

const Contact: React.FC<ContactProps> = ()=>(
    <div className='form' id='contact'>
        <h2 className='form__headline'>Contacto</h2>
        <div className='contact-info'>
            <p>contacto@joyatinmobiliaria.com</p>
            <p>638-105-6863</p>
        </div>
        <Formik
            initialValues={{
                to_name:'Blue Bay Car Rental',
                name:'',
                reply_to:'',
                message:'',
            }}
            validationSchema={ContactSchema}
            onSubmit={(values, {setSubmitting, resetForm})=>{
                emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, values, import.meta.env.VITE_EMAILJS_PUBLIC_ID).then(_=>{
                    setSubmitting(false);
                    resetForm();
                }).catch(e=>{
                    console.log('An erros has ocurred sending email', e);
                    setSubmitting(false);
                })
            }}
        >
            {()=>(
            <Form className='form__content'>
                <Field placeholder='Nombre' className='form__field' name='name'/>
                <ErrorMessage className='form__error' component={'span'} name='name'/>
                <Field placeholder='Correo' className='form__field' name='reply_to' type='email'/>
                <ErrorMessage className='form__error' component={'span'} name='reply_to'/>
                <Field placeholder='Mensaje' style={{height:'10em'}} component='textarea' className='form__field' name='message' type='textarea'/>
                <ErrorMessage className='form__error' component={'span'} name='message'/>
                <button type='submit' className='form__button'>Enviar</button>
            </Form>
            )}
        </Formik>
    </div>
)

export default Contact;