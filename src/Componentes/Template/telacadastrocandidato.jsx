import { useState } from "react";
import CadastroCandidato from "./cadastrocandidato";
import DadosCandidato from "./telacandidato";


export default function TelaCadastroCandidato(props){
    const [exibeTabela,setExibeTabela] = useState(true);


    function alternarTelas(){
        setExibeTabela(!exibeTabela)
    }

    return(
        exibeTabela ? <DadosCandidato chamartelacadastro={alternarTelas} /> 
        
        : <CadastroCandidato ChamarDadosCandidato={alternarTelas}/>
    );
}