import React from 'react';
import './politicadeprivacidade.css'; // Importamos o CSS específico para a política de privacidade
import { FaArrowLeft, FaUserShield } from 'react-icons/fa';

export default function PoliticaPrivacidade({ voltarParaHome }) {
  return (
    <div className="elegibilidade-screen animate-fade">
      
      <div className="interno-header">
        <button className="btn-voltar" onClick={voltarParaHome}>
          <FaArrowLeft />
        </button>
        <h2>Política de Privacidade</h2>
      </div>

      <div className="conteudo-scroll">
        <div className="documento-card">
          <h3><FaUserShield className="doc-icone"/> Sua Segurança em Primeiro Lugar</h3>
          <p>
            Nós valorizamos a sua privacidade e levamos a segurança dos seus dados a sério.
          </p>
          <ul>
            <li><strong>NÃO</strong> pedimos a sua senha do banco.</li>
            <li><strong>NÃO</strong> pedimos a sua senha do gov.br.</li>
            <li><strong>NÃO</strong> guardamos suas fotos ou documentos neste aplicativo.</li>
          </ul>
          <p>
            Este aplicativo funciona como um manual inteligente e seguro. Tudo o que você clica ou lê aqui serve apenas para te orientar, e nenhuma informação pessoal é gravada ou enviada para terceiros.
          </p>
        </div>
      </div>

    </div>
  );
}