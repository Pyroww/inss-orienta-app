import React from 'react';
import './Documentos.css';
import { 
  FaArrowLeft, 
  FaIdCard, 
  FaBriefcase, 
  FaStethoscope, 
  FaBaby, 
  FaExclamationTriangle
} from 'react-icons/fa';

import bannerDocumentos from '../../../assets/documentos/banner_documentos.png'; // Descomente quando tiver a imagem

export default function Documentos({ setActiveTab }) {
  return (
    <div className="documentos-container">
      {/* Cabeçalho */}
      <div className="interno-header">
        <button className="btn-voltar" onClick={() => setActiveTab('inicio')}>
          <FaArrowLeft />
        </button>
        <h2>Documentos Necessários</h2>
      </div>

      {/* Conteúdo Rolável */}
      <div className="documentos-conteudo">
        
        {/* Banner Principal */}
        <div className="banner-area">
          <img src={bannerDocumentos} alt="Quais documentos levar no INSS" />
        </div>

        <div className="texto-introducao">
          <h3>Não perca a sua viagem!</h3>
          <p>
            Levar a documentação correta evita que o seu pedido fique "em exigência" (travado) ou que você tenha que remarcar o atendimento. Veja o que não pode faltar:
          </p>
        </div>

        {/* Categoria 1: Básicos */}
        <div className="doc-categoria basico">
          <div className="doc-header">
            <FaIdCard className="doc-icone" />
            <h4>Documentos Básicos (Obrigatórios para todos)</h4>
          </div>
          <ul className="doc-lista">
            <li><strong>Documento de Identidade original com foto</strong> (RG, CNH, Carteira de Trabalho ou Passaporte).</li>
            <li><strong>CPF</strong> (se o número não estiver no seu RG).</li>
            <li><strong>Comprovante de residência</strong> recente (conta de água, luz ou telefone dos últimos 3 meses).</li>
          </ul>
        </div>

        {/* Categoria 2: Aposentadorias */}
        <div className="doc-categoria trabalho">
          <div className="doc-header">
            <FaBriefcase className="doc-icone" />
            <h4>Para Aposentadorias</h4>
          </div>
          <ul className="doc-lista">
            <li><strong>Carteiras de Trabalho (CTPS)</strong> originais. Leve todas que você tiver.</li>
            <li><strong>Carnês de Contribuição (GPS)</strong> originais, caso tenha pago o INSS por conta própria.</li>
            <li>Extrato do CNIS (pode ser tirado pelo aplicativo Meu INSS).</li>
          </ul>
        </div>

        {/* Categoria 3: Auxílio-Doença e BPC */}
        <div className="doc-categoria saude">
          <div className="doc-header">
            <FaStethoscope className="doc-icone" />
            <h4>Para Perícia Médica (Auxílio-Doença, BPC/LOAS)</h4>
          </div>
          <ul className="doc-lista">
            <li><strong>Atestados e laudos médicos atualizados</strong> (com carimbo, assinatura do médico e o número da doença - CID).</li>
            <li>Receitas médicas, exames de sangue ou de imagem originais.</li>
            <li>Para o BPC/LOAS: É obrigatório estar com o <strong>CadÚnico</strong> atualizado no CRAS antes de ir ao INSS.</li>
          </ul>
        </div>

        {/* Categoria 4: Salário-Maternidade */}
        <div className="doc-categoria maternidade">
          <div className="doc-header">
            <FaBaby className="doc-icone" />
            <h4>Para Salário-Maternidade</h4>
          </div>
          <ul className="doc-lista">
            <li><strong>Certidão de Nascimento</strong> original da criança (em caso de parto).</li>
            <li>Atestado médico original de afastamento (caso o bebê ainda não tenha nascido).</li>
            <li>Termo de Guarda ou Nova Certidão de Nascimento (em caso de adoção).</li>
          </ul>
        </div>

        {/* Aviso Alerta Final */}
        <div className="aviso-alerta mt-3">
          <div className="aviso-header">
            <FaExclamationTriangle className="icone-alerta" />
            <h4>Atenção com as Cópias</h4>
          </div>
          <p>O INSS <strong>não aceita</strong> documentos rasurados, rasgados ou apagados. Leve sempre os <strong>documentos originais</strong>. Caso precise levar cópias, elas devem ser autenticadas em cartório.</p>
        </div>

      </div>
    </div>
  );
}