import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact-us' element={<Contact/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
