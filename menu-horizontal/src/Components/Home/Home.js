import React from "react"
import Title from "../Title/Title.js"
import Logo from "../../Imagens/LogoFatec.jpeg"

import './Home.css'

export default function Home() {
    return (
        <>
            <Title texto="Formulário inicial do projeto!" />
            <div className="inicio">
                <button id="confirmar">Confirmar</button>
                <button id="salvar" onClick={() => {alert('Clicado')}}>Salvar</button>
                <figure>
                    <img id="logo" src={Logo} align="center" alt="Logo Fatec" />
                </figure>
            </div>

        </>
    )
}