import React from 'react';
import './servicegrid.css'; // Importamos o CSS específico para a grade de serviços

import { 
  FaClipboardCheck, 
  FaKey, 
  FaUserShield, 
  FaCalendarAlt, 
  FaCalendarCheck, 
  FaFileAlt 
} from 'react-icons/fa';

export default function ServicesGrid({ textoPesquisa, setActiveTab }) {
  
  // Nossa "Base de Dados" local de serviços
  const listaServicos = [
    { titulo: "VERIFICAR ELEGIBILIDADE", icone: FaClipboardCheck, corClasse: "green-icon" },
    { titulo: "RECUPERAR SENHA", icone: FaKey, corClasse: "blue-icon" },
    { titulo: "PROVA DE VIDA", icone: FaUserShield, corClasse: "green-icon" },
    { titulo: "CALENDÁRIO DE PAGAMENTO", icone: FaCalendarAlt, corClasse: "gold-icon" },
    { titulo: "AGENDAR ATENDIMENTO", icone: FaCalendarCheck, corClasse: "blue-icon" },
    { titulo: "DOCUMENTOS", icone: FaFileAlt, corClasse: "green-icon" },
  ];

  // A lógica da pesquisa: Se o titulo incluir o que foi digitado, ele fica. Se não, ele some.
  const servicosFiltrados = listaServicos.filter((servico) => 
    servico.titulo.toLowerCase().includes(textoPesquisa.toLowerCase())
  );

  return (
    <div className="services-grid">
      
      {/* Se a pesquisa não encontrar nada, mostramos um aviso */}
      {servicosFiltrados.length === 0 && (
        <p style={{ gridColumn: 'span 2', textAlign: 'center', opacity: 0.7 }}>
          Nenhum serviço encontrado para "{textoPesquisa}".
        </p>
      )}

      {/* O React desenha os botões automaticamente baseado na pesquisa! */}
      {servicosFiltrados.map((servico, index) => {
        const IconeDoServico = servico.icone;
        return (
          <button 
            key={index} 
            className="service-btn"
            onClick={() => {
              // 👇 ADICIONAMOS O GATILHO DA SENHA GOV AQUI 👇
              if (servico.titulo === "VERIFICAR ELEGIBILIDADE") {
                setActiveTab('elegibilidade');
              } else if (servico.titulo === "RECUPERAR SENHA") {
                setActiveTab('senhaGov');
              } else if (servico.titulo === "PROVA DE VIDA") {
                setActiveTab('provaVida'); // 👈 Adicionamos esse aqui!
              } else if (servico.titulo === "CALENDÁRIO DE PAGAMENTO") {
                setActiveTab('calendario'); // 👈 Adicione isso!
              }
            }}
          >
            <IconeDoServico className={`service-icon ${servico.corClasse}`} />
            {/* Quebra o título se ele for muito grande para caber no botão */}
            <span>{servico.titulo.replace(" DE", "\nDE").replace(" ", "\n")}</span>
          </button>
        );
      })}

    </div>
  );
}