export interface ITipoCatalogo {
    id?: number;
    nombre?: string | null;
    descripcion?: string | null;
  }
  
  export type NewTipoCatalogo = Omit<ITipoCatalogo, 'id'> & { id: null };
  