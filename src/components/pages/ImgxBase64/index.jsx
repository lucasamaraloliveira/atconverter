import './ImgxBase64.css';
import { useState } from 'react';
import Logo from '../../../assets/logo.svg';

const ImageToBase64 = () => {
  const [image, setImage] = useState(null);
  const [base64, setBase64] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(file);
      setBase64(reader.result);
    };
    
  };

  const handleUploadClick = () => {
    document.getElementById("file-input").click();
  };

  return (
    <div>
      <img src={Logo} alt="" />
      <h1>(Image x Base64)</h1>
      <label htmlFor="file-input">
      <button type="button" className="custom-file-upload" onClick={handleUploadClick}>Escolha um arquivo</button>
      </label>
<input type="file" id="file-input" onChange={handleFileChange} />
      {image && (
        <div className="result-section">
          <h3 className="result-title">Imagem original</h3>
          <img src={URL.createObjectURL(image)} alt="Original" className="original-img" />
          <h3 className="result-title">Resultado em Base64</h3>
          <p className="base64-result">{base64}</p>
        </div>
      )}
    </div>
  );
};

export default ImageToBase64;
