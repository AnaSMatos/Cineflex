import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Top from "./../Top/"
import Home from "./../Home/"
import Filme from "./../Filme/"
import Sessao from "./../Sessao/"
import Sucesso from "./../Sucesso/"

export default function App(){
    const [post, setPost] = React.useState({
        ids: [],
        name: "",
        cpf: ""
    })

    return(
        <BrowserRouter>
            <Top/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/filme/:idFilme" element={<Filme/>}/>
                <Route path="/sessao/:idSessao" element={<Sessao post={post} setPost ={setPost}/>}/>
                <Route path="/sucesso" element={<Sucesso/>}/>
            </Routes>
        </BrowserRouter>
    )
}