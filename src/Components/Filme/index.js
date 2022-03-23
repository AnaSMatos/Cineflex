import { Link } from "react-router-dom";

export default function Filme(){
    return(
        <div className="content-filme">
            <h1>Aqui vc escolhe a sua sessao</h1>
            <br></br>
            <Link to="/">
                Voltar a página inicial 
            </Link>
        </div>
        
    )
}