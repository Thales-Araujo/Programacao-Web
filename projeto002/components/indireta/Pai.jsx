import Filho from "./Filho"

export default function Pai () {
    function conversaPai() {
        console.log('Msg pro Pai')
        console.log(param)
    }
    return(
        <div>
            <Filho funcao={conversaPai} />
        </div>
    )
}