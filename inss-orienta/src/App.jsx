import React, { useState } from 'react';
import './index.css';
import Header from './components/geral/header/Header';
import BottomNav from './components/geral/footer/BottomNav';
import Home from './screens/home/Home';
import Acessibilidade from './screens/footer/acessabilidade/Acessibilidade';
import Ajuda from './screens/footer/ajuda/Ajuda';
import Elegibilidade from './screens/servicegrid/elegibilidade/Elegibilidade';
import TermosDeUso from './screens/header/termosdeuso/TermosDeUso';
import PoliticaPrivacidade from './screens/header/politicadeprivacidade/PoliticaPrivacidade';
import AssistenteVirtual from './screens/header/assistentevirtual/AssistenteVirtual';
import AposentadoriaGeral from './screens/servicegrid/elegibilidade/aposentadoriageral/aposentadoriageral';
import Auxilios from './screens/servicegrid/elegibilidade/auxilio/Auxilios';
import BeneficiosAssistenciais from './screens/servicegrid/elegibilidade/assistenciais/BeneficiosAssistenciais';
import SenhaGov from './screens/servicegrid/senhagov/SenhaGov';
import RecuperarBanco from './screens/servicegrid/senhagov/banco/RecuperarBanco';
import RecuperarSms from './screens/servicegrid/senhagov/sms/RecuperarSms';
import RecuperarFacial from './screens/servicegrid/senhagov/facial/RecuperarFacial';
import ProvaDeVida from './screens/servicegrid/provavida/ProvaDeVida';
import Calendario from './screens/calendario/Calendario';
import Agendamento from './screens/agendamento/Agendamento';
import Documentos from './screens/documentos/Documentos';
import Comunidade from './screens/header/comunidade/Comunidade';

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

        {activeTab === 'recuperarBanco' && (
          <RecuperarBanco setActiveTab={setActiveTab} />
        )}

        {activeTab === 'recuperarSms' && (
          <RecuperarSms setActiveTab={setActiveTab} />
        )}
        
        {activeTab === 'recuperarFacial' && (
          <RecuperarFacial setActiveTab={setActiveTab} />
        )}
        
        {activeTab === 'provaVida' && (
          <ProvaDeVida theme={theme} setActiveTab={setActiveTab} />
        )}
        
        {activeTab === 'calendario' && (
          <Calendario theme={theme} setActiveTab={setActiveTab} />
        )}

        {activeTab === 'agendamento' && (
          <Agendamento theme={theme} setActiveTab={setActiveTab} />
        )}

        {activeTab === 'documentos' && (
          <Documentos setActiveTab={setActiveTab} />
        )}
        
        
        {activeTab === 'comunidade' && (
       <Comunidade setActiveTab={setActiveTab} />
        )}

        
        {activeTab === 'ajuda' && (
          <Ajuda />
        )}

      </main>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}