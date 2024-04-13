import { Navbar } from 'react-bootstrap';
import { useContext } from 'react';
import ContextoUsuario from './Contexto/contexto';


export default function Cabecalho(props){
    const [usuario,setUsuario] = useContext(ContextoUsuario)
    return(
        <Navbar bg="light" className="justify-content-center">
        <Navbar.Brand style={{ fontFamily: 'Arial'}}><h1>Sistema de Cadastro</h1></Navbar.Brand>
    </Navbar>
    );
}