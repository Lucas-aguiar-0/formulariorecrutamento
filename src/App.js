import { useState } from "react";
import Paginas from "./Componentes/Template/Paginas";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import TelaLogin from "./Componentes/Template/login";
import ContextoUsuario from "./Componentes/Template/Contexto/contexto";
function App() {
  const [usuario, setUsuario] = useState({
    nome:'',
    logado:false
  })

  if (!usuario.logado){
    return(
      <ContextoUsuario.Provider value={[usuario, setUsuario]}>
    <TelaLogin/>
    </ContextoUsuario.Provider>
    );
  }
  else{
  return (
    <ContextoUsuario.Provider value={[usuario, setUsuario]}>
    <BrowserRouter>
      <Paginas/>
    </BrowserRouter>
    </ContextoUsuario.Provider>
  );
}
}


export default App;
