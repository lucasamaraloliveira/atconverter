
import Home from './components/pages/Home';
import Base64xImg from './components/pages/Base64xImg';
import ImageToBase64 from './components/pages/ImgxBase64';
import ImageToPDF from './components/pages/ImgxPdf';
import PdfToDoc from './components/pages/PdfxDoc';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

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
      <Route path="/imgxpdf" element={<ImageToPDF/>} />
      <Route path="/pdfxdoc" element={<PdfToDoc/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
