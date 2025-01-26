import { object,string } from 'yup'

export const loginSchema = object({
    password:string()
    .min(8,"La contraseña debe tener al menos 8 caracteres")
    .required("Contraseña es requerida")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, "La contraseña debe tener al menos una letra mayúscula, una minúscula y un número"),
    email:string()
        .email("El Email no es válido")
        .required("Email es requerido"),
    
})