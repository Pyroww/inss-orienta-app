import React, { useEffect, useState } from 'react';
import './splash.css';
import logoGov from '../../assets/abertura/images.png'; // 👈 Coloque o caminho da sua logo aqui!

export default function SplashScreen({ aoFinalizar }) {
  const [faseAnimacao, setFaseAnimacao] = useState('parado'); 

  useEffect(() => {
    // 1. A logo fica parada na tela por 1.2 segundos para o cérebro registrar
    const timerZoom = setTimeout(() => {
      setFaseAnimacao('animando');
    }, 1200);

    // 2. Espera a animação de zoom terminar (mais 0.8s) e avisa o App para destruir a tela
    const timerDestruicao = setTimeout(() => {
      aoFinalizar();
    }, 2000);

    return () => {
      clearTimeout(timerZoom);
      clearTimeout(timerDestruicao);
    };
  }, [aoFinalizar]);

  return (
    <div className={`splash-container ${faseAnimacao === 'animando' ? 'fade-out' : ''}`}>
      <img 
        src={logoGov} 
        alt="Iniciando INSS Orienta" 
        className={`splash-logo ${faseAnimacao === 'animando' ? 'zoom-in' : ''}`} 
      />
    </div>
  );
}