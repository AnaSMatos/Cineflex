import { useLocation } from "react-router"


export default function Sucesso(){
    
    const location = useLocation();
    const {data, movie, time, day} = location.state;


    return(
        <div className="content-sucesso">
            <div className="sucesso-titulo">
                <h1>Pedido feito <br></br> com sucesso!</h1>
            </div>
            <div className="resultados">
                <h1>Filme e sessao</h1>
                <p>{movie}</p>
                <p>{day} {time}</p>
            </div>
            <div className="resultados">
                <h1>Ingressos</h1>
                {data.ingressos.map((assento, index) => {
                    return(
                        <p key={index}>Assento {assento}</p>
                    )
                })}
            </div>
            <div className="resultados">
                <h1>Comprador</h1>
                <p>Nome: {data.comprador.nome}</p>
                <p>CPF: {data.comprador.cpf}</p>
            </div>
        </div>
    )
}