import React from 'react';
import './Agendamento.css';
import { 
  FaArrowLeft, 
  FaPhoneAlt, 
  FaLaptop, 
  FaExclamationCircle,
  FaCalendarPlus
} from 'react-icons/fa';

import bannerAgendamento from '../../assets/agendamento/banneragendamento.png'; // Descomente quando tiver a imagem
import bannerCalendario from '../../assets/agendamento/banneragendamento.png';
import bannerEscuro from '../../assets/agendamento/banneragendamento_dark_mode.png'; 
import bannerAltoContraste from '../../assets/agendamento/banneragendamento_Alto_contraste.png'; 

export default function Agendamento({ theme, setActiveTab }) {

  // Função inteligente que decide qual imagem carregar
    const renderLogo = () => {
      if (theme === 'dark') return bannerEscuro;
      if (theme === 'high-contrast') return bannerAltoContraste;
      return bannerCalendario; // Padrão
    };

  return (
    <div className="agendamento-container">
      {/* Cabeçalho */}
      <div className="interno-header">
        <button className="btn-voltar" onClick={() => setActiveTab('inicio')}>
          <FaArrowLeft />
        </button>
        <h2>Agendar Atendimento</h2>
      </div>

      {/* Conteúdo Rolável (Sem Flexbox para não amassar o banner!) */}
      <div className="agendamento-conteudo">
        
        {/* Banner Principal */}
        <div className="banner-area">
          <img src={renderLogo()} alt="Como agendar seu atendimento" />
        </div>

        <div className="texto-introducao">
          <h3>Evite perder a viagem!</h3>
          <p>
            A maioria dos serviços do INSS exige <strong>agendamento prévio</strong>. Chegar na agência sem agendar significa que você corre o risco de não conseguir atendimento no mesmo dia.
          </p>
        </div>

        {/* Canais de Agendamento */}
        <div className="canais-box">
          
          {/* Canal 1: Meu INSS */}
          <div className="canal-card">
            <div className="canal-icone app">
              <FaLaptop />
            </div>
            <div className="canal-detalhes">
              <h4>Aplicativo ou Site Meu INSS</h4>
              <p>A forma mais rápida. Basta entrar com sua conta Gov.br, clicar em "Novo Pedido" e escolher o serviço desejado, o dia e a agência.</p>
            </div>
          </div>

          {/* Canal 2: Telefone 135 */}
          <div className="canal-card">
            <div className="canal-icone telefone">
              <FaPhoneAlt />
            </div>
            <div className="canal-detalhes">
              <h4>Central 135 (Telefone)</h4>
              <p>Ligue para o número <strong>135</strong> do seu celular ou telefone fixo. A ligação é de graça! O atendimento funciona de segunda a sábado, das 7h às 22h.</p>
            </div>
          </div>

        </div>

        {/* Regras de Ouro na Agência */}
        <div className="regras-agencia">
          <div className="regras-header">
            <FaCalendarPlus className="icone-regras" />
            <h4>O que fazer no dia agendado?</h4>
          </div>
          <ul className="lista-regras">
            <li>Chegue com apenas <strong>15 minutos de antecedência</strong> do seu horário (não precisa chegar de madrugada!).</li>
            <li>Leve documento de identidade original com foto.</li>
            <li>Se for perícia médica, leve laudos, exames e receitas atualizados originais.</li>
            <li>Leve o número do protocolo do seu agendamento (anotado ou no celular).</li>
          </ul>
        </div>

        {/* Aviso Importante */}
        <div className="aviso-alerta mt-3">
          <div className="aviso-header">
            <FaExclamationCircle className="icone-alerta" />
            <h4>Serviços sem Agendamento</h4>
          </div>
          <p>Apenas serviços rápidos, como tirar dúvidas simples (orientação e informação), costumam ser atendidos na hora pegando a senha na recepção. O restante exige data marcada.</p>
        </div>

      </div>
    </div>
  );
}