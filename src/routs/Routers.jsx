import { Routes, Route } from "react-router-dom";
import App from "../page/App";
import Cadastro from "../page/Cadastro";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </>
  )
}

export default Routers
