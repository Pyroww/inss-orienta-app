import React, { useState } from 'react';
import './Calendario.css';
import { 
  FaArrowLeft, 
  FaSearch, 
  FaInfoCircle, 
  FaCalendarCheck,
  FaExclamationTriangle
} from 'react-icons/fa';

// Descomente e ajuste quando tiver a imagem salva em src/assets/calendario/banner_calendario.png
// import bannerCalendario from '../../assets/calendario/banner_calendario.png';

export default function Calendario({ setActiveTab }) {
  // Estados para a nossa Calculadora
  const [nb, setNb] = useState('');
  const [renda, setRenda] = useState('ate_um'); 
  const [resultado, setResultado] = useState(null);

  // A Lógica de Ouro para descobrir o dia
  const calcularPrevisao = () => {
    // Remove qualquer ponto ou traço que o usuário tenha digitado
    const apenasNumeros = nb.replace(/\D/g, '');

    if (apenasNumeros.length < 10) {
      setResultado({ erro: true, mensagem: 'Por favor, digite o número do benefício completo (10 números).' });
      return;
    }

    // Pega exatamente o número ANTES do traço (o penúltimo da sequência de 10)
    const digitoFinal = apenasNumeros.charAt(apenasNumeros.length - 2);

    let textoPrevisao = '';
    if (renda === 'ate_um') {
      textoPrevisao = `Os benefícios de ATÉ 1 salário mínimo com final ${digitoFinal} são pagos na primeira fase do calendário (geralmente entre os últimos 5 dias úteis do mês atual e os 5 primeiros do mês seguinte).`;
    } else {
      textoPrevisao = `Os benefícios ACIMA de 1 salário mínimo com final ${digitoFinal} são pagos na segunda fase do calendário (apenas nos primeiros 5 dias úteis do mês seguinte).`;
    }

    setResultado({ erro: false, digito: digitoFinal, mensagem: textoPrevisao });
  };

  return (
    <div className="calendario-container">
      {/* Cabeçalho */}
      <div className="interno-header">
        <button className="btn-voltar" onClick={() => setActiveTab('inicio')}>
          <FaArrowLeft />
        </button>
        <h2>Calendário de Pagamento</h2>
      </div>

      {/* Conteúdo Rolável */}
      <div className="calendario-conteudo">
        
        {/* Banner */}
        <div className="banner-area">
          {/* <img src={bannerCalendario} alt="Quando vou receber meu benefício?" /> */}
          <div className="banner-placeholder">
            <span>[ Banner Calendário ]</span>
          </div>
        </div>

        <div className="texto-introducao">
          <h3>O calendário de pagamento</h3>
          <p>
            <strong>Passo 1: Descubra o número certo do seu cartão</strong><br/>
            Para saber o dia do seu pagamento, você precisa olhar para o penúltimo número do seu cartão de benefício, ignorando o dígito que fica depois do traço.
          </p>
        </div>

        {/* ==========================================
            MECÂNICA DA CALCULADORA
            ========================================== */}
        <div className="calculadora-box">
          <div className="calc-header">
            <FaCalendarCheck className="icone-calc" />
            <h4>Previsão de Pagamento</h4>
          </div>

          <div className="form-group">
            <label>Digite o Número do Benefício (NB):</label>
            <input 
              type="text" 
              placeholder="Ex: 123.456.789-0"
              value={nb}
              onChange={(e) => setNb(e.target.value)}
              maxLength={14}
            />
          </div>

          <div className="form-group">
            <label>Qual o valor do benefício?</label>
            <div className="radio-group">
              <label className="radio-label">
                <input 
                  type="radio" 
                  name="renda" 
                  value="ate_um" 
                  checked={renda === 'ate_um'}
                  onChange={() => setRenda('ate_um')}
                />
                Até 1 salário mínimo
              </label>
              <label className="radio-label">
                <input 
                  type="radio" 
                  name="renda" 
                  value="acima_um" 
                  checked={renda === 'acima_um'}
                  onChange={() => setRenda('acima_um')}
                />
                Acima de 1 salário
              </label>
            </div>
          </div>

          <button className="btn-consultar" onClick={calcularPrevisao}>
            <FaSearch /> Consultar Previsão
          </button>

          {/* Área de Resultado */}
          {resultado && (
            <div className={`resultado-alerta ${resultado.erro ? 'erro' : 'sucesso'}`}>
              {resultado.erro ? (
                <>
                  <FaExclamationTriangle className="res-icone" />
                  <p>{resultado.mensagem}</p>
                </>
              ) : (
                <>
                  <div className="digito-destaque">
                    <span>O seu dígito é:</span>
                    <strong>{resultado.digito}</strong>
                  </div>
                  <p>{resultado.mensagem}</p>
                </>
              )}
            </div>
          )}

        </div>
        {/* FIM DA CALCULADORA */}

        {/* Aviso Padrão */}
        <div className="aviso-informativo mt-3">
          <FaInfoCircle className="icone-info" />
          <p>O calendário oficial completo pode ser consultado no aplicativo Meu INSS. Dias de pagamento podem adiantar se caírem em feriados.</p>
        </div>

      </div>
    </div>
  );
}