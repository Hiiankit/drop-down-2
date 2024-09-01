import * as pdfjsLib from "pdfjs-dist/webpack";

export const extractTextFromPDF = async (file: File): Promise<string> => {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  let text = "";

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    textContent.items.forEach((item: any) => {
      text += item.str + " ";
    });
    text += "\n\n";
  }

  console.log("Extracted Text:", text); // Add this line for debugging
  return text;
};
