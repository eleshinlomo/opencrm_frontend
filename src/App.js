
import './styles/App.css';
import Nav from './components/Nav'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login'
import Register from './components/Register'
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
    <Nav />
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/register" element={<Register />}/>
    </Routes>
    <Footer />  
    </div>
  );
}

export default App;
