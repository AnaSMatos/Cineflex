import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Sessao({post, setPost}){
    const {idSessao} = useParams();
    const [assentos, setAssentos] = useState([]);
    const [info, setInfo] = useState([])
    const [day, setDay] = useState([]);
    const [movie, setMovie] = useState([])

    
    
    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        
        promisse.then((result) => {
            setAssentos(result.data.seats);
            setInfo(result.data)
            setDay(result.data.day)
            setMovie(result.data.movie)
        });
    }, [])

    const [finalScreen, setFinalScreen] = useState({ingressos:[], comprador:[{nome:"", cpf:""}]})
    
    function tratarClick(e){
        if (e.target.parentNode.className === "assento disponivel"){
            e.target.parentNode.className = "assento selecionado";
            post.ids.push(parseInt(e.target.parentNode.value))
            finalScreen.ingressos.push(parseInt(e.target.innerText));
        }else if(e.target.parentNode.className === "assento indisponivel"){
            alert( "Esse assento não está disponível");
        }else{
            e.target.parentNode.className = "assento disponivel";
            let index1 = post.ids.indexOf(e.target.parentNode.value)
            let index2 = finalScreen.ingressos.indexOf(parseInt(e.target.innerText))
            if (index1 > -1 && index2 > -1) {
                post.ids.splice(index1, 1);
                finalScreen.ingressos.splice(index2, 1);
            }
        }       
    }

    const navigate = useNavigate();
    
    function tratarSubmit(e) {
        e.preventDefault();
        post.name = (e.target.name.value) 
        post.cpf = (e.target.cpf.value)
        finalScreen.comprador.nome = (e.target.name.value)
        finalScreen.comprador.cpf = (e.target.cpf.value)
        
        const promisse = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", {...post})
        promisse.then(response => {
            console.log("Sucesso")
            navigate('/sucesso', {state:{data:finalScreen, movie:movie.title, time:info.name, day:day.date}})
        })
    }

    return(
        <div className="content-sessao">
            <div className="title">
                <h1>Selecione o(s) assento(s)</h1>
            </div>
            <div className="assentos"> 
                {assentos.map((assento) => {
                    return(
                        <button className={assento.isAvailable ? "assento disponivel" : "assento indisponivel"}
                        key={assento.id} value={assento.id}
                        >
                            <p onClick={tratarClick}>{assento.name}</p>
                        </button>
                    )
                })}
            </div>
            <div className="legendas">
                <div className="legenda">
                    <div className="selecionado bottom"></div>
                    Selecionado
                </div>
                <div className="legenda">
                    <div className="disponivel bottom"></div>
                    Disponível
                </div>
                <div className="legenda">
                    <div className="indisponivel bottom"></div>
                    Indisponível
                </div>
            </div>
            
            <div className="inputs">
                <form onSubmit={tratarSubmit}>
                    <label htmlFor="name">Nome do comprador:</label>
                    <input name="name" type="text" placeholder="Digite seu nome..." required></input>
                    <br></br>
                    <label htmlFor="cpf">CPF do comprador:</label>
                    <input name="cpf" type="text" placeholder="Digite seu CPF..." required></input>
                    <button><p>Reservar assento(s)</p></button>
                </form>
            </div>

            <footer>
                <div className="img-footer">
                    <img src={movie.posterURL} alt=""></img>
                </div>
                <div className="infos-footer">
                    <p>{movie.title}</p>
                    <p>{day.weekday} - {info.name}</p>
                </div>
            </footer>
        </div>
    )
}