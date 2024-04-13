import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Dropdown.Menu show style={{ backgroundColor: '#f8f9fa', borderRadius: '0' }}>
       <Dropdown.Item eventKey="4" as={Link} to="/pagina-inicial" style={{ color: '#007bff' }}>Pagina Inicial</Dropdown.Item>
       <Dropdown.Divider />
      <Dropdown.Item eventKey="2" as={Link} to="/inscricao" style={{ color: '#007bff' }}>Inscrição</Dropdown.Item>
    </Dropdown.Menu>
  );
}

export default Navbar;
