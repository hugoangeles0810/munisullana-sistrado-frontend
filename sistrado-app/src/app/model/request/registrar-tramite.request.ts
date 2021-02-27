export interface RegistrarTramiteRequest {
    tramiteId: string;
    requisitos: Array<AdjuntoRequest>;
}

export interface AdjuntoRequest {
    requisitoId: string;
    adjunto: string;
}