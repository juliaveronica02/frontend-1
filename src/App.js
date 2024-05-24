import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Error from './components/error/error'
import Home from './pages/home/home'
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;