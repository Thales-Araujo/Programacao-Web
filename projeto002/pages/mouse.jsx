import { useState } from "react"

export default function init(){
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const estilo = {height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}

    function move(e){
        console.log(e.clientX, e.clientY)
        setX(e.clientX)
        setY(e.clientY)
    }


    return (
        <div style={estilo} onMouseMove={move}>
        <span>Coordenada x: {x}</span>
        <span>Coordenada y: {y}</span>
        </div>
    )
}