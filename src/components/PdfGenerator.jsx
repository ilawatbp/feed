import React, { useState } from "react";
import jsPDF from "jspdf";

export default function PdfGenerator() {
  const [items] = useState([
    {
      id: "123",
      link: "https://via.placeholder.com/150",
      comment: "This is the first item comment.",
      itemCode: "ITM-001"
    },
    {
      id: "124",
      link: "https://via.placeholder.com/200",
      comment: "Second item with another comment that is a bit longer.",
      itemCode: "ITM-002"
    }
  ]);

  const generatePDF = async () => {
    const doc = new jsPDF();

    for (let i = 0; i < items.length; i++) {
      const { link, comment, itemCode, id } = items[i];

      // Convert image to base64
      const imageBase64 = await getBase64FromUrl(link);

      // Add title
      doc.setFontSize(18);
      doc.text("Item Details", 20, 20);

      // Add Item Code & ID
      doc.setFontSize(12);
      doc.text(`Item Code: ${itemCode}`, 20, 35);
      doc.text(`ID: ${id}`, 20, 45);

      // Add Image
      doc.addImage(imageBase64, "JPEG", 20, 55, 100, 100);

      // Add Comment
      doc.setFontSize(12);
      doc.text("Comment:", 20, 165);
      doc.text(comment, 20, 175, { maxWidth: 170 });

      // Add new page except for the last item
      if (i < items.length - 1) {
        doc.addPage();
      }
    }

    doc.save("All-Items.pdf");
  };

  const getBase64FromUrl = async (url) => {
    const data = await fetch(url);
    const blob = await data.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => resolve(reader.result);
    });
  };

  return (
    <div>
      <h1>Generate PDF for All Items</h1>
      <button onClick={generatePDF}>Create PDF</button>
    </div>
  );
}
