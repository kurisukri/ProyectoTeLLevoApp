export interface Usuario {
    username:string;
    password:string;
    activo:number;
   
    
}

export class TipoUsuario{

    id:number;
    name:string;
}



export interface Sesion {
    valor:number,
    username:string
}


export interface Viajes {
    cupos:number,
    patente: string,
    destinos: string,
    nombre:string,
    fono:string,
    

}