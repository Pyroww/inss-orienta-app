import React from 'react';
import './AposentadoriaGeral.css';
import { FaArrowLeft, FaRegClock, FaIdCard, FaCheckCircle, FaFileInvoice } from 'react-icons/fa';

export default function AposentadoriaGeral({ setActiveTab }) {
  return (
    <div className="aposentadoria-container">
      {/* Cabeçalho Interno com botão de voltar */}
      <div className="interno-header">
        <button className="btn-voltar" onClick={() => setActiveTab('elegibilidade')}>
          <FaArrowLeft />
        </button>
        <h2>Aposentadoria Geral</h2>
      </div>

      <div className="aposentadoria-conteudo">
        <section className="secao-info">
          <h3>Regra por Idade (Urbana)</h3>
          <p>Esta é a regra principal após a Reforma da Previdência de 2019.</p>
          
          <div className="grid-requisitos">
            <div className="requisito-item">
              <span className="label">Homens</span>
              <span className="valor">65 Anos</span>
            </div>
            <div className="requisito-item">
              <span className="label">Mulheres</span>
              <span className="valor">62 Anos</span>
            </div>
            <div className="requisito-item total">
              <FaRegClock className="icone-pequeno" />
              <span>Mínimo de 15 anos de contribuição</span>
            </div>
          </div>
        </section>

        <section className="secao-documentos">
          <h3><FaFileInvoice /> Documentos Necessários</h3>
          <p>Organize estes documentos antes de pedir o benefício:</p>
          
          <ul className="lista-documentos">
            <li>
              <FaCheckCircle className="check-icon" />
              <span>Documento de identificação com foto (RG/CNH)</span>
            </li>
            <li>
              <FaCheckCircle className="check-icon" />
              <span>CPF</span>
            </li>
            <li>
              <FaCheckCircle className="check-icon" />
              <span>Carteiras de Trabalho (todas que possuir)</span>
            </li>
            <li>
              <FaCheckCircle className="check-icon" />
              <span>Extrato do CNIS (pode baixar no Meu INSS)</span>
            </li>
            <li>
              <FaCheckCircle className="check-icon" />
              <span>Comprovante de residência atualizado</span>
            </li>
          </ul>
        </section>

        <div className="aviso-auxiliar">
          <FaIdCard className="aviso-icone" />
          <p>Caso tenha tempo rural ou especial, outros documentos podem ser exigidos.</p>
        </div>
      </div>
    </div>
  );
}