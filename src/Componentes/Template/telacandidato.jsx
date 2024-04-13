import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import gifOpostos from './icones/opostos.jpg';


export default function TelaRecrutamento(props) {
  const [showForm, setShowForm] = useState(false);
  const [cpf, setCpf] = useState('');
  const [vaga, setVaga] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para lidar com a desistência da vaga
    console.log(`CPF: ${cpf}, Vaga: ${vaga}`);
    setShowForm(false);
  };

  if (showForm) {
    return (
      <div>
        
        <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
          <Form.Group controlId="formCpf">
            <Form.Label>CPF</Form.Label>
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
          <div>
          <Row className="justify-content-center">
          <Col xs="auto">
          <Button variant="primary" type="submit">Confirmar Desistência</Button>
          </Col >
          <Col  xs="auto">
          <Button variant="secondary" onClick={() => setShowForm(false)}>Cancelar</Button>
          </Col>
          </Row>
          </div>
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
