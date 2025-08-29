import { ScanQrCode } from "lucide-react";
import QrScanner from "./QrScanner";

export default function ScanFloat({ setScannerOpen, scannerOpen, handleDetected }) {
  return (
    <div
      className="fixed bottom-10 right-10 bg-slate-200 w-16 h-16 text-black flex justify-center items-center rounded-full cursor-pointer z-40"
      onClick={(e) => {
        e.stopPropagation(); // prevent any bubbling
        if (!scannerOpen) setScannerOpen(true); // only open if closed
      }}
    >
      <ScanQrCode />

      {scannerOpen && (
        <QrScanner
          onDetected={handleDetected}
          setScannerOpen={setScannerOpen}
        />
      )}
    </div>
  );
}
