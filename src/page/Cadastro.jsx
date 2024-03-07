import Nav from "../components/Nav"
import CadastrarCliente from "../components/CadastrarCliente"

const Cadastro = () => {
  return (
    <>
      <div className="d-flex h-100 text-center text-bg-dark">
        <Nav />
      </div>
      <CadastrarCliente />
    </>
  )
}

export default Cadastro
