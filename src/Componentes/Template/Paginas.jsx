import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TelaCadastroCandidato from './telacadastrocandidato';
import Navbar from "./navbar";
import Cabecalho from "./cabecalhopagina";
import Footer from "./rodape";
import Home from './paginainicial';
import { Container } from 'react-bootstrap';


function Paginas() {
  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      width: '100vw',
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("./imgfundo.jpeg")`, 
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover',
    }}>
      <div className="App" style={{ flex: 1, }}>
        <Cabecalho/>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ flex: 0.3 }}>
            <Navbar/>
            
          </div>
          <div style={{ flex: 1 }}>
            <Container>
              <Routes>
                <Route path="/inscricao" element={<TelaCadastroCandidato/>}/>
                <Route path="/pagina-inicial" element={<Home/>}/>
              </Routes>
            </Container>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Paginas;
