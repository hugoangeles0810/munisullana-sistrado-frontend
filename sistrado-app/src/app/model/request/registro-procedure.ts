export interface TramiteRequest {
    id: string;
    codigo: string;
    nombre: string;
    descripcion: string;
    indicaciones: string;
}

export interface ProcedureDetail {
    id:                number;
    numero:            string;
    ciudadano:         string;
    tramite:           string;
    tipo:              string;
    estado:            string;
    fechaCreacion:     string;
    fechaModificacion: string;
    adjuntos:          Adjunto[];
}

export interface Adjunto {
    id:           number;
    requisitoId:  number;
    adjunto:      string;
    fechaCarga:   string;
    nombre:       string;
    descripcion:  string;
    indicaciones: string;
}
export interface ProcedureItem {
    id: number;
    numero: string;
    ciudadano: string;
    tramite: string;
    tipo: string;
    fechaCreacion: string;
    fechaModificacion: string;
}

export interface SolicitudRequest{
    tramiteId:number;
    requisitos: RequisitoItem[];
}

export interface RequisitoItem{
    requisitoId:number;
    adjunto:string;
}