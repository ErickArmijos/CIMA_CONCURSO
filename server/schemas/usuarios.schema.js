import {z} from "zod"

export const registerUserSchema = z.object({
    nombres: z.string({
        required_error:"Se requiere el nombre de usuario",
    }),
    apellidos: z.string({
        required_error:"Se requiere el apellido del usuario"
    }),
    email: z.string({
        required_error:"Se requiere el email del usuario",
   }).email({
    message:"Correo no válido",
   }),
    contraseña: z.string({
    required_error:"Se requiere contraseña",
   }).min(6,{
    message:"La contraseña debe contener mínimo 6 caracteres"
   }),
   telefono: z.string({
    required_error:"Se requiere el número de teléfono",
   }).min(10,{
    message:"El número de telefono debe contener 10 caracteres",
   }),
   fecha_nacimiento: z.string({
        required_error:"Se requiere la fecha de nacimiento"
   }).refine((val) => !isNaN(Date.parse(val)), {
    message: "La fecha de nacimiento no es válida",
  })
  .transform((val) => new Date(val))
  .refine((date) => date <= new Date(), {
    message: "La fecha de nacimiento no puede ser en el futuro",
  })
  .refine((date) => {
    const now = new Date();
    const minDate = new Date(now.getFullYear() - 100, now.getMonth(), now.getDate());
    const maxDate = new Date(now.getFullYear() - 18, now.getMonth(), now.getDate());
    return date >= minDate && date <= maxDate;
  }, {
    message: "La fecha de nacimiento debe indicar una edad entre 18 y 100 años",
  }),
});

export const loginSchema = z.object({
    email:z.string({
        required_error:"Se requiere email del usuario",
    }).email({
        message:"Email no válido",
    }),
    contraseña:z.string({
        required_error:"Se requiere contraseña",
    }).min(6,{
        message:"La contraseña debe contener mínimo 6 caracteres"
    }),
})