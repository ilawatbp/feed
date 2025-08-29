import { Scanner } from '@yudiel/react-qr-scanner';

export default function QrScanner({ onDetected, setScannerOpen }) {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/70">
    <div className="mt-6 w-full max-w-sm aspect-square bg-black rounded-lg overflow-hidden relative">
      <Scanner
        onScan={(detected) => {
          const first = detected?.[0];
          if (first?.rawValue) {
            onDetected(first.rawValue);
          }
        }}
        onError={(error) => console.error(error)}
        scanDelay={200}
        constraints={{ facingMode: 'environment',  advanced: [{ zoom: 5 }] }}
        styles={{
          container: { width: '100%', height: '100%' },
          video: { width: '100%', height: '100%', objectFit: 'cover' },
          finder: {
            stroke: 'blue',      // dotted border color
            strokeWidth: 2,
            strokeDasharray: '4 4', // makes the border dotted
            cornerStroke: 'green',   // override corners color (solid)
            cornerLength: 20,
            cornerStrokeWidth: 4,
          },
        }}
        
      />
      
      {/* Close button */}
      <button
        onClick={()=>setScannerOpen(false)}
        className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded"
      >
        X
      </button>
    </div>
    </div>
  );
}
