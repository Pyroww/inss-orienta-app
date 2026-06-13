import React from 'react';
import './RecuperarSms.css';
import { 
  FaArrowLeft, 
  FaIdCard, 
  FaQuestionCircle, 
  FaShareSquare, 
  FaEnvelopeOpenText, 
  FaLock,
  FaExclamationCircle
} from 'react-icons/fa';

export default function RecuperarSms({ setActiveTab }) {
  return (
    <div className="sms-container">
      {/* Cabeçalho Interno Blindado */}
      <div className="interno-header">
        <button className="btn-voltar" onClick={() => setActiveTab('senhaGov')}>
          <FaArrowLeft />
        </button>
        <h2>Por SMS ou E-mail</h2>
      </div>

      {/* Área de rolagem */}
      <div className="sms-conteudo">
        
        {/* Alerta de Atenção */}
        <div className="alerta-sms">
          <FaExclamationCircle className="icone-alerta-sms" />
          <div className="alerta-texto">
            <h4>Atenção ao Celular</h4>
            <p>Para essa opção funcionar, você precisa ter <strong>acesso ao número de celular ou ao e-mail</strong> que foi cadastrado na primeira vez que a conta foi criada.</p>
          </div>
        </div>

        <p className="texto-introdutorio">
          Siga este passo a passo no site ou aplicativo oficial do <strong>Gov.br</strong>:
        </p>

        {/* Linha do Tempo / Passo a Passo */}
        <div className="passo-a-passo">

          {/* Passo 1 */}
          <div className="passo-card">
            <div className="passo-numero">1</div>
            <div className="passo-detalhe">
              <div className="passo-header">
                <FaIdCard className="passo-icone" />
                <h3>Digite seu CPF</h3>
              </div>
              <p>Abra o Gov.br, digite o seu CPF e clique no botão azul <strong>Continuar</strong>.</p>
            </div>
          </div>

          {/* Passo 2 */}
          <div className="passo-card">
            <div className="passo-numero">2</div>
            <div className="passo-detalhe">
              <div className="passo-header">
                <FaQuestionCircle className="passo-icone" />
                <h3>Esqueci a Senha</h3>
              </div>
              <p>Na tela seguinte, em vez de digitar a senha, clique na opção azul escrita <strong>"Esqueci minha senha"</strong>.</p>
            </div>
          </div>

          {/* Passo 3 (O pulo do gato) */}
          <div className="passo-card">
            <div className="passo-numero">3</div>
            <div className="passo-detalhe">
              <div className="passo-header">
                <FaShareSquare className="passo-icone" />
                <h3>Pule as outras opções</h3>
              </div>
              <p>O Gov.br vai tentar pedir o reconhecimento facial ou o seu banco. Clique no botão <strong>"Recuperar de outra forma"</strong> até aparecer a opção de enviar código por E-mail ou Celular.</p>
            </div>
          </div>

          {/* Passo 4 */}
          <div className="passo-card">
            <div className="passo-numero">4</div>
            <div className="passo-detalhe">
              <div className="passo-header">
                <FaEnvelopeOpenText className="passo-icone" />
                <h3>Digite o Código</h3>
              </div>
              <p>Escolha enviar para o seu celular ou e-mail. Olhe a sua caixa de mensagens, copie o <strong>código de 6 números</strong> que o Gov.br enviou e digite na tela.</p>
            </div>
          </div>

          {/* Passo 5 */}
          <div className="passo-card">
            <div className="passo-numero">5</div>
            <div className="passo-detalhe">
              <div className="passo-header">
                <FaLock className="passo-icone" />
                <h3>Crie a Nova Senha</h3>
              </div>
              <p>Após confirmar o código, crie uma senha nova (com letras, números e símbolos) e digite ela duas vezes para confirmar.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}