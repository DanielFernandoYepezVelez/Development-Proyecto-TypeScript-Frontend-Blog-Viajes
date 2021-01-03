/* Las Interfaces Se Hacen Rapidamente Con QuickType.io */

export interface Viajes {
    ok: boolean;
    viajes: Viaje[];
}

export interface Viaje {
    id: number;
    titulo: string;
    precio: number;
    fecha_id: Date;
    fecha_vuelta: Date;
    imagen: string;
    descripcion: string;
    disponible: number;
    slug: string;
    created_at: Date;
}