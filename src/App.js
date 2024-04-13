import { useState } from "react";
import Paginas from "./Componentes/Template/Paginas";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Paginas/>
    </BrowserRouter>
  );
}

export default App;
