import { Link } from "react-router-dom";

export default function Sucesso(){
    return(
        <div className="content-sucesso">
            <div className="sucesso-titulo">
                <h1>Pedido feito <br></br> com sucesso!</h1>
            </div>
            <div className="resultados">
                <h1>Filme e sessao</h1>
            </div>
            <div className="resultados">
                <h1>Ingressos</h1>
            </div>
            <div className="resultados">
                <h1>Comprador</h1>
            </div>
        </div>
    )
}