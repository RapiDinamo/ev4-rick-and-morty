import type { Favorito } from "../types/Elemento";

type Props = { favoritos: Favorito[]; eliminarFavorito: (id: number) => void; actualizarNota: (id: number, nota: string) => void; };

export default function Favoritos({ favoritos, eliminarFavorito, actualizarNota }: Props) {
  if (favoritos.length === 0) return <p>No tienes favoritos guardados.</p>;
  return (
    <div className="lista-favoritos">
      {favoritos.map((fav) => (
        <div key={fav.id} className="fav-item">
          <img src={fav.imagen} alt={fav.nombre} className="fav-img"/>
          <div>
            <h4>{fav.nombre}</h4>
            <input type="text" value={fav.notaPersonal} onChange={(e) => actualizarNota(fav.id, e.target.value)} placeholder="Agregar nota..." />
            <button onClick={() => eliminarFavorito(fav.id)}>❌</button>
          </div>
        </div>
      ))}
    </div>
  );
}