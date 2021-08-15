import React from 'react'
import './Sections.css';

export default function Sections() {
  return (
    <div>
      <div className="menu">
        <nav className="navMenu">
          <ul>
            <li><a href="#inicio">Home</a></li>
            <li><a href="#cursos">Cursos</a></li>
            <li><a href="#contatos">Contatos</a></li>
            <li><a href="#parceiros">Parceiros</a></li>
            <li><a href="#missao">Missão</a></li>
            <li><a href="#sobre">Sobre</a></li>
          </ul>
        </nav>
      </div>

      <section id="inicio">
        <h2>Inicio</h2>
      </section>

      <section id="cursos">
        <h3>Cursos</h3>
      </section>

      <section id="contatos">
        <h3>Contatos</h3>
      </section>

      <section id="parceiros">
        <h3>Parceiros</h3>
      </section>

      <section id="missao">
        <h3>Missão</h3>
      </section>

      <section id="sobre">
        <h3>Sobre</h3>
      </section>

      <a className="irTopo" href=".menu">Topo</a>
      <a className="irInicio" href="#inicio">Início</a>
      <a className="irCursos" href="#cursos">Cursos</a>
      <a className="irContatos" href="#contatos">Contatos</a>

      <footer>
        <h3>Rodapé</h3>
      </footer>

    </div>
  );
}

/* Seções:
1 - inicio/header
2 - cursos
3 - contatos
4 - parceiros
5 - missão
6 - rodapé/footer
*/