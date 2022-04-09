import style from '../styles/celula.module.css'

const Cel = ({black = false}) => {
    const CelStyle = black ? `${style.celula} ${style.black}` : style.celula
    return (
        <div className={CelStyle}></div>
    )
}

export default Cel