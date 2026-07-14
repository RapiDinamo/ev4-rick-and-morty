import type { Personaje } from "../types/Elemento";

export const obtenerPersonajes = async (): Promise<Personaje[]> => {
  const respuesta = await fetch("https://rickandmortyapi.com/api/character");
  if (!respuesta.ok) throw new Error("No fue posible obtener los datos de la API");
  
  const data = await respuesta.json();
  return data.results.map((item: any) => ({
    id: item.id,
    nombre: item.name,
    imagen: item.image,
    especie: item.species,
    estado: item.status,
  }));
};