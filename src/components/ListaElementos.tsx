import type { Personaje } from "../types/Elemento";
import ElementoCard from "./ElementoCard";

type Props = { personajes: Personaje[]; agregarFavorito: (p: Personaje) => void; };

export default function ListaElementos({ personajes, agregarFavorito }: Props) {
  if (personajes.length === 0) return <p>No existen coincidencias.</p>;
  return (
    <div className="grid">
      {personajes.map((p) => <ElementoCard key={p.id} personaje={p} agregarFavorito={agregarFavorito} />)}
    </div>
  );
}