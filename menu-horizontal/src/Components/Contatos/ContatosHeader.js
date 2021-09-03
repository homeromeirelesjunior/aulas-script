import React from "react";
import { Link } from "react-router-dom";
import '../Header/Header.css'

export default function Contatos() {
    return (
        <>
            <header className="menu2"> 
            <nav className="navMenu2">
                <ul>
                    <li><Link to="/" > Voltar</Link></li>
                    <li><Link to="/contatos" > Telefone</Link></li>
                    <li><Link to="/contatos" > Email</Link></li>
                    <li><Link to="/contatos" > Facebook</Link></li>
                    <li><Link to="/contatos" > WhatsApp</Link></li>
                    <li><Link to="/contatos" > Instagram</Link></li>
                    <li><Link to="/contatos" > Twitter</Link></li>
                    <li><Link to="/contatos" > Linkedin</Link></li>
                    <li><Link to="/contatos" > Sinal de Fumaça</Link></li>
                </ul>

            </nav>

            </header>
        </>
    )
}