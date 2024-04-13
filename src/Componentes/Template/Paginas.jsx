import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TelaCadastroVeiculo from './telacadastroveiculos';
import Navbar from "./navbar";
import Cabecalho from "./cabecalhopagina";
import Footer from "./rodape";
import { Container } from 'react-bootstrap';

function Paginas() {
  return (
    <div
    style={{ 
      height: '100vh', 
      width: '100vw' ,
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("./imgfundo.jpeg")`, 
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover',
     }}>
    <div className="App" 
    style={{ 
      height: '90vh', 
      width: '100vw',
      padding: '40px'
    }}>
      <Cabecalho/>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 0.3 }}>
          <Navbar/>
        </div>
        <div style={{ flex: 1 }}>
          <Container>
            <Routes>
              <Route path="/cadastrar-produto" element={<TelaCadastroVeiculo/>}/>
            </Routes>
          </Container>
        </div>
      </div>
     
    </div>
    <div>
    <Footer/>
    </div>
    </div>
  );
}

export default Paginas;
