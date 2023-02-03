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

  return (
    <div>
      <img src={Logo} alt="" />
      <h1>(Image x Base64)</h1>
      <input type="file" onChange={handleFileChange} />
      {image && (
        <div>
          <h3>Imagem original</h3>
          <img src={URL.createObjectURL(image)} alt="Original" />
          <h3>Resultado em Base64</h3>
          <p>{base64}</p>
        </div>
      )}
    </div>
  );
};

export default ImageToBase64;
