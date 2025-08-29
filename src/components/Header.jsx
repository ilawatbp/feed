import jsPDF from "jspdf";

export default function Header({ qrValue }) {
  const getBase64FromUrl = async (url) => {
    const data = await fetch(url);
    const blob = await data.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => resolve(reader.result);
    });
  };

  const generatePDF = async () => {
    if (!qrValue || qrValue.length === 0) {
      alert("No items to export!");
      return;
    }

    const doc = new jsPDF();

    for (let i = 0; i < qrValue.length; i++) {
      const { link, comment, itemCode, id } = qrValue[i];
      const imageBase64 = await getBase64FromUrl(link);

const pdfWidth = doc.internal.pageSize.getWidth();
const pdfHeight = doc.internal.pageSize.getHeight();

doc.setFontSize(18);
doc.text("Item Details", 20, 20);

doc.setFontSize(12);
doc.text(`Item Code: ${itemCode}`, 20, 35);

// ✅ Calculate image aspect ratio and fit
const imgProps = doc.getImageProperties(imageBase64);
const imgWidth = imgProps.width;
const imgHeight = imgProps.height;
const maxImgWidth = pdfWidth - 40; // 20px margin on each side
const maxImgHeight = 80; // Reserved area for image

let displayWidth = maxImgWidth;
let displayHeight = (imgHeight * maxImgWidth) / imgWidth;

// ✅ If height is too big, scale down by height instead
if (displayHeight > maxImgHeight) {
  displayHeight = maxImgHeight;
  displayWidth = (imgWidth * maxImgHeight) / imgHeight;
}

// ✅ Center image horizontally
const x = (pdfWidth - displayWidth) / 2;
const y = 55;

doc.addImage(imageBase64, "JPEG", x, y, displayWidth, displayHeight);

// ✅ Text after image
doc.text("Comment:", 20, y + displayHeight + 10);
doc.text(comment || "No comment", 20, y + displayHeight + 20, { maxWidth: 170 });


      if (i < qrValue.length - 1) {
        doc.addPage();
      }
    }

    doc.save("ilaw atbp list.pdf");
  };

  return (
    <header className="fixed w-full text-white z-50 flex flex-row justify-between items-center p-3">
      <img src="./images/logo.png" alt="" className="w-10"/>
       <button className="border border-white py-2 px-4 rounded-full mr-2  active:bg-white active:text-black"  onClick={generatePDF}>save to pdf</button>
    </header>
  );
}


