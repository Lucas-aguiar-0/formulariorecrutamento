import { Navbar } from 'react-bootstrap';

export default function Cabecalho(props){
    return(
        <Navbar style={{ backgroundColor: '#343a40' }} className="justify-content-center">
        <Navbar.Brand style={{ fontFamily: 'Arial', color: '#fff' }}><h1>Recrutamento Online</h1></Navbar.Brand>
    </Navbar>
    );
}
