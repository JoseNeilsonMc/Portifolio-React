import React from 'react'
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiSass,
  DiReact,
} from "react-icons/di";

import "../styles/Components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML", description:"HTML5: a linguagem base da web, estrutura conteúdo. Tags e elementos criam páginas interativas, formando a espinha dorsal da internet.", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", description:"CSS3: poderoso e estiloso, dá vida ao HTML. Transições suaves, animações elegantes - é a camada de estilo para a experiência visual.", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", description:"JavaScript: a linguagem dinâmica, impulsiona interatividade. Client-side ou server-side, manipula DOM, trazendo páginas à vida com lógica.", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js",description:"Node.js: revolucionando servidores, é JavaScript no backend. Rápido e escalável, suporta aplicações em tempo real. O futuro da programação.", icon: <DiNodejsSmall /> },
  { id: "sass", name: "Sass",description:"Sass: o pré-processador CSS, simplifica estilos. Variáveis, mixins, aninhamento - torna o código mais limpo, eficiente, fácil de manter.", icon: <DiSass /> },
  { id: "react", name: "React",description:"React: a biblioteca declarativa, constrói UIs dinâmicas. Componentes reutilizáveis, virtual DOM - uma revolução na criação de interfaces modernas.", icon: <DiReact /> },
];

 const TechnologiesContainer = () => {
  return (
    
         <section className="technologies-container">
         <h2>Tecnologias</h2>
          <div className="technologies-grid">
           {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
           {tech.icon}
          <div className="technology-info">
           <p>{ tech.description}</p>
          </div>
          </div>
        ))}
      </div>
    </section>
  
  )
}
export default TechnologiesContainer;