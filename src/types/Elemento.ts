export type Personaje = {
  id: number;
  nombre: string;
  imagen: string;
  especie: string;
  estado: string;
};

export type Favorito = Personaje & {
  notaPersonal: string; 
};