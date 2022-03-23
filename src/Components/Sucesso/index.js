import { Link } from "react-router-dom";

export default function Sucesso(){
    return(
        <div className="content-sucesso">
            <h1>Aqui sua reserva foi feita com sucesso!</h1>
            <br></br>
            <Link to="/">
                Voltar a página inicial 
            </Link>
        </div>
    )
}