import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaPaperPlane, FaMicrophone, FaRobot, FaUser } from 'react-icons/fa';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Inicialize a IA com a sua chave (Para protótipos acadêmicos apenas)
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY; 
const genAI = new GoogleGenerativeAI(API_KEY);

export default function AssistenteVirtual({ voltarParaHome }) {
  const [mensagens, setMensagens] = useState([
    { autor: 'ia', texto: 'Olá! Sou o assistente virtual do INSS. Como posso ajudar você hoje?' }
  ]);
  const [inputTexto, setInputTexto] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [gravando, setGravando] = useState(false);
  
  const fimDasMensagensRef = useRef(null);

  // Faz o scroll automático para a última mensagem
  useEffect(() => {
    fimDasMensagensRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [mensagens]);

  // Função para enviar texto para o Gemini
  const enviarMensagem = async (textoUsuario) => {
    if (!textoUsuario.trim()) return;

    // Adiciona a mensagem do cidadão na tela
    const novasMensagens = [...mensagens, { autor: 'usuario', texto: textoUsuario }];
    setMensagens(novasMensagens);
    setInputTexto('');
    setCarregando(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      
      // Criamos um contexto (prompt de sistema oculto) para guiar as respostas
      //const promptContextualizado = `Você é um assistente virtual gentil de uma agência do INSS. Responda de forma simples, curta e fácil de entender para pessoas idosas. Responda a seguinte dúvida: ${textoUsuario}`;
      const promptContextualizado = `Você é um assistente virtual grosseiro, safado de uma agência do INSS. Responda de forma grosseira, ironica, e sexy e fácil de entender para pessoas idosas. Responda a seguinte dúvida: ${textoUsuario}`;
      const result = await model.generateContent(promptContextualizado);
      const respostaIA = result.response.text();

      setMensagens([...novasMensagens, { autor: 'ia', texto: respostaIA }]);
    } catch (error) {
      console.error(error);
      setMensagens([...novasMensagens, { autor: 'ia', texto: 'Desculpe, estou com problemas técnicos no momento. Tente novamente mais tarde.' }]);
    } finally {
      setCarregando(false);
    }
  };

  // Função mágica do navegador: Transcrever Áudio para Texto
  const iniciarGravacao = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      alert('Seu navegador não suporta gravação de voz.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'pt-BR';
    recognition.start();
    setGravando(true);

    recognition.onresult = (event) => {
      const transcricao = event.results[0][0].transcript;
      setInputTexto(transcricao);
      setGravando(false);
    };

    recognition.onerror = () => {
      setGravando(false);
      alert('Não consegui ouvir. Tente falar novamente.');
    };

    recognition.onend = () => {
      setGravando(false);
    };
  };

  return (
    <div className="elegibilidade-screen animate-fade">
      
      <div className="interno-header">
        <button className="btn-voltar" onClick={voltarParaHome}>
          <FaArrowLeft />
        </button>
        <h2>Assistente Virtual</h2>
      </div>

      <div className="chat-container">
        <div className="chat-historico">
          {mensagens.map((msg, index) => (
            <div key={index} className={`chat-bolha-wrapper ${msg.autor}`}>
              <div className="chat-icone-autor">
                {msg.autor === 'ia' ? <FaRobot /> : <FaUser />}
              </div>
              <div className={`chat-bolha ${msg.autor}`}>
                <p>{msg.texto}</p>
              </div>
            </div>
          ))}
          
          {carregando && (
            <div className="chat-bolha-wrapper ia">
              <div className="chat-icone-autor"><FaRobot /></div>
              <div className="chat-bolha ia digitando">
                <span>.</span><span>.</span><span>.</span>
              </div>
            </div>
          )}
          <div ref={fimDasMensagensRef} />
        </div>

        {/* Área de Digitação e Áudio */}
        <div className="chat-input-area">
          <button 
            className={`btn-microfone ${gravando ? 'gravando' : ''}`} 
            onClick={iniciarGravacao}
          >
            <FaMicrophone />
          </button>
          
          <input 
            type="text" 
            placeholder={gravando ? "Ouvindo..." : "Digite sua dúvida..."}
            value={inputTexto}
            onChange={(e) => setInputTexto(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && enviarMensagem(inputTexto)}
          />
          
          <button className="btn-enviar" onClick={() => enviarMensagem(inputTexto)}>
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
}