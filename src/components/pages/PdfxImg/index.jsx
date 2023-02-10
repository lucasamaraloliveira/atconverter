import React, { useState } from 'react';


const PdfToImage = () => {
  const [pdf, setPdf] = useState(null);
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      setPdf(file);
      const typedArray = new Uint8Array(reader.result);
      const pdfDoc = window.pdfjsLib.getDocument(typedArray);
      pdfDoc.promise.then((pdfDoc) => {
        pdfDoc.getPage(1).then((page) => {
          const viewport = page.getViewport({ scale: 1 });
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          const renderContext = {
            canvasContext: ctx,
            viewport: viewport
          };
          page.render(renderContext).promise.then(() => {
            setImage(canvas.toDataURL());
          });
        });
      });
    };
  };

  const handleUploadClick = () => {
    document.getElementById("file-input").click();
  };

  return (
    <div>
      <h1>(PDF x Image)</h1>
      <label htmlFor="file-input">
        <button type="button" onClick={handleUploadClick}>Escolha um arquivo</button>
      </label>
      <input type="file" id="file-input" accept="application/pdf" onChange={handleFileChange} />
      {image && (
        <div className="result-section">
          <h3 className="result-title">PDF original</h3>
          <embed src={URL.createObjectURL(pdf)} type="application/pdf" />
          <h3 className="result-title">Resultado em Imagem</h3>
          <img src={image} alt="Resultado" />
        </div>
      )}
    </div>
  );
};

export default PdfToImage;
