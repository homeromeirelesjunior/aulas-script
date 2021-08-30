import React from "react"
import Title from "../Title/Title"

import './Cursos.css'
import CursosHeader from './CursosHeader.js'

export default function Cursos() {
    return (
        <>
            <CursosHeader />
            <Title texto="Seção de Cursos!" />
            <div className="cursos"></div>        
        </>
    )
}