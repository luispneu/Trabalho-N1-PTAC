import { useState } from "react";
import { Link } from "react-router-dom";
import './style.css';
import ima1 from './ima1.png';

export default function Home() {
    const [name, setName] = useState('');

    return (
        <div className="defe">
            <h1>Ben 10</h1>
            <Link to="/todo">
                <img src={ima1} alt="Imagem" width="100" height="100" />
            </Link>
            <p>{name}</p>
            <input type="text" onChange={(e) => { setName(e.target.value) }} />
        </div>
    )
}
