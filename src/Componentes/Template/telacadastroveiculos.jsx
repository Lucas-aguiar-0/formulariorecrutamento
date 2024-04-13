import { useState } from "react";
import CadastroVeiculo from "./cadastroveiculo";
import TabelaVeiculos from "./tabelaveiculo";
import listaVeiculos from "../../Dados/veiculos";


export default function TelaCadastroVeiculo(props){
    const [veiculos, setVeiculos] = useState(listaVeiculos);
    const [exibeTabela,setExibeTabela] = useState(true);
    const [veiculoEscolhido,setVeiculoEscolhido] =useState({});
    const [modoEdicao,setModoEdicao] = useState(false);


    function alternarTelas(){
        setExibeTabela(!exibeTabela)
    }

    return(
        exibeTabela ? <TabelaVeiculos veiculos={veiculos} setVeiculos={setVeiculos} chamartelacadastro={alternarTelas} setVeiculoEscolhido ={setVeiculoEscolhido}
        setModoEdicao={setModoEdicao}/> 
        
        : <CadastroVeiculo ChamarTabelaVeiculo={alternarTelas} veiculoEscolhido={veiculoEscolhido}
        setModoEdicao={setModoEdicao} modoEdicao={modoEdicao}/>
    );
}