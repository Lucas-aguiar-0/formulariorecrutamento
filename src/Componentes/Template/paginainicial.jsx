import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import gifInspirador from './icones/despertando-a-motivacao-explore-o-poder-dos-gifs-inspiradores-16.gif';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#f8f9fa' }}>
      
        <h1>Bem-vindo ao Recrutamento Online!</h1>
        <p>
          Aqui você pode encontrar as melhores oportunidades e aplicar para vagas que se encaixam no seu perfil.
        </p>
        <p>
          <img src={gifInspirador} alt="GIF Inspirador" />
        </p>
        <p>
          <Button variant="primary" as={Link} to="/inscricao">CANDIDATE-SE</Button>
        </p>
        <p>
        "Descubra seu potencial com nosso recrutamento online. Conecte-se a oportunidades incríveis do conforto da sua casa. Transforme sua carreira conosco, comece agora!"
        </p>
      
    </div>
  );
}
