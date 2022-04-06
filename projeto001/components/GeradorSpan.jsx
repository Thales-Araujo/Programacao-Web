export default function GeradorSpan (props) {
    function lista () {
        const tmp = []
        for (let i = 0; i<= props.numero; i++) {
        tmp.push(<span>{i},</span>)
        }
        return tmp
    }
     
    return (
        <div>{lista()}</div>
    )
             
}
