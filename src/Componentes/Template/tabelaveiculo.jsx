import Table from 'react-bootstrap/Table';
import { IconeEditar, IconeExcluir } from '../Template/icones/icones';
import { Button } from 'react-bootstrap';

export default function TabelaVeiculos(props){
    function excluirVeiculos(placa){
      const novaLista = props.veiculos.filter(veiculo => veiculo.placa != placa);
      props.setVeiculos(novaLista);
    }

    function alterarVeiculo(veiculo){
      props.setVeiculoEscolhido(veiculo);
      props.chamartelacadastro();
      props.setModoEdicao(true);
    }
    return (
        <div>
        <Button onClick = {props.chamartelacadastro} className='mb-2 mt-2'>Cadastrar</Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Código</th>
              <th>CPF</th>
              <th>Modelo</th>
              <th>Cor</th>
              <th>Renavam</th>
              <th>Chassi</th>
              <th>Ano de Fabricação</th>
              <th>Tipo de Combustível</th>
              <th colSpan='2' >Ações</th>
            </tr>
          </thead>
          <tbody>
            {
            props.veiculos.map((veiculo, i) => {
              return(
              <tr key={i}>
                <td>{veiculo.codigo}</td>
                <td>{veiculo.placa}</td>
                <td>{veiculo.modelo}</td>
                <td>{veiculo.cor}</td>
                <td>{veiculo.renavam}</td>
                <td>{veiculo.chassi}</td>
                <td>{veiculo.anofabricacao}</td>
                <td>{veiculo.tipocombustivel}</td>
                <td>
                  <Button variant='warning'
                  onClick={()=> {alterarVeiculo(veiculo)}}
                  ><IconeEditar/>
                  
                  </Button>{' '}</td><td>
                  <Button variant='danger'onClick={()=> {excluirVeiculos(veiculo.placa)}}><IconeExcluir 
                  /></Button>
                </td>
              </tr>
              );
              })
            }
          </tbody>
        </Table>
        </div>
      );
}
