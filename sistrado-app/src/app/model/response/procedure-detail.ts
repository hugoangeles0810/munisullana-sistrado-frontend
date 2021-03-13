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
    descripcion:       string;
    indicaciones:      string;
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