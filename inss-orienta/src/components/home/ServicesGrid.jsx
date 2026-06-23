import React from 'react';
import './servicegrid.css'; 

// Importando a fina flor do design moderno: Ionicons 5 (Traços finos e nativos de celular)
import { 
  IoShieldCheckmarkOutline, 
  IoKeyOutline, 
  IoFingerPrintOutline, // A nova digital biométrica!
  IoCalendarClearOutline, 
  IoTimeOutline, 
  IoDocumentTextOutline 
} from 'react-icons/io5';

export default function ServicesGrid({ textoPesquisa, setActiveTab }) {
  
  // Nossa Base de Dados com os novos ícones e os "gatilhos de vida" (animações)
  const listaServicos = [
    { titulo: "VERIFICAR ELEGIBILIDADE", icone: IoShieldCheckmarkOutline, corClasse: "glow-green", anim: "anim-aura" },
    { titulo: "RECUPERAR SENHA", icone: IoKeyOutline, corClasse: "glow-blue", anim: "anim-chave" },
    { titulo: "PROVA DE VIDA", icone: IoFingerPrintOutline, corClasse: "glow-green", anim: "anim-pulso-bio" },
    { titulo: "CALENDÁRIO DE PAGAMENTO", icone: IoCalendarClearOutline, corClasse: "glow-gold", anim: "anim-flutuar" },
    { titulo: "AGENDAR ATENDIMENTO", icone: IoTimeOutline, corClasse: "glow-blue", anim: "anim-relogio" },
    { titulo: "DOCUMENTOS", icone: IoDocumentTextOutline, corClasse: "glow-green", anim: "anim-flutuar" },
  ];

  const servicosFiltrados = listaServicos.filter((servico) => 
    servico.titulo.toLowerCase().includes(textoPesquisa.toLowerCase())
  );

  return (
    <div className="services-grid">
      
      {servicosFiltrados.length === 0 && (
        <p className="vazio-aviso">
          Nenhum serviço encontrado para "{textoPesquisa}".
        </p>
      )}

      {servicosFiltrados.map((servico, index) => {
        const IconeDoServico = servico.icone;
        return (
          <button 
            key={index} 
            className="service-btn"
            onClick={() => {
              if (servico.titulo === "VERIFICAR ELEGIBILIDADE") setActiveTab('elegibilidade');
              else if (servico.titulo === "RECUPERAR SENHA") setActiveTab('senhaGov');
              else if (servico.titulo === "PROVA DE VIDA") setActiveTab('provaVida');
              else if (servico.titulo === "CALENDÁRIO DE PAGAMENTO") setActiveTab('calendario');
              else if (servico.titulo === "AGENDAR ATENDIMENTO") setActiveTab('agendamento');
              else if (servico.titulo === "DOCUMENTOS") setActiveTab('documentos');
            }}
          >
            {/* A "Caixa de Luz" que guarda o ícone */}
            <div className={`caixa-icone ${servico.corClasse} ${servico.anim}`}>
              <IconeDoServico className="service-icon" />
            </div>
            
            <span>{servico.titulo.replace(" DE", "\nDE").replace(" ", "\n")}</span>
          </button>
        );
      })}

    </div>
  );
}