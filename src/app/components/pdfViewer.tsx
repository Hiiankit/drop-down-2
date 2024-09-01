// components/PdfViewer.tsx
import { FC } from "react";
import { Button } from "./button";

interface PdfViewerProps {
  file: {
    title: string;
    subject: string;
    wordCount: number;
    text: string;
  };
  onBack: () => void;
}

const PdfViewer: FC<PdfViewerProps> = ({ file, onBack }) => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Button onClick={onBack} className="mb-4 bg-gray-500 text-white">
        Back
      </Button>
      <h2 className="text-2xl font-bold">{file.title}</h2>
      <p className="text-md text-gray-600">Subject: {file.subject}</p>
      <p className="text-md text-gray-600">Word Count: {file.wordCount}</p>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
        <pre className="whitespace-pre-wrap break-words">{file.text}</pre>
      </div>
    </div>
  );
};

export default PdfViewer;
