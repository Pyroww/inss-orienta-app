import React from 'react';
import './SenhaGov.css';
import { 
  FaArrowLeft, 
  FaExclamationTriangle,
  FaShieldAlt
} from 'react-icons/fa';

// Banner (Opcional, descomente quando tiver a imagem)
import bannerSenhaGov from '../../assets/senhagov/banner.jpg'; 

// ==========================================
// IMPORTAÇÃO DAS IMAGENS DOS BOTÕES
// ==========================================
// 1. Entrar pelo Banco (Usando a mesma imagem para todos por enquanto)
import bancoNormal from '../../assets/senhagov/img_banco.png';
import bancoEscuro from '../../assets/senhagov/img_banco.png'; 
import bancoHC from '../../assets/senhagov/img_banco.png'; 

// 2. SMS ou E-mail (Usando a mesma imagem para todos por enquanto)
import smsNormal from '../../assets/senhagov/img_sms.png';
import smsEscuro from '../../assets/senhagov/img_sms.png'; 
import smsHC from '../../assets/senhagov/img_sms.png'; 

// 3. Reconhecimento Facial (Usando a mesma imagem para todos por enquanto)
import facialNormal from '../../assets/senhagov/img_facial.png';
import facialEscuro from '../../assets/senhagov/img_facial.png'; 
import facialHC from '../../assets/senhagov/img_facial.png'; 

export default function SenhaGov({ theme, setActiveTab }) {
  
  // Funções inteligentes de Tema
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
    <div className="senhagov-container">
      {/* Cabeçalho Interno */}
      <div className="interno-header">
        <button className="btn-voltar" onClick={() => setActiveTab('inicio')}>
          <FaArrowLeft />
        </button>
        <h2>Senha GOV</h2>
      </div>

      {/* Conteúdo Rolável */}
      <div className="senhagov-conteudo">
        
        {/* Banner Placeholder */}
        <div className="banner-area">
          <img src={bannerSenhaGov} alt="Como recuperar a senha da conta gov.br" />
        </div>

        <div className="texto-introducao">
          <h3>Como Recuperar sua Senha do Gov.br</h3>
          <p>
            Esqueceu a senha e não consegue acessar o Meu INSS? Não se preocupe, na maioria das vezes não é preciso ir até uma agência. Veja as formas mais rápidas:
          </p>
        </div>

        {/* 👇 NOVA GRADE DE IMAGENS (Estilo Elegibilidade) 👇 */}
        <div className="lista-categorias">
          
          <button className="categoria-card" onClick={() => {/* Ação Futura */}}>
            <img src={getImgBanco()} alt="Entrar pelo Banco" className="categoria-imagem" />
            <span>ENTRAR PELO<br/>BANCO</span>
          </button>

          <button className="categoria-card" onClick={() => {/* Ação Futura */}}>
            <img src={getImgSms()} alt="Por Mensagem SMS" className="categoria-imagem" />
            <span>POR MENSAGEM<br/>(SMS) OU E-MAIL</span>
          </button>

          <button className="categoria-card" onClick={() => {/* Ação Futura */}}>
            <img src={getImgFacial()} alt="Reconhecimento Facial" className="categoria-imagem" />
            <span>PELO RECONHECIMENTO<br/>FACIAL (A MAIS RÁPIDA)</span>
          </button>

        </div>
        {/* 👆 FIM DA GRADE 👆 */}

        {/* Seção de Avisos Mantida */}
        <div className="secao-avisos">
          <div className="aviso-box alerta">
            <div className="aviso-cabecalho">
              <FaShieldAlt className="icone-aviso" />
              <h4>Segurança da Senha</h4>
            </div>
            <p>Anote sua senha nova em um papel e guarde na gaveta. Nunca passe essa senha para estranhos ou por WhatsApp!</p>
          </div>

          <div className="aviso-box inss">
            <div className="aviso-cabecalho">
              <FaExclamationTriangle className="icone-aviso" />
              <h4>Aviso Importante</h4>
            </div>
            <p>O INSS <strong>não corta benefício de surpresa</strong>! O cidadão sempre é avisado oficialmente. Cuidado com golpes.</p>
          </div>
        </div>

      </div>
    </div>
  );
}