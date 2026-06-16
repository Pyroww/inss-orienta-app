import React, { useState } from 'react';
import './header.css'; // Importamos o CSS específico para o header
import { FaBars, FaTimes, FaFileContract, FaUserShield, FaInfoCircle, FaRobot, FaCog } from 'react-icons/fa';

// Recebendo o setActiveTab aqui no topo!
export default function Header({ setActiveTab }) {
  const [menuAberto, setMenuAberto] = useState(false);

  // Função auxiliar para mudar de tela e já fechar o menu na mesma hora
  const navegarPara = (tela) => {
    setActiveTab(tela);
    setMenuAberto(false);
  };

  return (
    <>
      <header className="app-header">
        <button className="menu-button" onClick={() => setMenuAberto(true)}>
          <FaBars size={20} />
        </button>
        <h1 className="header-title">INSS ORIENTA</h1>
      </header>

      {menuAberto && (
        <div className="menu-overlay" onClick={() => setMenuAberto(false)}></div>
      )}

      <div className={`menu-lateral ${menuAberto ? 'aberto' : ''}`}>
        
        <div className="menu-lateral-header">
          <h2>Menu</h2>
          <button className="btn-fechar" onClick={() => setMenuAberto(false)}>
            <FaTimes size={24} />
          </button>
        </div>
        
        <nav className="menu-lateral-links">
          
          {/* Agora os botões usam nossa função de navegação! */}
          <button className="menu-link" onClick={() => navegarPara('termos')}>
            <FaFileContract className="menu-link-icone" />
            Termos de Uso
          </button>
          
          <button className="menu-link" onClick={() => navegarPara('privacidade')}>
            <FaUserShield className="menu-link-icone" />
            Política de Privacidade
          </button>

          <button className="menu-link" onClick={() => navegarPara('assistente')}>
            <FaRobot className="menu-link-icone" />
            Assistente Virtual (IA)
          </button>
          
          <button className="menu-link" onClick={() => navegarPara('comunidade')}>
            <FaRobot className="menu-link-icone" />
            Comunidade
          </button>

        </nav>
      </div>
    </>
  );
}