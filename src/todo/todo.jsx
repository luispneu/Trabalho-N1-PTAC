import { useState } from "react";
import { Link } from "react-router-dom";
import ima2 from './ima2.png';
import './style.css';

export default function Todo() {
  const [lista, setLista] = useState([]);
  const [id, setid] = useState(1);
  const [herois, setHerois] = useState("");
  const [poder, setPoder] = useState("")
  function salvar(e) {
    e.preventDefault();
    setLista([...lista, { herois: herois, id: id, poder: poder}]);
    setid(id + 1);
  }
  const remover = (id) => {
    const listaAux = [];
    lista.map((heroi) => {
      if (heroi.id !== id) {
        listaAux.push(heroi);
      }
    })
    setLista(listaAux);
  };
  return (
    <div className="peblou">
      <h1>Herois</h1>
      <Link to="/home">
        <img src={ima2} alt="Imagem" width="100" height="50"></img>
      </Link>
      <form onSubmit={salvar}>
        <input onChange={(e) => setHerois(e.target.value)} type="text" />
        <input onChange={(e) => setPoder(e.target.value)} type="number" />
        <button>Encrementa</button>
      </form>
      {lista.map((herois) => (
        <div key={herois.id}>
          <p>{herois.id}</p>
          <p>{herois.herois}</p>
          <p>{herois.poder}</p>
          <button onClick={(e) => remover(herois.id)}>Apagar</button>
        </div>
      ))}
    </div>
  );
}
