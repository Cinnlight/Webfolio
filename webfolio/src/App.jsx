import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/custom-theme.scss';


function App() {
  return (
    <>
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="app-main flex-grow-1">
        <Outlet /> {/* Renders the current page */}
      </main>
      <Footer />
    </div>
    </>
  );
}

export default App;