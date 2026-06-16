import React, { useState, useEffect } from 'react';
import { supabase } from '../../services/supabase';
import './Comunidade.css';
import { 
  FaArrowLeft, 
  FaPaperPlane, 
  FaUserSecret, 
  FaComments, 
  FaSync, 
  FaReply,
  FaCheckCircle,
  FaTrash,
  FaLock,
  FaSignOutAlt
} from 'react-icons/fa';

export default function Comunidade({ setActiveTab }) {
  const [perguntas, setPerguntas] = useState([]);
  const [novaPergunta, setNovaPergunta] = useState('');
  const [carregando, setCarregando] = useState(false);
  
  const [perguntaAtivaId, setPerguntaAtivaId] = useState(null);
  const [respostas, setRespostas] = useState([]);
  const [novaResposta, setNovaResposta] = useState('');

  // Estados do Easter Egg e Administrador
  const [toques, setToques] = useState(0);
  const [mostrarLoginModal, setMostrarLoginModal] = useState(false);
  const [emailAdmin, setEmailAdmin] = useState('');
  const [senhaAdmin, setSenhaAdmin] = useState('');
  const [adminLogado, setAdminLogado] = useState(false);

  useEffect(() => {
    buscarPerguntas();
    verificarSessaoAdmin();
  }, []);

  // Verifica se o admin já está logado
  const verificarSessaoAdmin = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    setAdminLogado(!!session);
  };

  // Lógica do Easter Egg (5 toques no título)
  const lidarToqueSecreto = () => {
    setToques((prev) => {
      const novosToques = prev + 1;
      if (novosToques >= 5) {
        if (!adminLogado) setMostrarLoginModal(true);
        return 0; // Zera o contador
      }
      return novosToques;
    });
    
    // Zera os toques se a pessoa demorar muito (reset automático em 2 seg)
    setTimeout(() => setToques(0), 2000);
  };

  // Login do Administrador
  const fazerLoginAdmin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailAdmin,
      password: senhaAdmin,
    });

    if (error) {
      alert('Acesso Negado: Credenciais incorretas.');
    } else {
      setAdminLogado(true);
      setMostrarLoginModal(false);
      setEmailAdmin('');
      setSenhaAdmin('');
    }
  };

  // Logout do Administrador
  const sairAdmin = async () => {
    await supabase.auth.signOut();
    setAdminLogado(false);
  };

  const buscarPerguntas = async () => {
    setCarregando(true);
    const { data, error } = await supabase
      .from('perguntas')
      .select('*')
      .order('criado_em', { ascending: false });
    if (!error) setPerguntas(data || []);
    setCarregando(false);
  };

  const lidarEnviarPergunta = async (e) => {
    e.preventDefault();
    if (!novaPergunta.trim()) return;

    const { error } = await supabase
      .from('perguntas')
      .insert([{ texto: novaPergunta.trim(), is_admin: adminLogado }]);

    if (!error) {
      setNovaPergunta('');
      buscarPerguntas();
    }
  };

  const alternarRespostas = async (perguntaId) => {
    if (perguntaAtivaId === perguntaId) {
      setPerguntaAtivaId(null);
      setRespostas([]);
      return;
    }
    setPerguntaAtivaId(perguntaId);
    buscarRespostas(perguntaId);
  };

  const buscarRespostas = async (perguntaId) => {
    const { data, error } = await supabase
      .from('respostas')
      .select('*')
      .eq('pergunta_id', perguntaId)
      .order('criado_em', { ascending: true });
    if (!error) setRespostas(data || []);
  };

  const lidarEnviarResposta = async (e, perguntaId) => {
    e.preventDefault();
    if (!novaResposta.trim()) return;

    const { error } = await supabase
      .from('respostas')
      .insert([{ pergunta_id: perguntaId, texto: novaResposta.trim(), is_admin: adminLogado }]);

    if (!error) {
      setNovaResposta('');
      buscarRespostas(perguntaId);
    }
  };

  // Funções de Exclusão (Apenas Admin)
  const deletarPergunta = async (id) => {
    if (!window.confirm('Tem certeza que deseja excluir esta dúvida e todas as suas respostas?')) return;
    await supabase.from('perguntas').delete().eq('id', id);
    buscarPerguntas();
  };

  const deletarResposta = async (id, perguntaId) => {
    if (!window.confirm('Excluir esta resposta?')) return;
    await supabase.from('respostas').delete().eq('id', id);
    buscarRespostas(perguntaId);
  };

  return (
    <div className="comunidade-container">
      {/* Cabeçalho */}
      <div className="interno-header">
        <button className="btn-voltar" onClick={() => setActiveTab('inicio')}>
          <FaArrowLeft />
        </button>
        {/* EASTER EGG AQUI: onClick no Título */}
        <h2 onClick={lidarToqueSecreto} style={{ userSelect: 'none' }}>
          Comunidade {adminLogado && '🛡️'}
        </h2>
        <div className="header-actions">
          {adminLogado && (
            <button className="btn-sair-admin" onClick={sairAdmin}>
              <FaSignOutAlt /> Sair
            </button>
          )}
          <button className="btn-atualizar" onClick={buscarPerguntas} disabled={carregando}>
            <FaSync className={carregando ? 'girando' : ''} />
          </button>
        </div>
      </div>

      <div className="comunidade-conteudo">
        
        {/* Modal Secreto de Login */}
        {mostrarLoginModal && (
          <div className="modal-admin-overlay">
            <div className="modal-admin-box">
              <h3><FaLock /> Acesso Restrito</h3>
              <form onSubmit={fazerLoginAdmin}>
                <input 
                  type="email" 
                  placeholder="E-mail" 
                  value={emailAdmin} 
                  onChange={(e) => setEmailAdmin(e.target.value)} 
                  required 
                />
                <input 
                  type="password" 
                  placeholder="Senha" 
                  value={senhaAdmin} 
                  onChange={(e) => setSenhaAdmin(e.target.value)} 
                  required 
                />
                <div className="modal-botoes">
                  <button type="button" className="btn-cancelar" onClick={() => setMostrarLoginModal(false)}>Cancelar</button>
                  <button type="submit" className="btn-entrar">Entrar</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Caixa de Publicar */}
        <div className="caixa-publicar">
          <div className="publicar-header">
            {adminLogado ? <FaCheckCircle className="icone-oficial" /> : <FaUserSecret className="icone-anonimo" />}
            <span>{adminLogado ? 'Publicar Comunicado Oficial' : 'Publicar dúvida anonimamente'}</span>
          </div>
          <form onSubmit={lidarEnviarPergunta} className="form-publicar">
            <textarea
              placeholder="Digite aqui..."
              value={novaPergunta}
              onChange={(e) => setNovaPergunta(e.target.value)}
              maxLength={300}
            />
            <button type="submit" className={`btn-enviar-feed ${adminLogado ? 'admin-btn' : ''}`} disabled={!novaPergunta.trim()}>
              <FaPaperPlane /> {adminLogado ? 'Publicar como INSS Orienta' : 'Publicar Dúvida'}
            </button>
          </form>
        </div>

        <h3 className="titulo-feed">Feed da Comunidade</h3>

        {/* Lista de Perguntas */}
        <div className="feed-perguntas">
          {perguntas.map((pergunta) => (
            <div key={pergunta.id} className={`card-pergunta ${pergunta.is_admin ? 'card-oficial' : ''}`}>
              
              <div className="pergunta-header-flex">
                <div className="pergunta-meta">
                  {pergunta.is_admin ? (
                    <span className="autor-oficial"><FaCheckCircle /> INSS Orienta (Oficial)</span>
                  ) : (
                    <span className="autor-anonimo"><FaUserSecret /> Cidadão Anônimo</span>
                  )}
                </div>
                {/* BOTÃO EXCLUIR ADMIN */}
                {adminLogado && (
                  <button className="btn-excluir" onClick={() => deletarPergunta(pergunta.id)}>
                    <FaTrash />
                  </button>
                )}
              </div>

              <p className="pergunta-texto">{pergunta.texto}</p>
              
              <button 
                className={`btn-comentarios ${perguntaAtivaId === pergunta.id ? 'ativo' : ''}`}
                onClick={() => alternarRespostas(pergunta.id)}
              >
                <FaComments /> {perguntaAtivaId === pergunta.id ? 'Fechar Respostas' : 'Ver / Responder'}
              </button>

              {/* Área de Respostas Expandida */}
              {perguntaAtivaId === pergunta.id && (
                <div className="secao-respostas">
                  <div className="lista-respostas">
                    {respostas.map((res) => (
                      <div key={res.id} className={`item-resposta ${res.is_admin ? 'resposta-oficial-box' : ''}`}>
                        <div className="resposta-header-flex">
                          {res.is_admin ? (
                            <span className="resposta-oficial"><FaCheckCircle /> INSS Orienta:</span>
                          ) : (
                            <span className="resposta-autor"><FaUserSecret /> Cidadão:</span>
                          )}
                          {/* BOTÃO EXCLUIR RESPOSTA ADMIN */}
                          {adminLogado && (
                            <button className="btn-excluir-mini" onClick={() => deletarResposta(res.id, pergunta.id)}>
                              <FaTrash />
                            </button>
                          )}
                        </div>
                        <p className="resposta-texto">{res.texto}</p>
                      </div>
                    ))}
                  </div>

                  {/* Formulário para Responder */}
                  <form onSubmit={(e) => lidarEnviarResposta(e, pergunta.id)} className="form-responder">
                    <input 
                      type="text" 
                      placeholder={adminLogado ? "Responder como INSS Orienta..." : "Escreva uma resposta..."}
                      value={novaResposta}
                      onChange={(e) => setNovaResposta(e.target.value)}
                      maxLength={250}
                    />
                    <button type="submit" className={`btn-enviar-resposta ${adminLogado ? 'admin-btn' : ''}`} disabled={!novaResposta.trim()}>
                      <FaReply />
                    </button>
                  </form>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}