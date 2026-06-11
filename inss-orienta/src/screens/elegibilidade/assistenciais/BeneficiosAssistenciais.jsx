import React from 'react';
import './BeneficiosAssistenciais.css';
import { 
  FaArrowLeft, 
  FaWheelchair, 
  FaUserPlus, 
  FaIdCard, 
  FaExclamationCircle 
} from 'react-icons/fa';

export default function BeneficiosAssistenciais({ setActiveTab }) {
  return (
    <div className="assistenciais-container">
      {/* Cabeçalho Interno Blindado */}
      <div className="interno-header">
        <button className="btn-voltar" onClick={() => setActiveTab('elegibilidade')}>
          <FaArrowLeft />
        </button>
        <h2>Benefícios Assistenciais</h2>
      </div>

      {/* Área de rolagem do conteúdo */}
      <div className="assistenciais-conteudo">
        
        <div className="alerta-importante">
          <FaExclamationCircle className="icone-alerta" />
          <p><strong>Atenção:</strong> O BPC/LOAS <strong>não é aposentadoria</strong>. Ele não paga 13º salário e não deixa pensão por morte. Não é necessário ter contribuído para o INSS para ter direito.</p>
        </div>

        <h3 className="titulo-secao">Quem tem direito ao BPC/LOAS?</h3>

        <div className="lista-assistenciais">
          
          {/* Card: BPC Idoso */}
          <div className="card-assistencial">
            <div className="card-header idoso">
              <FaUserPlus className="icone-assistencial" />
              <h3>BPC para Idosos</h3>
            </div>
            <div className="card-body">
              <p><strong>Idade mínima:</strong> 65 anos ou mais (para homens e mulheres).</p>
              <p><strong>Requisito principal:</strong> Comprovar estado de pobreza ou necessidade (renda familiar per capita de até 1/4 do salário mínimo).</p>
            </div>
          </div>

          {/* Card: BPC PCD */}
          <div className="card-assistencial">
            <div className="card-header pcd">
              <FaWheelchair className="icone-assistencial" />
              <h3>BPC para Pessoa com Deficiência</h3>
            </div>
            <div className="card-body">
              <p><strong>Condição:</strong> Ter impedimento de longo prazo (físico, mental, intelectual ou sensorial) de no mínimo 2 anos.</p>
              <p><strong>Idade:</strong> Qualquer idade (inclusive crianças).</p>
            </div>
          </div>

        </div>

        <h3 className="titulo-secao mt-3">Documento Obrigatório</h3>

        {/* Card: CadÚnico */}
        <div className="card-cadunico">
          <div className="cadunico-icone-area">
            <FaIdCard className="icone-grande" />
          </div>
          <div className="cadunico-texto">
            <h4>Cadastro Único (CadÚnico)</h4>
            <p>Antes de pedir o benefício no INSS, você e sua família <strong>devem</strong> estar inscritos e com o CadÚnico atualizado no CRAS da sua cidade.</p>
          </div>
        </div>

      </div>
    </div>
  );
}