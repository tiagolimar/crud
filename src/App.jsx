import Navbar from './components/Global/Navbar';
import Footer from './components/Global/Footer';
import { Outlet } from 'react-router-dom';
import { PriceProvider } from './context/PriceContext';

function App() {
  return (
    <PriceProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </PriceProvider>
  )
}

export default App
