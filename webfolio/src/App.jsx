import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/custom-theme.scss';


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* Renders the current page */}
      </main>
      <Footer />
    </>
  );
}

export default App;