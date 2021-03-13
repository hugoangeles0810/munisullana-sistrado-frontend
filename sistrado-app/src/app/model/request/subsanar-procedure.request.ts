export interface SubsanarTramiteRequest {
    id: string;
    requisitos: Array<AdjuntoRequest>;
}

export interface AdjuntoRequest {
    id: string;
    adjunto: string;
}