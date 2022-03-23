import { BrowserRouter, Routes, Route } from "react-router-dom";import React from "react";

import Top from "./../Top/"
import Home from "./../Home/"
import Filme from "./../Filme/"
import Sucesso from "./../Sucesso/"

export default function App(){
    return(
        <BrowserRouter>
            <Top/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/filme" element={<Filme/>}/>
                <Route path="/sucesso" element={<Sucesso/>}/>
            </Routes>
        </BrowserRouter>
    )
}