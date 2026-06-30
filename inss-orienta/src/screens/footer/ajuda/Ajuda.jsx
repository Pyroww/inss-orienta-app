import React from 'react';
import './ajuda.css';
import { FaCheckSquare, FaVolumeUp, FaQuestionCircle } from 'react-icons/fa';

export default function Ajuda() {
  
  // Lista de termos do dicionário. Fácil de adicionar novos!
  const termosInss = [
    {
      termo: "Carência",
      explicacao: "É o número mínimo de meses que você precisa ter pago ao INSS para ter direito a pedir um benefício."
    },
    {
      termo: "Qualidade de Segurado",
      explicacao: "É a condição de quem está protegido pelo INSS (quem está pagando em dia ou está no chamado 'período de graça')."
    },
    {
      termo: "Senha de Triagem",
      explicacao: "É a primeira senha que você pega na recepção. Serve para organizar a fila e direcionar você para o guichê certo ou para a perícia."
    },
    {
      termo: "Documento Autenticado",
      explicacao: "É a cópia de um documento original que foi carimbada pelo cartório, comprovando que ela é verdadeira e válida."
    },
    {
      termo: "Período de Graça",
      explicacao: "É o tempo em que você continua protegido pelo INSS mesmo depois de ter parado de pagar as contribuições mensais."
    },
    {
      termo: "Exigência",
      explicacao: "Quando o INSS pede para você enviar um documento que faltou."
    },
    {
      termo: "Indeferido",
      explicacao: "Significa que o pedido ou processo foi negado."
    }
  ];

  //Assistente de Voz
  const lerEmVozAlta = (texto) => {
    // Verifica se o celular/navegador tem suporte a voz
    if ('speechSynthesis' in window) {
      // Para qualquer áudio que estiver tocando antes de começar o novo
      window.speechSynthesis.cancel(); 
      
      const fala = new SpeechSynthesisUtterance(texto);
      fala.lang = 'pt-BR'; // Define o idioma para Português do Brasil
      fala.rate = 0.9; // Deixa a voz um pouquinho mais lenta para o idoso entender melhor
      
      window.speechSynthesis.speak(fala);
    } else {
      alert("Desculpe, seu aparelho não suporta leitura de voz.");
    }
  };

  return (
    <div className="ajuda-screen animate-fade">
      
      {/* Cabeçalho ilustrativo da Ajuda */}
      <div className="ajuda-header">
        <FaQuestionCircle className="ajuda-icone-grande" />
        <h2 className="ajuda-titulo-topo">Dúvida Comum</h2>
      </div>

      <h3 className="ajuda-chamada">
        Não entende algum termo? A gente explica!
      </h3>

      {/* Lista de Termos Renderizada Automaticamente */}
      <div className="dicionario-lista">
        {termosInss.map((item, index) => (
          <div key={index} className="termo-card">
            
            <div className="termo-cabecalho">
              <div className="termo-titulo-box">
                <FaCheckSquare className="icone-check" />
                <h4 className="termo-titulo">{item.termo}:</h4>
              </div>
              
              {/* O botão do Assistente de Voz */}
              <button 
                className="btn-ouvir" 
                onClick={() => lerEmVozAlta(`${item.termo}. ${item.explicacao}`)}
                aria-label="Ouvir explicação"
              >
                <FaVolumeUp /> <span>Ouvir</span>
              </button>
            </div>
            
            <p className="termo-explicacao">"{item.explicacao}"</p>
          </div>
        ))}
      </div>

    </div>
  );
}