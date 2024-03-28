import * as Yup from 'yup';

export const ContactSchema = Yup.object().shape({
    name: Yup.string().min(3, 'El nombre es demasiado corto').required('El campo es requerido'),
    reply_to: Yup.string().email('Correo invalido').required('El campo es requerido'),
    message: Yup.string().min(20, 'El mensaje es demasiado corto').required('el campo es requerido')
});