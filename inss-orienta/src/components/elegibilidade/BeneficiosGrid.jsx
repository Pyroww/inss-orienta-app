import React from 'react';
import './beneficiogrid.css'; // Importamos o CSS específico para a tela de elegibilidade
// ==========================================
// IMPORTAÇÃO DAS IMAGENS (Salve na pasta assets)
// ==========================================
// 1. Aposentadoria Geral
import apoNormal from '../../assets/elegibilidade/img_aposentadoria_geral_elegibilidade.png';
import apoEscuro from '../../assets/elegibilidade/img_aposentadoria_geral_dark_mode.png';
import apoHC from '../../assets/elegibilidade/img_aposentadoria_geral_alto_contraste_amarelo.png';

// 2. Auxílios Suporte e Proteção
import auxNormal from '../../assets/elegibilidade/img_auxilio_Assistencial_elegibilidade.png';
import auxEscuro from '../../assets/elegibilidade/img_auxilio_assistencial_dark_mode.png';
import auxHC from '../../assets/elegibilidade/img_auxilio_assistencial_alto_contraste.png';

// 3. Benefícios Assistenciais
import assNormal from '../../assets/elegibilidade/img_Beneficios_assistenciais_elegibilidade.png';
import assEscuro from '../../assets/elegibilidade/img_beneficios_assistenciais_dark_mode.png';
import assHC from '../../assets/elegibilidade/img_beneficios_assistenciais_alto_contraste.png';

export default function BeneficiosGrid({ theme, setActiveTab }) {
  console.log("O Grid recebeu a função?", setActiveTab);
  // Funções inteligentes para decidir qual imagem carregar para cada botão
  const getImgAposentadoria = () => {
    if (theme === 'dark') return apoEscuro;
    if (theme === 'high-contrast') return apoHC;
    return apoNormal;
  };

  const getImgAuxilios = () => {
    if (theme === 'dark') return auxEscuro;
    if (theme === 'high-contrast') return auxHC;
    return auxNormal;
  };

  const getImgAssistenciais = () => {
    if (theme === 'dark') return assEscuro;
    if (theme === 'high-contrast') return assHC;
    return assNormal;
  };

  return (
    <div className="lista-categorias">
      
      {/* Botão 1: Aposentadoria */}
      <button className="categoria-card" onClick={() => setActiveTab('aposentadoriaGeral')}>
        <img src={getImgAposentadoria()} alt="Aposentadoria Geral" className="categoria-imagem" />
        <span>APOSENTADORIA<br/>GERAL</span>
      </button>

      {/* Botão 2: Auxílios */}
      <button className="categoria-card">
        <img src={getImgAuxilios()} alt="Auxílios Suporte e Proteção" className="categoria-imagem" />
        <span>AUXÍLIOS<br/>SUPORTE E PROTEÇÃO</span>
      </button>

      {/* Botão 3: Assistenciais */}
      <button className="categoria-card">
        <img src={getImgAssistenciais()} alt="Benefícios Assistenciais" className="categoria-imagem" />
        <span>BENEFÍCIOS<br/>ASSISTENCIAIS</span>
      </button>

    </div>
  );
}