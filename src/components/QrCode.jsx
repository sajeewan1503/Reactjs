import { useState } from "react";

export const QrCode = () => {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [qrData, setQrData] = useState("Sajeewan");
  const [qrSize, setQrSize] = useState("150");

  function generateQR() {
    setLoading(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}*${qrSize}&data=${encodeURIComponent(
        qrData
      )}`;
      setImg(url);
    } catch (error) {
      console.error("Error Generating QR COde", error);
    } finally {
      setLoading(false);
    }
    // setImg("./public/images/image3.png");
  }
  function downloadQR() {
    fetch(img)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error("Error Downloading QR Code", error);
      });
  }
  return (
    <div className="app-container">
      <h1>QR CODE GENERATOR</h1>
      {loading && <p>Please wait......</p>}
      {img && <img src={img} className="qr-code-image" />}
      <div>
        <label htmlFor="dataInput" className="input-label">
          Data for QR Code
        </label>
        <input
          type="text"
          value={qrData}
          id="dataInput"
          placeholder="Enter data for QR Code"
          onChange={(e) => setQrData(e.target.value)}
        />
        <label htmlFor="sizeInput" className="input-label">
          Image size(e.g.,150)
        </label>
        <input
          type="text"
          value={qrSize}
          onChange={(e) => setQrSize(e.target.value)}
          id="sizeInput"
          placeholder="Enter image size"
        />
        <button
          className="generate-button"
          disabled={loading}
          onClick={generateQR}
        >
          Generate QR Code
        </button>
        <button className="download-button" onClick={downloadQR}>
          Download QR Code
        </button>
      </div>
      <p>Designed By S.Sajeewan</p>
    </div>
  );
};
