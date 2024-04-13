import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ContextoUsuario from './Contexto/contexto';


function Navbar() {
  const [usuario,setUsuario] = useContext(ContextoUsuario);
  return (
    <Dropdown.Menu show>
      <Dropdown.Item eventKey="2" as={Link} to="/cadastrar-produto">Cadastrar Veiculo</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4" as={Link} to="/area-do-usuario">Area do Usuario</Dropdown.Item>
      <Dropdown.Item href="#" style={{color:'red'}}
      onClick={()=> {
        setUsuario({
          nome:'',
          logado:false
        })

      }}
      
      >Logout</Dropdown.Item>
    </Dropdown.Menu>
  );
}

export default Navbar;
