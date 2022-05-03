import { useState } from "react";

export default function init(){
    const [x, setValor] = useState(0)

    function somaValor(){
        setValor(x+1)
    }

    function subtraiValor(){
        setValor(x-1)
    }

    const estilo = {height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}
    const estiloBotao = {height:"6vh",width:"6vh"}
    const estiloInput = {height:"7vh",width:"12vh"}
    
    return(
        <div style={estilo}>
            
            <input type="text" value= {x} style={estiloInput}/>
            <span><button onClick={subtraiValor} style={estiloBotao}> - </button><button onClick={somaValor} style={estiloBotao}> + </button></span>
    
        </div>
        
    )




}