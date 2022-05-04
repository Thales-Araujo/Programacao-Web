function megasena(qtd=6, numeros=[]) {
    if (qtd < 6 || qtd > 15){
        throw 'Quantidade Invalida'
    }
    if (numeros.lengh() === qtd){
        return numeros.sort((a,b)=> a - b)
    }      
    const aleatorio = parseInt(Math.random()*60) + 1
    if (!numeros.includes(aleatorio)){
        return megasena(qtd,[...numeros,aleatorio])
    }
    return megasena(qtd,numeros)
    
}