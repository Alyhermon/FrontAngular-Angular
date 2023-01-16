export class Contacto {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    telefonos: string[];
  
    constructor(
        id: number, 
        nombre: string, 
        apellido: string, 
        email: string,
        telefonos: string[]
    ) {
      this.id = id;
      this.nombre = nombre;
      this.apellido = apellido;
      this.email = email;
      this.telefonos = telefonos;
    }
}