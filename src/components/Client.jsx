import { useState, useEffect } from "react";
import { getClients } from "../service/fetchApi";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../styles/App.css';

function Client() {
  const [clients, setClients] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [optimizedRoute, setOptimizedRoute] = useState([]);
  const [show, setShow] = useState(false);

  const fechaModal = () => {
    setShow(false);
    setShowModal(false);
  }
 
  useEffect(() => {
    // Chamada à API para obter a lista de clientes
    axios.get('http://localhost:3000/api')
      .then((response) => setClients(response.data.message))
      .catch((error) => console.error(error));
  }, []);



  const handleOptimizeRoute = async () => {
    const headers = {
      "method": "GET",
      "Accept": "application/json"
    }

    const { message } = await getClients(headers, "optimize-route")

    setOptimizedRoute(message);
    setShowModal(true);
    setShow(true);
  };

  const modal = () => {
    return (
      <>
      <Modal show={show} onHide={fechaModal}>
        <Modal.Header closeButton>
          <Modal.Title>Routes optimized</Modal.Title>
        </Modal.Header>
        <Modal.Body><ul className="list-group">
          { optimizedRoute.length && optimizedRoute.map((client) => (
            <li className="list-group-item list" key={client.id}>{`${client.name}-(${client.xcoordinate}, ${client.ycoordinate})`}</li>
          ))}
        </ul></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={fechaModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    )
  }



  return (
    <>
      <div className="container-app">
        <h2>Lista de Clientes</h2>
        <button onClick={handleOptimizeRoute}>Otimizar Rota</button>
        {showModal && modal()}
      </div>

      {/* Renderizar a lista de clientes */}
      <ul className="list-group">
        {clients.length ? clients.map((client) => (
          <li className="list-group-item list" key={client.id}>{`${client.name} - (${client.xcoordinate}, ${client.ycoordinate})`}</li>
        )): <h1>Carregando...</h1>}
      </ul>
    </>
  )
}

export default Client
