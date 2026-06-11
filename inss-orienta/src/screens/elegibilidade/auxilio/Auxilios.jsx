import React from 'react';
import './Auxilios.css';
import { 
  FaArrowLeft, 
  FaBriefcaseMedical, 
  FaBabyCarriage, 
  FaAmbulance, 
  FaUserShield 
} from 'react-icons/fa';

export default function Auxilios({ setActiveTab }) {
  return (
    <div className="auxilios-container">
      {/* Cabeçalho Interno */}
      <div className="interno-header">
        <button className="btn-voltar" onClick={() => setActiveTab('elegibilidade')}>
          <FaArrowLeft />
        </button>
        <h2>Auxílios e Proteção</h2>
      </div>

      {/* Área com rolagem exclusiva */}
      <div className="auxilios-conteudo">
        <p className="texto-introdutorio">
          Os auxílios são benefícios temporários pagos para garantir o seu sustento em momentos de imprevistos ou necessidades específicas.
        </p>

        <div className="lista-auxilios">
          
          {/* Card: Auxílio-Doença */}
          <div className="card-auxilio">
            <div className="card-header doenca">
              <FaBriefcaseMedical className="icone-auxilio" />
              <h3>Auxílio-Doença</h3>
            </div>
            <div className="card-body">
              <p><strong>Para quem:</strong> Trabalhadores incapacitados para o trabalho por mais de 15 dias consecutivos por motivo de doença.</p>
              <p><strong>Requisito principal:</strong> Carência mínima de 12 meses de contribuição (exceto em casos de doenças graves ou acidentes).</p>
            </div>
          </div>

          {/* Card: Salário-Maternidade */}
          <div className="card-auxilio">
            <div className="card-header maternidade">
              <FaBabyCarriage className="icone-auxilio" />
              <h3>Salário-Maternidade</h3>
            </div>
            <div className="card-body">
              <p><strong>Para quem:</strong> Pessoas que precisam se afastar do trabalho por motivo de parto, adoção ou guarda judicial.</p>
              <p><strong>Prazo:</strong> Geralmente pago por 120 dias.</p>
            </div>
          </div>

          {/* Card: Auxílio-Acidente */}
          <div className="card-auxilio">
            <div className="card-header acidente">
              <FaAmbulance className="icone-auxilio" />
              <h3>Auxílio-Acidente</h3>
            </div>
            <div className="card-body">
              <p><strong>Para quem:</strong> Trabalhadores que sofreram acidente e ficaram com sequelas permanentes que reduzem a capacidade de trabalho.</p>
              <p><strong>Detalhe:</strong> É uma indenização, permitindo que a pessoa continue trabalhando e recebendo o auxílio ao mesmo tempo.</p>
            </div>
          </div>

          {/* Card: Auxílio-Reclusão */}
          <div className="card-auxilio">
            <div className="card-header reclusao">
              <FaUserShield className="icone-auxilio" />
              <h3>Auxílio-Reclusão</h3>
            </div>
            <div className="card-body">
              <p><strong>Para quem:</strong> Para os dependentes (família) do segurado de baixa renda que for preso em regime fechado.</p>
              <p><strong>Requisito:</strong> O segurado preso precisa ter carência mínima de 24 meses de contribuição.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}