import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import gifOpostos from './icones/opostos.jpg';
import urlBaseCandidato from '../../utils.js/config';


export default function TelaRecrutamento(props) {
  const [showForm, setShowForm] = useState(false);
  const [cpf, setCpf] = useState('');
  const [vaga, setVaga] = useState('');
  const [acao, setAcao] = useState('padrao');
  const [mensagem, setMensagem] = useState('');

  const handleExcluirClick = () => {
    setAcao('excluir');
    excluirCandidato();
  };

  const handleCancelarClick = () => {
    setAcao('padrao');
  };

  const excluirCandidato = () => {
    if(window.confirm('Confirma a Exclusão do candidato selecionado?')){
        fetch(urlBaseCandidato, {
            method:'DELETE',
            headers:{ "Content-Type": 'application/json'},
            body: JSON.stringify({
                cpf: cpf
            })
        }).then((resposta)=>{
            if(resposta.ok) return resposta.json();
        }).then((dados)=>{
            setMensagem(dados.mensagem);
        }).catch((erro) =>{
            console.log(erro);
            setMensagem(erro.message);
        })
    }
  };


  if (showForm) {
    return (
      <div>
        <p>{mensagem}</p>
        <Form onSubmit={handleExcluirClick}>
        <Row>
          <Col>
          <Form.Group controlId="Formcpf">
            <Form.Label id="cpf" >CPF</Form.Label>
            <Form.Control type="text" placeholder="Digite seu CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
          </Form.Group>
          </Col>
          <Col>
          <Form.Group controlId="formVaga">
            <Form.Label>Nome da Vaga</Form.Label>
            <Form.Control type="text" placeholder="Digite o nome da vaga" value={vaga} onChange={(e) => setVaga(e.target.value)} required />
          </Form.Group>
          </Col>
          </Row>
          <br></br>
          <Button variant="danger" className='mb-2 mt-2' onClick={handleExcluirClick}>Desistir de uma vaga</Button>
          <Button variant="secondary" className='mb-2 mt-2' onClick={handleCancelarClick}>Cancelar</Button>
        </Form>
        
      </div>
    );
  }

  return (
    <div>
      <p>
      <img src={gifOpostos} alt="GIF Opostos" />
      </p>
      <Button onClick = {props.chamartelacadastro} className='mb-2 mt-2'>Me candidatar a uma vaga</Button>
      <Button variant="danger" className='mb-2 mt-2' onClick={() => setShowForm(true)}>Desistir de uma vaga</Button>
    </div>
  );
}
