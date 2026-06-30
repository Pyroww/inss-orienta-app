import React from 'react';
import { FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa';
import './elegibilidade.css'; // Importamos o CSS específico para a tela de elegibilidade
import BeneficiosGrid from '../../../components/elegibilidade/BeneficiosGrid';

// 1. Importando as 3 imagens do banner (ajuste os nomes conforme salvou no seu PC)
import bannerNormal from '../../../assets/elegibilidade/img_elegibilidade.png'; 
import bannerEscuro from '../../../assets/elegibilidade/img_elegibilidade_dark_mode.png'; 
import bannerAltoContraste from '../../../assets/elegibilidade/img_elegibilidade_alto_contraste.png'; 

// 2. Adicionamos o 'theme' aqui para a tela saber qual cor o usuário escolheu
export default function Elegibilidade({ theme, voltarParaHome, setActiveTab }) {
  
  // 3. Função inteligente que decide qual banner carregar
  const renderBanner = () => {
    if (theme === 'dark') return bannerEscuro;
    if (theme === 'high-contrast') return bannerAltoContraste;
    return bannerNormal; // Padrão
  };
  
  console.log("1. A tela Elegibilidade recebeu a função?", setActiveTab);
  return (
    <div className="elegibilidade-screen animate-fade">
      
      <div className="interno-header">
        <button className="btn-voltar" onClick={voltarParaHome}>
          <FaArrowLeft />
        </button>
        <h2>Benefícios</h2>
      </div>

      <div className="conteudo-scroll">
        
        {/* 4. O React chama a função e coloca o banner certo na hora! */}
        <div className="banner-beneficios">
          <img src={renderBanner()} alt="Banner Verificar Elegibilidade" className="banner-imagem" />
        </div>

        <h3 className="titulo-beneficios">
          Saiba se possui direito a algum dos benefícios do INSS
        </h3>

        <BeneficiosGrid theme={theme} setActiveTab={setActiveTab} />

        <hr className="divisor" />

        <div className="aviso-section">
          <div className="aviso-titulo">
            <FaExclamationTriangle className="aviso-icone" />
            <h2>AVISO</h2>
          </div>
          <p className="aviso-texto">
            As agências do INSS não são responsáveis por dar entrada no beneficio, desta forma, fica de responsabilidade do cidadão, entrar com os procedimentos iniciais pelo aplicativo MEU INSS
          </p>
        </div>

      </div>
    </div>
  );
}