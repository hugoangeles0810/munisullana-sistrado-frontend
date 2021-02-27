export interface TramiteDetailResponse {
    id: string;
    codigo: string;
    nombre: string;
    descripcion: string;
    indicaciones: string;
    requisitos: Array<RequisitoItemResponse>;
}

export interface RequisitoItemResponse {
    id: string;
    nombre: string;
    descripcion: string;
    tipoAdjunto: string;
    adjunto: string;
}
