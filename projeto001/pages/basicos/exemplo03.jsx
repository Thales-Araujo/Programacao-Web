export default function init(){
    const subtitulo = "estou no subtitulo"
    const resposta = maior_idade(15)
    const conteudo = (        
        <div>
            <h1>Olá mundo JSX!!</h1>
            <h2>{subtitulo}</h2>
            <h3>3+3</h3>
            <h3>{3+3}</h3>
            <h2>{maior_idade(20)}</h2>
            <h2>Resposta é {resposta}</h2>
        </div>
    )
    return conteudo
}

function maior_idade (idade){
    if (idade >= 18){
        return `Você ${idade} é MAIOR de idade`
    }else{
        return "Você é MENOR de idade"
    }
}