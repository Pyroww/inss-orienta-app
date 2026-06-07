import React, { useState } from 'react';
import './index.css';
import Header from './components/geral/header/Header';
import BottomNav from './components/geral/footer/BottomNav';
import Home from './screens/Home';
import Acessibilidade from './screens/Acessibilidade';
import Ajuda from './screens/Ajuda';
import Elegibilidade from './screens/Elegibilidade';
import TermosDeUso from './screens/TermosDeUso';
import PoliticaPrivacidade from './screens/PoliticaPrivacidade';
import AssistenteVirtual from './screens/AssistenteVirtual';

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [theme, setTheme] = useState('light');
  
  // NOVO: Controle do tamanho da fonte ('normal' ou 'grande')
  const [textSize, setTextSize] = useState('normal');

  return (
    // Adicionamos a classe font-{textSize} dinamicamente na raiz do app
    <div className={`app-container ${theme} font-${textSize}`}>
      <Header setActiveTab={setActiveTab} />
      
      <main className="main-content">
      {activeTab === 'assistente' && (
        <AssistenteVirtual voltarParaHome={() => setActiveTab('inicio')} />
      )}
        {activeTab === 'termos' && (
        <TermosDeUso voltarParaHome={() => setActiveTab('inicio')} />
      )}
      {activeTab === 'privacidade' && (
        <PoliticaPrivacidade voltarParaHome={() => setActiveTab('inicio')} />
      )}

        {activeTab === 'inicio' && <Home theme={theme} setActiveTab={setActiveTab} />}

        {/* NOVA TELA AQUI: */}
        {activeTab === 'elegibilidade' && (
        <Elegibilidade theme={theme} voltarParaHome={() => setActiveTab('inicio')} />
      )}

        {activeTab === 'acessibilidade' && (
          <Acessibilidade 
            theme={theme} 
            setTheme={setTheme} 
            textSize={textSize}
            setTextSize={setTextSize}
          />
        )}
        {activeTab === 'ajuda' && (
          <Ajuda />
        )}

      </main>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}