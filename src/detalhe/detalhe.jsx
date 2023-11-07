import { useParams } from "react-router-dom"

export default function Detalhe(){
    const { id } = useParams();
        return( 
        <div>
            <h1>Seja bem vindo {id}</h1>
        </div>
    );
}