import React, { useState} from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import urlBaseCandidato from '../../utils.js/config';


function CadastroCandidato(props) {
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

        function cadastrarcandidato(event){
          event.preventDefault(); // Adicionado para evitar que a página seja recarregada

          const nome = event.target.nome.value;
          const cpf = event.target.cpf.value;
          const numctps = event.target.numctps.value;
          const serie = event.target.serie.value; 
          const dtnasc = event.target.dtnasc.value; 
          const rg = event.target.rg.value; 

          fetch(urlBaseCandidato, {
              method:'POST',
              headers:{
                  "Content-Type": 'application/json'
              
              },
              body: JSON.stringify({
                  nome: nome,
                  cpf: cpf,
                  numctps: numctps,
                  serie: serie,
                  dtnasc: dtnasc,
                  rg: rg
              })
          }).then((resposta) => {
              return resposta.json();    
          }).then((dados) => {
              if (dados.status){
                alert(dados.mensagem + ". Os dados foram registrados com sucesso"); // Adicionado alert
                  
              }
              else{
                alert(dados.mensagem); // Adicionado alert
              }
          }).catch((erro)=>{
              alert('Erro ao enviar a requisicao ' + erro.message); // Adicionado alert

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
          <Form.Group controlId="numctps">
            <Form.Label>Numero CTPS</Form.Label>
            <Form.Control required type="text" placeholder="Digite o numero da CTPS" />
            <Form.Control.Feedback type="invalid">
              Por favor, insira o numero da Carteira de Trabalho
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group controlId="serie">
            <Form.Label>Serie</Form.Label>
            <Form.Control required type="number" placeholder="Digite a série da CTPS" />
            <Form.Control.Feedback type="invalid">
              Por favor, insira a serie da ctps
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="dtnasc">
            <Form.Label>Data Nasc.</Form.Label>
            <Form.Control required type="date" placeholder="Digite sua data de nascimento DD/MM/AAAA" />
            <Form.Control.Feedback type="invalid">
              Por favor, prencha a data de nascimento
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

    {/*Até aqui estava tudo funcionando*/}

    <Row>
      <Col md={4}>
      <Form.Group controlId="grau_instrucao">
        <Form.Label>Grau de Instrução</Form.Label>
        <Form.Control as="select" required onChange={handleGrauInstrucaoChange}>
          <option value=""></option>
          <option value="ensinofundamental">Ensino Fundamental</option>
          <option value="ensinomedio">Ensino Médio</option>
          <option value="ensinosuperior">Ensino Superior</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          Por favor, selecione o grau de instrução
        </Form.Control.Feedback>
      </Form.Group>
      </Col>
      {(grauInstrucao === "ensinofundamental" || grauInstrucao === "ensinomedio" || grauInstrucao === "ensinosuperior" ) && (
        <Col md={3}>
        <Form.Group controlId="status_instrucao">
          <Form.Label>Status</Form.Label>
          <Form.Control as="select" required onChange={handleStatusInstrucaoChange}>
            <option value=""></option>
            <option value="completo">Completo</option>
            <option value="incompleto">Incompleto</option>
            <option value="incompleto">Cursando</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Selecione o status
          </Form.Control.Feedback>
        </Form.Group>
        </Col>
      )}
    

    <Col>
          <Form.Group controlId="Curso">
            <Form.Label>Nome do Curso</Form.Label>
            <Form.Control required type="text" placeholder="Digite o nome do curso que concluiu ou está cursando" />
            <Form.Control.Feedback type="invalid">
              Prencha o nome do Curso
            </Form.Control.Feedback>
          </Form.Group>
    </Col>

    </Row>

    <Row>
        <Col md={7}>
          <Form.Group controlId="endereco">
            <Form.Label>Endereco</Form.Label>
            <Form.Control required type="text" placeholder="Digite seu endereço" minLength="3"/>
            <Form.Control.Feedback type="invalid">
              Por favor, prencha o endereco corretamente
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="numero">
            <Form.Label>N°</Form.Label>
            <Form.Control required type="text" placeholder="N°" />
            <Form.Control.Feedback type="invalid">
            Preencha o N°
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="bairro">
            <Form.Label>Bairro</Form.Label>
            <Form.Control required type="text" placeholder="Digite o Bairro" />
            <Form.Control.Feedback type="invalid">
              Preencha o Bairro
            </Form.Control.Feedback>
          </Form.Group>
        </Col>


      </Row>
        <Row>
       
        <Col md={6}>
          <Form.Group controlId="municipio">
            <Form.Label>Municipio</Form.Label>
            <Form.Control required type="text" placeholder="Digite a cidade" />
            <Form.Control.Feedback type="invalid">
              Preencha a cidade
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="cep">
            <Form.Label>CEP</Form.Label>
            <Form.Control required type="text" placeholder="Digite o CEP" />
            <Form.Control.Feedback type="invalid">
              Preencha o CEP
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md ={2}>
          <Form.Group controlId="uf">
            <Form.Label>UF</Form.Label>
            <Form.Control as="select" required>
              <option value="">Selecione...</option>
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AP">AP</option>
              <option value="AM">AM</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MT">MT</option>
              <option value="MS">MS</option>
              <option value="MG">MG</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PR">PR</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RS">RS</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="SC">SC</option>
              <option value="SP">SP</option>
              <option value="SE">SE</option>
              <option value="TO">TO</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Por favor, preencha o Estado
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        </Row>

        <Row>
          <Col>
                  <Form.Group controlId="naturalidade">
            <Form.Label>Naturalidade</Form.Label>
            <Form.Control required type="text" placeholder="Digite sua naturalidade" />
            <Form.Control.Feedback type="invalid">
              Por favor, preencha a naturalidade
            </Form.Control.Feedback>
          </Form.Group>
          </Col>
          <Col md={2}>
          <Form.Group controlId="uf_naturalidade">
            <Form.Label>UF</Form.Label>
            <Form.Control as="select" required>
            
              <option value="">Selecione...</option>
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AP">AP</option>
              <option value="AM">AM</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MT">MT</option>
              <option value="MS">MS</option>
              <option value="MG">MG</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PR">PR</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RS">RS</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="SC">SC</option>
              <option value="SP">SP</option>
              <option value="SE">SE</option>
              <option value="TO">TO</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Por favor, preencha a UF da naturalidade
            </Form.Control.Feedback>
          </Form.Group>
          </Col>
        </Row>
        <Row>

        <Col md={3}>
        <Form.Group controlId="telefone">
          <Form.Label>Telefone</Form.Label>
          <Form.Control required type="text" placeholder="Digite seu telefone" />
          <Form.Control.Feedback type="invalid">
            Por favor, preencha o telefone
          </Form.Control.Feedback>
        </Form.Group>
        </Col>
        <Col md={3}>
        <Form.Group controlId="celular">
          <Form.Label>Celular</Form.Label>
          <Form.Control required type="text" placeholder="Digite seu celular" />
          <Form.Control.Feedback type="invalid">
            Por favor, preencha o celular
          </Form.Control.Feedback>
        </Form.Group>
        </Col>
        <Col md={6}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control required type="email" placeholder="Digite seu email" />
          <Form.Control.Feedback type="invalid">
            Por favor, preencha o email
          </Form.Control.Feedback>
        </Form.Group>
        </Col>

        </Row>
        <Row>
        <Col md={7}>
        <Form.Group controlId="n_tituloeleitor">
          <Form.Label>Número do Título de Eleitor</Form.Label>
          <Form.Control required type="text" placeholder="Digite o número do seu título" />
          <Form.Control.Feedback type="invalid">
            Por favor, preencha o número do título de eleitor
          </Form.Control.Feedback>
        </Form.Group>
        </Col>

        <Col>
        <Form.Group controlId="zona">
          <Form.Label>Zona Eleitoral</Form.Label>
          <Form.Control required type="text" placeholder="Digite sua zona eleitoral" />
          <Form.Control.Feedback type="invalid">
            Por favor, preencha a zona eleitoral
          </Form.Control.Feedback>
        </Form.Group>
        </Col>
        </Row>
       <Row>
          <Col md={6}>
            <Form.Group controlId="n_pis">
              <Form.Label>Número do PIS</Form.Label>
              <Form.Control required type="text" placeholder="Digite o número do seu PIS" />
              <Form.Control.Feedback type="invalid">
                Por favor, preencha o número do PIS
              </Form.Control.Feedback>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="cnh_num">
              <Form.Label>Número da CNH</Form.Label>
              <Form.Control required type="text" placeholder="Digite o número da sua CNH" />
              <Form.Control.Feedback type="invalid">
                Por favor, preencha o número da CNH
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          </Row>

          <Row>
          <Col>
            <Form.Group controlId="nome_pai">
              <Form.Label>Nome do Pai</Form.Label>
              <Form.Control required type="text" placeholder="Digite o nome do seu pai" />
              <Form.Control.Feedback type="invalid">
                Por favor, preencha o nome do pai
              </Form.Control.Feedback>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="nome_mae">
              <Form.Label>Nome da Mãe</Form.Label>
              <Form.Control required type="text" placeholder="Digite o nome da sua mãe" />
              <Form.Control.Feedback type="invalid">
                Por favor, preencha o nome da mãe
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          </Row>
        

        <Row>
          <Col>
            <Form.Group controlId="estado_civil">
              <Form.Label>Estado Civil</Form.Label>
              <Form.Control as="select" required>
                <option value="">Selecione...</option>
                <option value="solteiro">Solteiro(a)</option>
                <option value="casado">Casado(a)</option>
                <option value="divorciado">Divorciado(a)</option>
                <option value="viuvo">Viúvo(a)</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Por favor, preencha o estado civil
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={7}>
            <Form.Group controlId="nome_conjuge">
              <Form.Label>Nome do Cônjuge</Form.Label>
              <Form.Control required type="text" placeholder="Digite o nome do seu cônjuge" />
              <Form.Control.Feedback type="invalid">
                Por favor, preencha o nome do cônjuge
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={2}>
          <Form.Group controlId="sn_filhos">
            <Form.Label>Tem Filhos?</Form.Label>
            <Form.Control as="select" required>
              <option value="">...</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Por favor, informe se tem filhos
            </Form.Control.Feedback>
          </Form.Group>
          </Col>
        </Row>

        <Row>
        <Col md={6}>
          <Form.Group controlId="tp_residencia">
            <Form.Label>Tipo de Residência</Form.Label>
            <Form.Control as="select" required>
              <option value="">Selecione...</option>
              <option value="sim">Alugada</option>
              <option value="nao">Própria</option>
              </Form.Control>
            <Form.Control.Feedback type="invalid">
              Por favor, preencha o tipo de residência
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col md={6}>
          <Form.Group controlId="certidao_militar_num">
            <Form.Label>Número da Certidão Militar</Form.Label>
            <Form.Control required type="text" placeholder="Digite o número da sua certidão militar" />
            <Form.Control.Feedback type="invalid">
              Por favor, preencha o número da certidão militar
            </Form.Control.Feedback>
          </Form.Group>
          </Col>
          <Col>
          <Form.Group controlId="serie_certidao_militar">
            <Form.Label>Série da Certidão Militar</Form.Label>
            <Form.Control required type="text" placeholder="Digite a série da sua certidão militar" />
            <Form.Control.Feedback type="invalid">
              Por favor, preencha a série da certidão militar
            </Form.Control.Feedback>
          </Form.Group>
          </Col>
          <Col>
          <Form.Group controlId="categoria">
            <Form.Label>Categoria</Form.Label>
            <Form.Control required type="text" placeholder="Digite a categoria da sua certidão militar" />
            <Form.Control.Feedback type="invalid">
              Por favor, preencha a categoria da certidão militar
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
