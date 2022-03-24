import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home(){
    const [items, setItems] = useState([]);

    useEffect(()=>{
        const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
        promisse.then((result) => {
            setItems(result.data);
        });
    }, [])

    return(
        <div className="content-home">
            <div className="title-home">
                <h1>Selecione o filme</h1>    
            </div>
            <div className="movies">
                {items.map((movie) => (
                    <div className="movie" key={movie.id}>
                        <Link to={`/filme/${movie.id}`}>
                            <img src={movie.posterURL} alt=""></img>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}