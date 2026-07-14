import { useState, useEffect } from "react";
import type { Personaje, Favorito } from "./types/Elemento";
import { obtenerPersonajes } from "./services/api";
import Buscador from "./components/Buscador";
import ListaElementos from "./components/ListaElementos";
import Favoritos from "./components/Favoritos";
import "./App.css";

export default function App() {
  const [datos, setDatos] = useState<Personaje[]>([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");
  const [textoBusqueda, setTextoBusqueda] = useState("");
  
  const [favoritos, setFavoritos] = useState<Favorito[]>(() => {
    const guardados = localStorage.getItem("rick_morty_favs");
    return guardados ? JSON.parse(guardados) : [];
  });

  useEffect(() => { localStorage.setItem("rick_morty_favs", JSON.stringify(favoritos)); }, [favoritos]);

  useEffect(() => {
    const cargarDatos = async () => {
      try { setCargando(true); setError(""); setDatos(await obtenerPersonajes()); }
      catch (err) { setError(err instanceof Error ? err.message : "Error"); }
      finally { setCargando(false); }
    };
    cargarDatos();
  }, []);

  const agregarFavorito = (personaje: Personaje) => {
    if (!favoritos.some((fav) => fav.id === personaje.id)) {
      setFavoritos([...favoritos, { ...personaje, notaPersonal: "" }]);
    }
  };

  const actualizarNota = (id: number, nota: string) => {
    setFavoritos(favoritos.map((fav) => (fav.id === id ? { ...fav, notaPersonal: nota } : fav)));
  };

  const eliminarFavorito = (id: number) => setFavoritos(favoritos.filter((fav) => fav.id !== id));

  const datosFiltrados = datos.filter((p) => p.nombre.toLowerCase().includes(textoBusqueda.toLowerCase()));

  return (
    <div className="contenedor">
      <header><h1>Rick and Morty App</h1></header>
      <main className="layout">
        <section>
          <Buscador textoBusqueda={textoBusqueda} setTextoBusqueda={setTextoBusqueda} />
          {cargando && <p>Cargando...</p>}
          {error && <p className="error">{error}</p>}
          {!cargando && !error && <ListaElementos personajes={datosFiltrados} agregarFavorito={agregarFavorito} />}
        </section>
        <aside>
          <h2>Tus Favoritos</h2>
          <Favoritos favoritos={favoritos} eliminarFavorito={eliminarFavorito} actualizarNota={actualizarNota} />
        </aside>
      </main>
    </div>
  );
}