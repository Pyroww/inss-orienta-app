import React from 'react';
import './footer.css'; // Importamos o CSS específico para a barra de navegação inferior
import { FaHome, FaUniversalAccess, FaQuestionCircle } from 'react-icons/fa';

export default function BottomNav({ activeTab, setActiveTab }) {
  return (
    <nav className="bottom-nav">
      <button 
        className={`nav-item ${activeTab === 'inicio' ? 'active' : ''}`}
        onClick={() => setActiveTab('inicio')}
      >
        <FaHome size={24} />
        <span>Início</span>
      </button>

      <button 
        className={`nav-item ${activeTab === 'acessibilidade' ? 'active' : ''}`}
        onClick={() => setActiveTab('acessibilidade')}
      >
        <FaUniversalAccess size={24} />
        <span>Acessabilidade</span>
      </button>

      <button 
        className={`nav-item ${activeTab === 'ajuda' ? 'active' : ''}`}
        onClick={() => setActiveTab('ajuda')}
      >
        <FaQuestionCircle size={24} />
        <span>Ajuda</span>
      </button>
    </nav>
  );
}