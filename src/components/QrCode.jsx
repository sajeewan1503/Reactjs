import { useState } from "react";

export const QrCode = () => {
  const [img, setImg] = useState("./public/images/image3.png");
  function generateQR() {}
  function downloadQR(name) {}
  return (
    <div className="app-container">
      <h1>QR CODE GENERATOR</h1>
      <img src={img} className="qr-code-image" />
      <div>
        <label htmlFor="dataInput" className="input-label">
          Data for QR Code
        </label>
        <input
          type="text"
          id="dataInput"
          placeholder="Enter data for QR Code"
        />
        <label htmlFor="sizeInput" className="input-label">
          Image size(e.g.,150)
        </label>
        <input type="text" id="sizeInput" placeholder="Enter image size" />
        <button className="generate-button" onClick={generateQR}>
          Generate QR Code
        </button>
        <button className="download-button">Download QR Code</button>
      </div>
      <p>Designed By S.Sajeewan</p>
    </div>
  );
};
