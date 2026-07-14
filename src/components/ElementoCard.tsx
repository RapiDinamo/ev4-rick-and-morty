import type { Personaje } from "../types/Elemento";

type Props = { personaje: Personaje; agregarFavorito: (p: Personaje) => void; };

export default function ElementoCard({ personaje, agregarFavorito }: Props) {
  return (
    <article className="card">
      <img src={personaje.imagen} alt={personaje.nombre} />
      <div className="card-info">
        <h3>{personaje.nombre}</h3>
        <p>Especie: {personaje.especie}</p>
        <p>Estado: {personaje.estado}</p>
        <button onClick={() => agregarFavorito(personaje)}>⭐ Favorito</button>
      </div>
    </article>
  );
}