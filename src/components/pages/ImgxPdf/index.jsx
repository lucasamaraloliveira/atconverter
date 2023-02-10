import React, { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import './ImgxPdf.css';
import Logo from '../../../assets/logo.svg';

const ImageToPdfConverter = () => {
const [image, setImage] = useState(null);

const handleFileChange = (event) => {
setImage(URL.createObjectURL(event.target.files[0]));
};

const handleUploadClick = () => {
document.getElementById("file-input").click();
};

const handleConvertToPdf = () => {
  if (!image) return;

  html2canvas(document.querySelector("#capture"), { scale: 10 }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    pdf.addImage(imgData, "PNG", -185, 0, 580, 311);
pdf.save("image.pdf");

  });
};

return (
  <div>
    <img src={Logo} alt="" />
    <h1>(Image x PDF)</h1>
    <label htmlFor="file-input">
      <button type="button" className="custom-file-upload" onClick={handleUploadClick}>Escolha a imagem</button>
    </label>
    <input type="file" id="file-input" onChange={handleFileChange} />
    {image && (
      <div id="capture">
        <img src={image} alt="captured" className="original-img" />
      </div>
    )}
    {image && (
      <button className="btn-download" onClick={handleConvertToPdf}>Baixar</button>
    )}
  </div>
);

};

export default ImageToPdfConverter;