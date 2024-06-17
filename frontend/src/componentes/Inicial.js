import React from "react";
import "./css/Inicial.css";

const Inicial = () => {
  return (
    <div className="inicio">
      <div className="imagem-container">
        <img src="./imagem.png" alt="Alimentador Programável PET" className="imagem-lateral" />
      </div>
      <div className="descricao">
        <h1>
          <span className="primeira-letra">A</span>limentador{" "}
          <span className="primeira-letra">P</span>rogramável PET
        </h1>
        <p className="descricao-texto">
          Conheça o projeto inovador que automatiza a tarefa de alimentar seu
          pet. Com ele, você pode agendar e controlar a alimentação do seu
          amigo de estimação através de um aplicativo, de qualquer lugar do
          mundo. Ofereça ao seu pet uma rotina mais saudável e conveniente,
          enquanto desfruta de tranquilidade com nosso sistema avançado e
          acessível.
        </p>
      </div>
    </div>
  );
};

export default Inicial;
