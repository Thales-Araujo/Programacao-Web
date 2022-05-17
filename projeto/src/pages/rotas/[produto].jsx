import { useRouter } from "next/router"

export default function init(){
    const router = useRouter()
    const prod = router.query.produto
    return(
      <>
        <h1>Detalhes do Produto: {prod} </h1>
        <h1>em rotas/[produto].jsx</h1>
      </>
    )
}