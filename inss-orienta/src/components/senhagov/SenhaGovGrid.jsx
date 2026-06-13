import React from 'react';
import './senhagovgrid.css'; 

// ==========================================
// IMPORTAÇÃO DAS IMAGENS (Ajuste os nomes se necessário)
// Deixando tudo apontado para a versão clara por enquanto!
// ==========================================
// 1. Entrar pelo Banco
import bancoNormal from '../../assets/senhagov/img_banco.png';
import bancoEscuro from '../../assets/senhagov/img_banco_dark_mode.png';
import bancoHC from '../../assets/senhagov/img_banco_alto_contraste.png';

// 2. SMS ou E-mail
import smsNormal from '../../assets/senhagov/img_sms.png';
import smsEscuro from '../../assets/senhagov/img_sms_dark_mode.png';
import smsHC from '../../assets/senhagov/img_sms_alto_contraste.png';

// 3. Reconhecimento Facial
import facialNormal from '../../assets/senhagov/img_facial.png';
import facialEscuro from '../../assets/senhagov/img_facial_dark_mode.png';
import facialHC from '../../assets/senhagov/img_facial_alto_contraste.png';

export default function SenhaGovGrid({ theme, setActiveTab }) {
  
  // Funções inteligentes para decidir qual imagem carregar para cada botão
  const getImgBanco = () => {
    if (theme === 'dark') return bancoEscuro;
    if (theme === 'high-contrast') return bancoHC;
    return bancoNormal;
  };

  const getImgSms = () => {
    if (theme === 'dark') return smsEscuro;
    if (theme === 'high-contrast') return smsHC;
    return smsNormal;
  };

  const getImgFacial = () => {
    if (theme === 'dark') return facialEscuro;
    if (theme === 'high-contrast') return facialHC;
    return facialNormal;
  };

  return (
    <div className="lista-categorias">
      
      {/* Botão 1: Banco */}
      <button className="categoria-card" onClick={() => setActiveTab('recuperarBanco')}>
        <img src={getImgBanco()} alt="Entrar pelo Banco" className="categoria-imagem" />
        <span>ENTRAR PELO<br/>BANCO</span>
      </button>

      {/* Botão 2: SMS ou E-mail */}
      <button className="categoria-card" onClick={() => setActiveTab('recuperarSms')}>
        <img src={getImgSms()} alt="Por Mensagem SMS" className="categoria-imagem" />
        <span>POR MENSAGEM<br/>(SMS) OU E-MAIL</span>
      </button>

      {/* Botão 3: Reconhecimento Facial */}
      <button className="categoria-card" onClick={() => setActiveTab('recuperarFacial')}>
        <img src={getImgFacial()} alt="Reconhecimento Facial" className="categoria-imagem" />
        <span>PELO RECONHECIMENTO<br/>FACIAL (A MAIS RÁPIDA)</span>
      </button>

    </div>
  );
}