import React, { useState, useRef } from "react";
import Logo from '../../../assets/logo.svg';
import jsPDF from "jspdf";

const ImageToPDF = ({ imageUrl }) => {
  const [loading, setLoading] = useState(false);
  const pdfRef = useRef(null);

  const handleDownload = async () => {
    setLoading(true);
    const pdf = new jsPDF();
    const image = await loadImage(imageUrl);
    pdf.addImage(image, "JPEG", 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
    pdf.save("image.pdf");
    setLoading(false);
  };

  const loadImage = (url) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.src = url;
      image.onload = () => {
        resolve(image);
      };
      image.onerror = (error) => {
        console.error("Error loading image:", error);
        reject(error);
      };
    });
  };
  
  
  
  

  return (
    <div>
        <img src={Logo} alt="" />
        <h1>(Image x Base64)</h1>
      <button onClick={handleDownload} disabled={loading}>
        Download PDF
      </button>
    </div>
  );
};

export default ImageToPDF;
