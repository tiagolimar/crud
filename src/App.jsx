import Navbar from './components/Global/Navbar';
import Footer from './components/Global/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
