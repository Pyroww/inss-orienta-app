import React, { useState } from 'react'; // Importamos o useState aqui
import { FaSearch } from 'react-icons/fa'; // Importamos o ícone da lupa
import ServicesGrid from '../../components/home/ServicesGrid';
import logoNormal from '../../assets/home/logo-cabecalho-v2.png';
import logoEscura from '../../assets/home/logo-cabecalho-v2_modo_escuro.png'; 
import logoAltoContraste from '../../assets/home/logo-cabecalho-v2_modo_AltoContraste.png'; 

export default function Home({ theme, setActiveTab }) {
  // Estado que guarda o que o usuário está digitando na pesquisa
  const [textoPesquisa, setTextoPesquisa] = useState('');

  // Função inteligente que decide qual imagem carregar
  const renderLogo = () => {
    if (theme === 'dark') return logoEscura;
    if (theme === 'high-contrast') return logoAltoContraste;
    return logoNormal; // Padrão
  };

  return (
    <div className="home-screen animate-fade">
    
      {/* Card da Logo */}
      <div className="logo-card">
        <img src={renderLogo()} alt="Logo INSS Orienta" className="logo-image" />
      </div>

      {/* NOVA BARRA DE PESQUISA */}
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input 
          type="text" 
          className="search-input" 
          placeholder="O que você procura hoje?" 
          value={textoPesquisa}
          onChange={(e) => setTextoPesquisa(e.target.value)}
        />
      </div>

      {/* Esconde as notícias se o usuário estiver pesquisando algo, para focar na grade */}
      {textoPesquisa === '' && (
        <>
          <h2 className="section-title">Últimos mais recentes...</h2>

          {/* Card de Notícia */}
          <div className="news-card">
            <span className="news-badge">DICA DIGITAL</span>
            <div className="news-image-placeholder">
              <p>IMAGEM DO IDOSO NO CELULAR</p>
            </div>
            <div className="news-content">
              <h3>SIMULAÇÃO DE APOSENTADORIA AUTOMÁTICA: DESCUBRA QUANDO VOCÊ VAI SE APOSENTAR</h3>
              <p>Novo recurso no aplicativo Meu INSS calcula seu tempo de contribuição e idade. Planeje seu futuro agora...</p>
            </div>
          </div>

          <div className="carousel-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
          </div>
        </>
      )}

      {/* ServiceGrid recebendo o texto digitado para fazer o filtro */}
      <ServicesGrid textoPesquisa={textoPesquisa} setActiveTab={setActiveTab} />

    </div>
  );
}