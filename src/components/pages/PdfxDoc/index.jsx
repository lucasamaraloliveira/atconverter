import React, { useState } from "react";

import Logo from '../../../assets/logo.svg';

const PdfToDocxConverter = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUploadClick = () => {
    document.getElementById("file-input").click();
  };

  const handleConvertToDocx = () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    fetch("https://api.cloudconvert.com/convert", {
      method: "POST",
      headers: {
        "Api-Key": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNzc3M2FiYjc4NWFjZjhhODJiNjQwMTBhZGNkN2NjMTNiNGFjZWRiYjdjMDdjNDdkZDNjNTE2MjZmNzk1ODllYTRjZTljODYyZWY5MDcyMjMiLCJpYXQiOjE2NzYzMDg1MjEuODM0MDE2LCJuYmYiOjE2NzYzMDg1MjEuODM0MDE4LCJleHAiOjQ4MzE5ODIxMjEuODI2MTg0LCJzdWIiOiI2MjA4Njk1OSIsInNjb3BlcyI6W119.ea8MnRKivo7n_DHnas3rwkS3D7SDlEzopzEnfzH0ybhgdoskFLfiTckg9wvlj5-nfzqGEfxxrdi8ttfdyXqAV_V86lkKlbz0ZaYp_iGd_vnWGsoNhixqcDge88upVvgG38g35BB6riLQ-E2GHq1U3_G4uoCg-707uHFIjJ6Rv9IKRaYRg9cI5d62jM588e36j-Ys5fw8mRbX2PTXE66pfcD6P0r2F-Z70aS9HUIVAjQIt4IaLZcTF6gf02ncJJZS_12rRUNsnWHdApt_26SjEJxd88eEA-cvPj315LTnA3pMZhnM5CQBHzz4X-SLTxbcUvWvYr8ztTMapqYUiWY9HPu-UZ--LXvuQCD9V8LT_obpQmjK4-tvhqDu2wyC0p05toWt0kq-qBHPcw6zr08JUSUpozjwMUFR_tjQnJ_JKwxamQlFBXcLgR6JQ-flu2EY9-0wWDdeLX-VQAE4SSEqRIpJRw36bj_FnYiS7VpybRY95s_1iczU5-5Mk4kXWl3XXZkgbDMrBd01597I_010xyuXx0Ldtrj4V_2cuNb5D9PGk06AYolCOiPXRUgAtGjL1HuIS0cKtotaF97c6py0gNG9a2nc1w3G6bULbxre8ZYsoVTz2SEgqBtXtxav9rKW714Wr_JppCOLhA2kdZ163xFPFsPNT1-5-Nsu3bNo1fM",
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the conversion result
        // ...
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <img src={Logo} alt="" />
      <h1>(Pdf x Docx)</h1>
      <label htmlFor="file-input">
        <button type="button" className="custom-file-upload" onClick={handleUploadClick}>Escolha o arquivo PDF</button>
      </label>
      <input type="file" id="file-input" onChange={handleFileChange} />
      {error && (
        <p>{error}</p>
      )}
      {file && (
        <button className="btn-download" onClick={handleConvertToDocx}>Baixar</button>
      )}
    </div>
  );
};

export default PdfToDocxConverter;
