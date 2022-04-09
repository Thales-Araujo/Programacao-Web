import Cel from "./Celula";

const Lin = ({black = false}) => {
    return (
        <div style={{display: 'flex'}}>
            <Cel black={black} />
            <Cel black={!black} />
            <Cel black={black} />
            <Cel black={!black} />
            <Cel black={black} />
            <Cel black={!black} />
            <Cel black={black} />
            <Cel black={!black} />
        </div>
    )
}
export default Lin