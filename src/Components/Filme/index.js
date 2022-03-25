import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Filme() {
    const { idFilme } = useParams();
    const [times, setTimes] = useState([]);

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)

        promisse.then((result) => {
            setTimes(result.data.days);
        });
    }, [])

    return (
        <div className="content-filme">
            <div className="title">
                <h1>Selecione o horário</h1>
            </div>
            <div className="horarios">
                {times.map((time) => {
                    return (
                        <div className="sessao" key={time.id}>
                            <div className="titulo">
                                <p>{time.weekday} - {time.date}</p>
                            </div>
                            <div className="horarios">
                                {time.showtimes.map((showtime) => {
                                    return(
                                        <div key={showtime.id} className="horario">
                                            <Link to={`/sessao/${showtime.id}`}>
                                                <h1>{showtime.name}</h1>
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>

    )
}