export interface Hospital {
    id?: number;
    nombre: string;
    direccion: string;
    telefono: number;
    camas: number;
    creted_at?: string;
    updated_at?:string;
}