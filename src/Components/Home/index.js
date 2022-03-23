import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div className="content-home">
            <h1>Aqui é a primeira página</h1>
            <Link to="/filme">
                Reservar sessão
            </Link>
            <br></br>
            <Link to="/sucesso">
                Página sucesso
            </Link>        
        </div>
    )
}