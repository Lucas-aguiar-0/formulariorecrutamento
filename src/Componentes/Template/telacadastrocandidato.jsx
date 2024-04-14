import { useState, useEffect } from "react";
import CadastroCandidato from "./cadastrocandidato";
import DadosCandidato from "./telacandidato";
import urlBaseCandidato from "../../utils.js/config";

export default function TelaCadastroCandidato(props){
    const [exibeTabela,setExibeTabela] = useState(true);
   

    useEffect(()=>{},)
    function alternarTelas(){
        setExibeTabela(!exibeTabela)
    }

    return(
        exibeTabela ? <DadosCandidato chamartelacadastro={alternarTelas} /> 
        
        : <CadastroCandidato ChamarDadosCandidato={alternarTelas}/>
    );
}