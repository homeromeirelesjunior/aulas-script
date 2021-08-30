import React from "react"
import Title from "../Title/Title.js"
import ContatosHeader from '../Contatos/ContatosHeader.js'

import './Contatos.css'

export default function Contatos() {
    return (
        <>
            <ContatosHeader />
            <Title texto="Seção de Contatos!" />
            <div className="contatos"></div>
        </>
    )
}