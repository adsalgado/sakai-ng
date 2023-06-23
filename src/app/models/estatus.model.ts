import { ITipoEstatus } from "./tipo-estatus.model";

export interface IEstatus {
    id?: number | null;
    clave?: string | null;
    nombre?: string | null;
    descripcion?: string | null;
    tipoEstatus?: Pick<ITipoEstatus, 'id'> | null;
  }
  
  export type NewEstatus = Omit<IEstatus, 'id'> & { id: null };
  