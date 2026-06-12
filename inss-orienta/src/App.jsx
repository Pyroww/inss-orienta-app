import React, { useState } from 'react';
import './index.css';
import Header from './components/geral/header/Header';
import BottomNav from './components/geral/footer/BottomNav';
import Home from './screens/home/Home';
import Acessibilidade from './screens/acessabilidade/Acessibilidade';
import Ajuda from './screens/ajuda/Ajuda';
import Elegibilidade from './screens/elegibilidade/Elegibilidade';
import TermosDeUso from './screens/termosdeuso/TermosDeUso';
import PoliticaPrivacidade from './screens/politicadeprivacidade/PoliticaPrivacidade';
import AssistenteVirtual from './screens/assistentevirtual/AssistenteVirtual';
import AposentadoriaGeral from './screens/elegibilidade/aposentadoriageral/aposentadoriageral';
import Auxilios from './screens/elegibilidade/auxilio/Auxilios';
import BeneficiosAssistenciais from './screens/elegibilidade/assistenciais/BeneficiosAssistenciais';
import SenhaGov from './screens/senhagov/SenhaGov';

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [theme, setTheme] = useState('light');
  
  // Controle do tamanho da fonte ('normal' ou 'grande')
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
        <Elegibilidade theme={theme} voltarParaHome={() => setActiveTab('inicio')}
        setActiveTab={setActiveTab} />
      )}

        {activeTab === 'acessibilidade' && (
          <Acessibilidade 
            theme={theme} 
            setTheme={setTheme} 
            textSize={textSize}
            setTextSize={setTextSize}
          />
        )}

        {/* NOVA TELA AQUI: */}
        {activeTab === 'aposentadoriaGeral' && (
          <AposentadoriaGeral setActiveTab={setActiveTab} />
        )}

        {activeTab === 'auxilios' && (
          <Auxilios setActiveTab={setActiveTab} />
        )}

        {activeTab === 'assistenciais' && (
          <BeneficiosAssistenciais setActiveTab={setActiveTab} />
        )}

        {activeTab === 'senhaGov' && (
          <SenhaGov setActiveTab={setActiveTab}
          theme={theme} /* Adicione esta linha! */ />
        )}

        {activeTab === 'ajuda' && (
          <Ajuda />
        )}

      </main>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}