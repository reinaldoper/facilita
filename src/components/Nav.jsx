import '../styles/App.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="cover-container d-flex w-100 h-100 p-4 mx-auto flex-column">
      <header className="mb-auto">
        <div>
          <h3 className="float-md-start mb-0">Clients</h3>
          <nav className="nav nav-masthead justify-content-center">
            <Link className="nav-link fw-bold py-1 px-0 active" aria-current="page" to="/">Home</Link>
            <Link className="nav-link fw-bold py-1 px-0 fluter" to="/cadastro">Register</Link>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Nav
