import React from 'react';
import './ProvaDeVida.css';
import { FaArrowLeft, FaCheckCircle, FaInfoCircle } from 'react-icons/fa';


import bannerProvaVida from '../../assets/provavida/provavida.png';
import bannerEscuro from '../../assets/provavida/provavida_dark_mode.png'; 
import bannerAltoContraste from '../../assets/provavida/provavida_alto_contraste.png'; 

export default function ProvaDeVida({ theme, setActiveTab }) {

  // Função inteligente que decide qual imagem carregar
    const renderLogo = () => {
      if (theme === 'dark') return bannerEscuro;
      if (theme === 'high-contrast') return bannerAltoContraste;
      return bannerProvaVida; // Padrão
    };

  return (
    <div className="provavida-container">
      {/* Cabeçalho Interno Blindado */}
      <div className="interno-header">
        <button className="btn-voltar" onClick={() => setActiveTab('inicio')}>
          <FaArrowLeft />
        </button>
        <h2>Prova de Vida</h2>
      </div>

      {/* Área de rolagem exclusiva */}
      <div className="provavida-conteudo">
        
        {/* Banner */}
        <div className="banner-area">
          <img src={renderLogo()} alt="Prova de Vida Automática" />
          
        </div>

        <div className="texto-principal">
          <h3>A Prova de Vida agora é Automática!</h3>
          
          <p className="destaque-tranquilidade">
            <strong>Fique tranquilo(a)!</strong> O senhor ou a senhora <strong>não precisa mais sair de casa</strong> apenas para fazer a Prova de Vida.
          </p>

          <p>
            A regra mudou: agora é o INSS que faz o cruzamento de dados. Nós verificamos se você está vivo através de outras ações que você já faz no seu dia a dia.
          </p>
        </div>

        {/* Lista de Ações que contam como Prova de Vida */}
        <div className="acoes-box">
          <div className="acoes-header">
            <FaCheckCircle className="icone-check" />
            <h4>O que conta como Prova de Vida?</h4>
          </div>
          <p className="acoes-subtexto">Se você fizer qualquer uma das coisas abaixo, sua Prova de Vida estará garantida:</p>
          
          <ul className="lista-acoes">
            <li>Votar nas eleições;</li>
            <li>Tomar vacina ou ser atendido no SUS;</li>
            <li>Renovar ou tirar a Carteira de Identidade, Motorista (CNH) ou Passaporte;</li>
            <li>Fazer empréstimo consignado usando biometria (digital ou facial);</li>
            <li>Acessar o aplicativo Meu INSS com selo Ouro ou Prata.</li>
          </ul>
        </div>

        {/* Aviso final */}
        <div className="aviso-informativo">
          <FaInfoCircle className="icone-info" />
          <p>Se o INSS não conseguir achar nenhum dado seu ao longo de 10 meses, você receberá uma notificação no aplicativo Meu INSS ou do seu banco. <strong>Só vá à agência se for convocado!</strong></p>
        </div>

      </div>
    </div>
  );
}