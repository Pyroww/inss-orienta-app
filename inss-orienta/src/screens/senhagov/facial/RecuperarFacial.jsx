import React from 'react';
import './RecuperarFacial.css';
import { 
  FaArrowLeft, 
  FaIdCard, 
  FaMobileAlt, 
  FaCamera, 
  FaLightbulb, 
  FaLock,
  FaExclamationCircle
} from 'react-icons/fa';

export default function RecuperarFacial({ setActiveTab }) {
  return (
    <div className="facial-container">
      {/* Cabeçalho Interno Blindado */}
      <div className="interno-header">
        <button className="btn-voltar" onClick={() => setActiveTab('senhaGov')}>
          <FaArrowLeft />
        </button>
        <h2>Reconhecimento Facial</h2>
      </div>

      {/* Área de rolagem */}
      <div className="facial-conteudo">
        
        {/* Alerta com Dicas de Ouro */}
        <div className="alerta-facial">
          <FaExclamationCircle className="icone-alerta-facial" />
          <div className="alerta-texto">
            <h4>Dicas para não dar erro:</h4>
            <p>Vá para um lugar <strong>bem iluminado</strong>, retire óculos, boné ou chapéu, e segure o celular bem firme na altura dos seus olhos.</p>
          </div>
        </div>

        <p className="texto-introdutorio">
          Essa opção exige o uso do **aplicativo oficial do Gov.br** instalado no seu celular. Siga os passos:
        </p>

        {/* Linha do Tempo / Passo a Passo */}
        <div className="passo-a-passo">

          {/* Passo 1 */}
          <div className="passo-card">
            <div className="passo-numero">1</div>
            <div className="passo-detalhe">
              <div className="passo-header">
                <FaMobileAlt className="passo-icone" />
                <h3>Abra o App Gov.br</h3>
              </div>
              <p>Baixe e abra o aplicativo <strong>Gov.br</strong> no seu celular (ele está disponível na Play Store ou App Store).</p>
            </div>
          </div>

          {/* Passo 2 */}
          <div className="passo-card">
            <div className="passo-numero">2</div>
            <div className="passo-detalhe">
              <div className="passo-header">
                <FaIdCard className="passo-icone" />
                <h3>Digite seu CPF</h3>
              </div>
              <p>Insira o seu CPF na tela inicial e clique em <strong>Continuar</strong>. Na tela seguinte, clique em <strong>"Esqueci minha senha"</strong>.</p>
            </div>
          </div>

          {/* Passo 3 */}
          <div className="passo-card">
            <div className="passo-numero">3</div>
            <div className="passo-detalhe">
              <div className="passo-header">
                <FaCamera className="passo-icone" />
                <h3>Inicie a Validação</h3>
              </div>
              <p>Selecione a opção de <strong>Reconhecimento Facial</strong>. O aplicativo vai pedir permissão para acessar a câmera do seu celular, clique em "Permitir".</p>
            </div>
          </div>

          {/* Passo 4 */}
          <div className="passo-card">
            <div className="passo-numero">4</div>
            <div className="passo-detalhe">
              <div className="passo-header">
                <FaLightbulb className="passo-icone" />
                <h3>Encaixe o Rosto</h3>
              </div>
              <p>Olhe para a câmera dentro do círculo verde na tela. Siga as instruções que aparecem, como piscar os olhos ou ficar imóvel até o sistema carregar.</p>
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
              <p>Se o sistema reconhecer sua foto com sucesso, ele liberará a tela para você digitar e confirmar a sua **nova senha de acesso**.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}