import React, { useState } from "react";
import axios from "axios";

const PdfToDocxConverter = () => {
  const [pdf, setPdf] = useState(null);

  const handleFileChange = (event) => {
    setPdf(event.target.files[0]);
  };

  const handleUploadClick = () => {
    document.getElementById("file-input").click();
  };

  const handleConvertToDocx = () => {
    if (!pdf) return;

    const formData = new FormData();
    formData.append("file", pdf);
    formData.append("inputformat", "pdf");
    formData.append("outputformat", "docx");

    axios
      .post("https://api.cloudconvert.com/convert", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Api-Key": "SUA_CHAVE_DE_API_AQUI"
        }
      })
      .then(response => {
        const url = response.data.output.url;
        window.location.href = url;
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>(PDF x DOCX)</h1>
      <label htmlFor="file-input">
        <button type="button" className="custom-file-upload" onClick={handleUploadClick}>
          Escolha o PDF
        </button>
      </label>
      <input type="file" id="file-input" onChange={handleFileChange} />
      {pdf && (
        <button className="btn-download" onClick={handleConvertToDocx}>
          Baixar
        </button>
      )}
    </div>
  );
};

export default PdfToDocxConverter;