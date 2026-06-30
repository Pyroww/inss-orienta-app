import React from 'react';
import './RecuperarBanco.css';
import { 
  FaArrowLeft, 
  FaUniversity, 
  FaIdCard, 
  FaMobileAlt, 
  FaLock, 
  FaCheckCircle,
  FaShieldAlt
} from 'react-icons/fa';

export default function RecuperarBanco({ setActiveTab }) {
  return (
    <div className="banco-container">
      {/* Cabeçalho Interno */}
      <div className="interno-header">
        <button className="btn-voltar" onClick={() => setActiveTab('senhaGov')}>
          <FaArrowLeft />
        </button>
        <h2>Entrar pelo Banco</h2>
      </div>

      {/* Área de rolagem */}
      <div className="banco-conteudo">
        
        {/* Alerta de Segurança Anti-Golpe */}
        <div className="alerta-banco">
          <FaShieldAlt className="icone-alerta-banco" />
          <div className="alerta-texto">
            <h4>100% Seguro e Oficial</h4>
            <p>O aplicativo do seu banco apenas confirma sua identidade. <strong>Nenhum funcionário do INSS vai pedir a sua senha do banco.</strong></p>
          </div>
        </div>

        <p className="texto-introdutorio">
          Siga os passos abaixo no site ou aplicativo oficial do <strong>Gov.br</strong>:
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
                <FaUniversity className="passo-icone" />
                <h3>Escolha seu Banco</h3>
              </div>
              <p>Na tela de colocar a senha, desça um pouco e clique na opção <strong>"Entrar com seu banco"</strong>. Depois, clique na logomarca do seu banco.</p>
            </div>
          </div>

          {/* Passo 3 */}
          <div className="passo-card">
            <div className="passo-numero">3</div>
            <div className="passo-detalhe">
              <div className="passo-header">
                <FaMobileAlt className="passo-icone" />
                <h3>Faça o Login Bancário</h3>
              </div>
              <p>Você será levado para a tela segura do seu banco. Digite sua agência, conta e a senha do aplicativo do banco (não é a senha do cartão).</p>
            </div>
          </div>

          {/* Passo 4 */}
          <div className="passo-card">
            <div className="passo-numero">4</div>
            <div className="passo-detalhe">
              <div className="passo-header">
                <FaLock className="passo-icone" />
                <h3>Crie a Nova Senha</h3>
              </div>
              <p>Se o banco confirmar que é você, o Gov.br vai pedir para você digitar uma <strong>nova senha</strong> duas vezes.</p>
            </div>
          </div>

        </div>

        {/* Mensagem de Sucesso */}
        <div className="sucesso-box">
          <FaCheckCircle className="icone-sucesso" />
          <p>Pronto! Agora é só anotar sua senha nova e usar para acessar o Meu INSS.</p>
        </div>

      </div>
    </div>
  );
}