import React from 'react';
import './termosdeuso.css'; // Importamos o CSS específico para os termos de uso
import { FaArrowLeft, FaFileContract } from 'react-icons/fa';

export default function TermosDeUso({ voltarParaHome }) {
  return (
    <div className="elegibilidade-screen animate-fade">
      
      <div className="interno-header">
        <button className="btn-voltar" onClick={voltarParaHome}>
          <FaArrowLeft />
        </button>
        <h2>Termos de Uso</h2>
      </div>

      <div className="conteudo-scroll">
        <div className="documento-card">
          <h3><FaFileContract className="doc-icone"/> Propósito do Aplicativo</h3>
          <p>
            O <strong>INSS Orienta</strong> é um aplicativo criado para ajudar você a entender melhor os serviços, agilizar o seu atendimento na recepção e te guiar pelo sistema.
          </p>
          <p>
            Ele <strong>não substitui</strong> o aplicativo oficial "Meu INSS". Para dar entrada em benefícios ou ver seus pagamentos, você será sempre direcionado para os canais oficiais do Governo.
          </p>
        </div>

        <div className="documento-card">
          <h3>Regras de Uso</h3>
          <ul>
            <li>As informações aqui presentes servem para orientação inicial.</li>
            <li>Use as ferramentas de acessibilidade para facilitar sua leitura.</li>
            <li>Em caso de dúvidas na agência, mostre a tela do aplicativo para o servidor ou estagiário da triagem.</li>
          </ul>
        </div>
      </div>

    </div>
  );
}