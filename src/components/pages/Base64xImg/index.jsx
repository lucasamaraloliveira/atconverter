import './Base64xImg.css';
import { useState } from 'react';
import Logo from '../../../assets/logo.svg';



const base64ToBlob = (base64) => {
  const binData = atob(base64.replace(/^.*,/, ''));
  const len = binData.length;
  const arr = new Uint8Array(len);

  for (let i = 0; i < len; i++) {
    arr[i] = binData.charCodeAt(i);
  }

  return new Blob([arr], { type: 'image/jpeg' });
};

const Base64xImg = () => {
  const [base64Image, setBase64Image] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleTextareaChange = (e) => {
    setBase64Image(e.target.value);
    setErrorMessage('');
  };

  const handleDownload = () => {
    if (imageUrl) {
      const a = document.createElement('a');
      a.href = imageUrl;
      a.download = 'image.jpeg';
      a.click();
    }
  };

  const handleImageGeneration = () => {
    try {
      const blob = base64ToBlob(base64Image);
      const url = URL.createObjectURL(blob);
      setImageUrl(url);
    } catch (error) {
      setErrorMessage('Não foi possível gerar imagem, insira outro código.');
      setImageUrl(null);
    }
  };

  const handleClear = () => {
    setBase64Image('');
    setImageUrl(null);
  };

  return (
    <div className="StyleImage">
      <img src={Logo} alt="" />
      <h1>(Base64 x Image)</h1>
      <textarea
        rows={13}
        cols={70}
        placeholder="Insira o código Base64 aqui"
        value={base64Image}
        onChange={handleTextareaChange}
      />
      <div className="teste">
        {errorMessage ? (
          <p className="error-message">{errorMessage}</p>
        ) : null}
        <button className="btn-generator" onClick={handleImageGeneration}>
          Gerar imagem
        </button>
        <button
          className="btn-download"
          disabled={!imageUrl}
          onClick={handleDownload}
        >
          Baixar
        </button>
        <button className="btn-clear" disabled={!base64Image} onClick={handleClear}>
          Limpar
        </button>
      </div>
      {imageUrl ? (
        <div className="teste">
          <img src={imageUrl} alt="My Image" />
        </div>
      ) : null}
    </div>
  );
};

export default Base64xImg;
