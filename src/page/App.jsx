import Nav from '../components/Nav';
import ClientList from '../components/Client';

const App = () => {
  return (
    <>
      <div className="d-flex h-100 text-center text-bg-dark">
        <Nav />
      </div>
      <ClientList />
    </>
  );
};

export default App;
