import "./App.css";
import QrScanner from "./components/QrScanner";
import Header from "./components/Header";
import ImageFeed from "./components/ImageFeed";
import { useState, useEffect } from "react";
import ScanFloat from "./components/ScanFloat";

function App() {
const [qrValue, setQrValue] = useState(() => {
  const saved = localStorage.getItem("qrValue");
  return saved ? JSON.parse(saved) : [];
});

  const [scannerOpen, setScannerOpen] = useState(false);
  const prefix = "https://mycompany.com/item?itemcode=";

  useEffect(() => {
  localStorage.setItem("qrValue", JSON.stringify(qrValue));
}, [qrValue]);

  const handleDetected = (value) => {
    handleQrDetected(value); // pass value to App.jsx
    setScannerOpen(false); // close scanner
  };

  const handleQrDetected = (value) => {
    let codeOnly = value.replace(prefix, "");
    const linkText = "./images/" + codeOnly + ".jpg";
    const id = Math.random();
    setQrValue((prev) => [{ id: id, link: linkText, comment:"", itemCode: codeOnly}, ...prev]);
  };

  if (qrValue == "") {
    return (
      <div className="w-full h-dvh flex justify-center items-end bg-black">
        
  <button
          className="text-white text-2xl h-14 w-3/4 md:w-1/2 bg-green-500 rounded-full m-16"
          onClick={() => setScannerOpen(true)}
        >
          Start
        </button>

        {scannerOpen && (
          <QrScanner
            onDetected={handleDetected}
            setScannerOpen={setScannerOpen}
          />
        )}
      </div>
    );
  }

  return (
    <div className="max-h-dvh">
<Header qrValue={qrValue} />
      <ImageFeed qrValue={qrValue} setQrValue={setQrValue} />
      <ScanFloat
        scannerOpen={scannerOpen}
        handleDetected={handleDetected}
        setScannerOpen={setScannerOpen}
      />
    </div>
  );
}

export default App;
