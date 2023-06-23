export interface ITipoEstatus {
    id?: number;
    nombre?: string | null;
    descripcion?: string | null;
  }
  
  export type NewTipoEstatus = Omit<ITipoEstatus, 'id'> & { id: null };
  