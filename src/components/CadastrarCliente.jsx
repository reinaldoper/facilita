import { useState } from 'react';
import { getClients } from '../service/fetchApi';

const CadastrarCliente = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    xCoordinate: '',
    yCoordinate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json",
    }

    const options = {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        xCoordinate: formData.xCoordinate,
        yCoordinate: formData.yCoordinate
      })
    }

    const { message } = await getClients(options, "clients");
    alert(message);

  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Telefone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Coordenada X:
          <input
            type="number"
            name="xCoordinate"
            value={formData.xCoordinate}
            onChange={handleChange}
            step="0.01"
            required
          />

        </label>
        <br />
        <label>
          Coordenada Y:
          <input
            type="number"
            name="yCoordinate"
            value={formData.yCoordinate}
            onChange={handleChange}
            step="0.01"
            required
          />

        </label>
        <br />
        <button className='button' type="submit">Criar Dados</button>
      </form>
    </div>
  );
}

export default CadastrarCliente
