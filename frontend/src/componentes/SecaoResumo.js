import React from 'react';
import './css/SecaoResumo.css';

const SecaoResumo = () => {
  return (
    <div className="inicio">
      <div className="descricao">
        <h1>
          <span className="primeira-letra">A</span>limentador{" "}
          <span className="primeira-letra">P</span>rogramável PET
        </h1>
        <h2>Projeto SENAC-RS / Pelotas</h2>
        <p>
          O Alimentador Programável PET é uma solução inovadora desenvolvida por Rafael Baade, Franklin Medeiros, John Lennon e Leandro Quevedo, que visa modernizar a maneira como cuidamos dos nossos animais de estimação. 
          Este dispositivo automatiza completamente a tarefa de alimentação para pets, como cães, gatos e pássaros, eliminando preocupações diárias dos donos e garantindo que os animais sejam alimentados de forma regular e precisa.
          <br/><br/>
          Operado via internet, o alimentador pode ser programado e controlado de qualquer parte do mundo através de uma interface simples e intuitiva. Essa conectividade permite aos usuários ajustar horários de alimentação, controlar porções e monitorar o consumo de alimento, tudo isso através de seus dispositivos móveis.
          <br/><br/>
          Além de oferecer conveniência e controle, o Alimentador Programável PET é projetado para ser economicamente acessível e de baixa manutenção. Isso o torna uma opção viável para uma ampla gama de famílias.
          <br/><br/>
          Este projeto não apenas representa um avanço significativo na tecnologia pet care, mas também reflete um compromisso com a inovação e a adaptação às necessidades emergentes dos consumidores modernos.
        </p>
      </div>
      <div className="imagem" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/imagem.png'})` }}>
        {/* A imagem agora é carregada corretamente a partir da pasta public */}
      </div>
    </div>
  );
};

export default SecaoResumo;
