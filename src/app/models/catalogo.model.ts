import { ITipoCatalogo } from "./tipo-catalogo.model";

export interface ICatalogo {
    id?: number | null;
    clave?: string | null;
    nombre?: string | null;
    descripcion?: string | null;
    tipoCatalogo?: Pick<ITipoCatalogo, 'id'> | null;
  }
  
  export type NewCatalogo = Omit<ICatalogo, 'id'> & { id: null };
  