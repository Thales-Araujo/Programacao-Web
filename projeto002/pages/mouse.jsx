import { useState } from "react"

export default function init(){
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const estilo = {height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}

    function move(e){
        console.log(e.clientX, e.clientY)
    }

    function movimento(e){
        console.log(e)
    }
    return (
        <div style={{height:"100vh"}} onMouseMove={movimento}></div>
    )
}