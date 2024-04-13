import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext, useState } from 'react';
import ContextoUsuario from './Contexto/contexto';


export default function TelaLogin(props) {
    const [usuario, setUsuario] = useContext(ContextoUsuario);
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [senha, setSenha] = useState('');

    function VerificarCredenciais(){
        if (nomeUsuario === 'Lucas' && senha === '123'){
    
            setUsuario({
                nome: nomeUsuario,
                logado:true
            })
        }
    }
    

  return (
    <div className='container d-flex align-items-center justify-content-center w-50'>   
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Usuario</Form.Label>
        <Form.Control type="email" placeholder="Insira o nome de usuario" 
        id='nomeUsuario' 
        name='nomeUsuario'
        value={nomeUsuario}
        onChange={(e)=> setNomeUsuario(e.target.value)}
        />
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Digite sua senha" 
        id='senha'
        name='senha'
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        />
      </Form.Group>
      
      <Button variant="primary" type="button"
      onClick={()=>{
        VerificarCredenciais();
      }}
      >
        Login
      </Button>
    </Form>
    </div>
 
  );
}