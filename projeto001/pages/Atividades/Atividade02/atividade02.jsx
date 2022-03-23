function lista(n){
    const tmp = []
    for (let i = 0; i<= n; i++){
        tmp.push(<span>{i},</span>)
    }
    return tmp
}

export default function init(){
    return (
        <div>
            {lista(5)}
        </div>
    )
}