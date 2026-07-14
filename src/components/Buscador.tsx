type Props = { textoBusqueda: string; setTextoBusqueda: (t: string) => void; };

export default function Buscador({ textoBusqueda, setTextoBusqueda }: Props) {
  return (
    <div className="buscador">
      <input type="text" placeholder="Buscar personaje..." value={textoBusqueda} onChange={(e) => setTextoBusqueda(e.target.value)} />
    </div>
  );
}