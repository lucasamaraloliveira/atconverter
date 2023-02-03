
import Home from './components/pages/Home';
import Base64xImg from './components/pages/Base64xImg';
import ImageToBase64 from './components/pages/ImgxBase64';
import Navbar from './components/layout/Navbar';

import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/base64ximg" element={<Base64xImg />} />
      <Route path="/imgxbase64" element={<ImageToBase64 />} />
      </Routes>
      
      
      
    
    </Router>
  )
}

export default App
