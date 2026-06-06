import React from 'react';
import { FaSun, FaMoon, FaEye, FaSearchPlus, FaPalette } from 'react-icons/fa';

export default function Acessibilidade({ theme, setTheme, textSize, setTextSize }) {
  return (
    <div className="acessibilidade-screen animate-fade">
      <h2 className="screen-title">Acessibilidade</h2>
      <p className="screen-desc">
        Ajuste o aplicativo para facilitar a sua leitura.
      </p>

      {/* SEÇÃO 1: TAMANHO DO CONTEÚDO */}
      <h3 className="section-subtitle"><FaSearchPlus /> Tamanho do Texto</h3>
      <div className="size-buttons">
        <button 
          className={`size-btn ${textSize === 'normal' ? 'active-size' : ''}`}
          onClick={() => setTextSize('normal')}
        >
          A (Padrão)
        </button>
        <button 
          className={`size-btn ${textSize === 'grande' ? 'active-size' : ''}`}
          onClick={() => setTextSize('grande')}
        >
          A+ (Grande)
        </button>
      </div>

      {/* SEÇÃO 2: TEMA DE CORES */}
      <h3 className="section-subtitle"><FaPalette /> Cores da Tela</h3>
      <div className="theme-options">
        <button 
          className={`theme-card ${theme === 'light' ? 'active-theme' : ''}`}
          onClick={() => setTheme('light')}
        >
          <div className="theme-icon"><FaSun /></div>
          <div className="theme-text">
            <h3>Modo Padrão</h3>
            <p>Cores originais claras.</p>
          </div>
        </button>

        <button 
          className={`theme-card ${theme === 'dark' ? 'active-theme' : ''}`}
          onClick={() => setTheme('dark')}
        >
          <div className="theme-icon"><FaMoon /></div>
          <div className="theme-text">
            <h3>Modo Escuro</h3>
            <p>Fundo escuro para não cansar a visão.</p>
          </div>
        </button>

        <button 
          className={`theme-card ${theme === 'high-contrast' ? 'active-theme' : ''}`}
          onClick={() => setTheme('high-contrast')}
        >
          <div className="theme-icon"><FaEye /></div>
          <div className="theme-text">
            <h3>Alto Contraste</h3>
            <p>Cores vibrantes para máxima legibilidade.</p>
          </div>
        </button>
      </div>
    </div>
  );
}