import React, { useState, useEffect} from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import urlBaseCandidato from '../../utils.js/config';


function CadastroCandidato(props) {
  const [showForm, setShowForm] = useState(false);
  const [cpf, setCpf] = useState('');
  const [mensagem, setMensagem] = useState('');

  const [grauInstrucao, setGrauInstrucao] = useState("");
  const [statusInstrucao, setStatusInstrucao] = useState("");

  const handleGrauInstrucaoChange = (event) => {
    setGrauInstrucao(event.target.value);
  };

  const handleStatusInstrucaoChange = (event) => {
    setStatusInstrucao(event.target.value);
  };
  
  const [candidato, setCandidato] = useState(props.modoEdicao ? props.CandidatoEscolhido:{
    cpf: "",
    nome: "",
    numctps: "",
    serie: "",
    dtnasc: "",
    rg: "",
    orgao_emissor: "",
    endereco: "",
    numero: "",
    bairro: "",
    municipio: "",
    uf: "",
    cep: "",
    naturalidade: "",
    uf_naturalidade: "",
    telefone: "",
    celular: "",
    email: "",
    grau_instrucao: "",
    curso: "",
    n_tituloeleitor: "",
    zona: "",
    n_pis: "",
    cnh_num: "",
    nome_pai: "",
    nome_mae: "",
    estado_civil: "",
    nome_conjuge: "",
    tp_residencia: "",
    certidao_militar_num: "",
    serie_certidao_militar: "",
    categoria: "",
    sn_filhos: "",
});

          function mostrarmensagem(msg){
            const divmensagem=document.getElementById('mensagem')
            divmensagem.innerHTML = `
                <div class="alert alert-info" role="alert">
                    ${msg}
                </div> `;
            setTimeout(()=>{
                divmensagem.innerHTML= '';
            }, 4000);
            }

      function cadastrarcandidato(event){
        event.preventDefault(); // Adicionado para evitar que a página seja recarregada

        const nome = event.target.nome.value;
        const cpf = event.target.cpf.value;
        const numctps = event.target.numctps.value;
        fetch(urlBaseCandidato, {
            method:'POST',
            headers:{
                "Content-Type": 'application/json'
            
            },
            body: JSON.stringify({
                nome: nome,
                cpf: cpf,
                numctps: numctps
            })
        }).then((resposta) => {
            return resposta.json();    
        }).then((dados) => {
            if (dados.status){
                mostrarmensagem(dados.mensagem + ". Os dados foram registrados com sucesso");
                ;
            }
            else{
                mostrarmensagem(dados.mensagem)
            }
        }).catch((erro)=>{
            mostrarmensagem('Erro ao enviar a requisicao ' + erro.message)

        })
      }

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={cadastrarcandidato}>
      <h2>FICHA DE SOLICITAÇÃO DE EMPREGO</h2>
      <Row>
      <Col md={6}>
          <Form.Group controlId="nome">
            <Form.Label>Nome</Form.Label>
            <Form.Control required type="text" placeholder="Digite seu nome completo" minLength="2"/>
            <Form.Control.Feedback type="invalid">
              Por favor, insira o nome completo
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="cpf">
            <Form.Label>CPF</Form.Label>
            <Form.Control required type="text" placeholder="Digite o CPF" minLength="11" />
            <Form.Control.Feedback type="invalid">
              Por favor, preencha o CPF
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="rg">
            <Form.Label>RG</Form.Label>
            <Form.Control required type="text" placeholder="Digite o numero do seu RG" minLength="9"/>
            <Form.Control.Feedback type="invalid">
              Por favor, prencha o numero do RG
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

      </Row>

      <Row>
        <Col>
          <Form.Group controlId="n_ctps">
            <Form.Label>Numero CTPS</Form.Label>
            <Form.Control required type="text" placeholder="Digite o numero da CTPS" />
            <Form.Control.Feedback type="invalid">
              Por favor, insira o numero da Carteira de Trabalho
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group controlId="serie_ctps">
            <Form.Label>Serie</Form.Label>
            <Form.Control required type="number" placeholder="Digite a série da CTPS" />
            <Form.Control.Feedback type="invalid">
              Por favor, insira a serie da ctps
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="dt_nasc">
            <Form.Label>Data Nasc.</Form.Label>
            <Form.Control required type="date" placeholder="Digite sua data de nascimento DD/MM/AAAA" />
            <Form.Control.Feedback type="invalid">
              Por favor, prencha a data de nascimento
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Button id="btcadastrar"variant="primary" className='mb-2 mt-2' type="submit">
        Enviar inscrição
      </Button>
      <Button variant="warning" onClick = {props.ChamarDadosCandidato} className='mb-2 mt-2' type="submit">
        Voltar
      </Button>
    </Form>
  );
}

export default CadastroCandidato;
