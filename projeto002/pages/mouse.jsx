export default function init(){
    function movimento(e){
        console.log(e)
    }
    return (
        <div style={{height:"100vh"}} onMouseMove={movimento}></div>
    )
}