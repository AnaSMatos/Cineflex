import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Sessao(){
    const {idSessao} = useParams();
    const [assentos, setAssentos] = useState([]);

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)

        promisse.then((result) => {
            setAssentos(result.data.seats);
        });
    }, [])

    return(
        <div className="content-sessao">
            <div className="title">
                <h1>Selecione o(s) assento(s)</h1>
            </div>
            <div className="assentos">
                {assentos.map((assento) => {
                    return(
                        <button className="assento" key={assento.id}>
                            <p>{assento.name}</p>
                        </button>
                    )
                })}
            </div>
            <div className="legendas">
                <div className="legenda">
                    <div className="selecionado"><p></p></div>
                    Selecionado
                </div>
                <div className="legenda">
                    <div className="disponivel"></div>
                    Disponível
                </div>
                <div className="legenda">
                    <div className="indisponivel"></div>
                    Indisponível
                </div>
            </div>
            
            <div className="inputs">
                <p>Nome do comprador:</p>
                <input type="text" placeholder="Digite seu nome..."></input>
                <p>CPF do comprador:</p>
                <input type="text" placeholder="Digite seu CPF..."></input>
            </div>

            <Link to={"/sucesso"}><p>Reservar assento(s)</p></Link>
        </div>
    )
}