// components/FileUpload.tsx
"use client";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useUploadStore } from "./uploadStore";
import { Button } from "./button";
import PdfViewer from "./pdfViewer";
import FileCard from "./FileCard";
import Image from "next/image";
import Rectangle from "../../../public/Rectangle 1582 1.png";
import Vector from "../../../public/Vector.png";
import UploadFile from "../../../public/upload_file.png";
import SmallStar from "../../../public/small stars.png";
import Star from "../../../public/stars.png";
import Grade from "../../../public/Grade Report 3D Icon 1.png";

import * as pdfjsLib from "pdfjs-dist/webpack";

interface StoredFile {
  name: string;
  size: number;
  type: string;
  content: string;
  text: string;
  wordCount: number;
  category: string;
  title: string;
  subject: string;
}

const FileUpload = () => {
  const { addFile, files, setFiles } = useUploadStore();
  const [showAll, setShowAll] = useState(false);
  const [selectedFile, setSelectedFile] = useState<StoredFile | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");

  const categories = [
    "All",
    "IA Example",
    "EE Example",
    "IO Example",
    "TOK Example",
  ];
  const filteredFiles =
    selectedCategory === "All"
      ? files
      : files.filter((file) => file.category === selectedCategory);

  useEffect(() => {
    const storedFiles = localStorage.getItem("uploadedFiles");
    if (storedFiles) {
      setFiles(JSON.parse(storedFiles));
    }
  }, [setFiles]);

  const extractTextFromPDF = useCallback(async (file: File) => {
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

    return text;
  }, []);

  const handleFileUpload = async (file: File) => {
    if (file.size <= 25 * 1024 * 1024) {
      let text = "";
      if (file && file.type === "application/pdf") {
        text = await extractTextFromPDF(file);
      }

      const wordCount = text.split(/\s+/).filter(Boolean).length;

      const storedFile: StoredFile = {
        name: file.name,
        size: file.size,
        type: file.type,
        content: "",
        text,
        wordCount,
        category: selectedCategory || " ",
        title: title || "Untitled",
        subject: subject || "Unknown",
      };

      console.log("Stored file:", storedFile);

      const updatedFiles = [...files, storedFile];
      setFiles(updatedFiles);
      localStorage.setItem("uploadedFiles", JSON.stringify(updatedFiles));
    } else {
      alert("File size exceeds the limit of 25 MB");
    }
  };

  const onDrop = (acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      console.log("Handling file:", file);
      handleFileUpload(file).catch(console.error);
    });
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const displayedFiles = showAll ? files : files.slice(0, 2);

  // components/FileUpload.tsx

  return (
    <div className="w-[70%] h-full m-auto pt-5">
      {selectedFile ? (
        <PdfViewer file={selectedFile} onBack={() => setSelectedFile(null)} />
      ) : (
        <div>
          {/* File Upload Section */}
          <div className="flex ">
            <div className="bg-gray-100 p-5 rounded-lg mb-8">
              <p className="font-bold text-3xl font-font-family text-wrap mb-5">
                Hey IB Folks ! Unsure about the quality of your answers?{" "}
                <span className="text-bluedash">We get you</span>
              </p>
              <div className=" border border-bordercol bg-bgUpload p-5 gap-8 rounded-2xl">
                <div
                  {...getRootProps()}
                  className="border-2 border-dashed border-bordercol flex flex-col items-center text-FileUpl bg-white border-gray-300 p-5 rounded-md text-center cursor-pointer"
                >
                  <input {...getInputProps()} />
                  <Image alt="" src={UploadFile} height={38} width={30} />
                  <p className=" font-font-family font-bold text-[16px]">
                    Drag and drop a PDF
                  </p>
                  <p className="text-sm  font-font-family text-[12px]text-gray-500">
                    *Limit 25 MB per file
                  </p>
                  <Button className="cursor-pointer mt-5 text-bluedash font-font-family font-extrabold text-[15px] border-bordercol shadow-bluedash border rounded-full">
                    Upload your File
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) =>
                        e.target.files
                          ? handleFileUpload(e.target.files[0])
                          : null
                      }
                    />
                  </Button>
                </div>

                <div className="mt-3 text-FileUpl font-font-family">
                  <p className="text-gray-600 text-sm">
                    Select your course and subjects*
                  </p>
                  <select
                    aria-placeholder="Coursework Type"
                    className="mr-3 p-1 text-formtext rounded-2xl text-gray-700 mt-1 font-semibold"
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="">Select Category</option>
                    <option value="IA Example">IA Example</option>
                    <option value="EE Example">EE Example</option>
                    <option value="IO Example">IO Example</option>
                    <option value="TOK Example">TOK Example</option>
                  </select>
                  <select
                    aria-placeholder="subject"
                    className="mr-3  text-formtext font-semibold p-1 rounded-2xl"
                    onChange={(e) => setSubject(e.target.value)}
                  >
                    <option value="">Subject</option>
                    <option value="Physics HL">Physics HL</option>
                    <option value="Math HL">Math HL</option>
                    <option value="Chemistry HL">Chemistry HL</option>
                  </select>
                  <div className="flex flex-col gap-5">
                    <div className="gap-2">
                      <p className="text-gray-600 font-font-family mt-4 text-sm">
                        Enter your essay title*(Required)
                      </p>
                      <input
                        placeholder="how nation works..."
                        type="text"
                        className="mr-3 font-medium border-formborder border p-2  text-gray-600  rounded-full  mb-4 w-[58%]"
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <button className="flex items-center w-fit h-10 px-2 py-2 bg-buttonback rounded-full gap-2">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white">
                        <Image
                          className="rotate-45"
                          alt="Star Icon"
                          src={Vector}
                          height={15.5}
                          width={15}
                        />
                      </div>
                      <p className="text-[#FFFFFF] font-semibold">
                        Evaluate your Score
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <Image alt="Rectangle" height={136} width={228} src={Rectangle} />
              <div className="flex flex-col  bg-[#F4F7FE] px-3 rounded-xl shadow-lg">
                <div className="relative mt-6 flex flex-col h-[351px] top-0 w-[230px] ">
                  <p className="font-bold font-font-family flex flex-col text-2xl text-bluedash  ">
                    Evaluate your <span> Coursework with</span> a single click
                  </p>
                  <div className=" relative">
                    <Image
                      className=" absolute rotate-[-180]  top-5 right-[60%]"
                      alt="SmallStar"
                      src={SmallStar}
                      height={155}
                      width={102}
                    />
                    <Image
                      className=" absolute top-[56px]"
                      alt="Grade"
                      src={Grade}
                      height={300}
                      width={250}
                    />

                    <Image
                      className=" absolute -right-6 top-[-50px] -rotate-0"
                      alt="Star"
                      src={Star}
                      height={217}
                      width={146}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* My Coursework Section */}
          <div className="mt-4 p-5">
            <h3 className=" text-[#5B6170] mb-2  font-font-family font-bold text-xl">
              My coursework
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {displayedFiles.map((file, index) => (
                <FileCard
                  key={index}
                  file={file}
                  onClick={() => setSelectedFile(file)}
                />
              ))}
            </div>
            {files.length > 2 && (
              <div className="mt-4 flex flex-col items-center font-font-family text-[#98A1BB] font-bold text-xl">
                <Button
                  onClick={() => setShowAll(!showAll)}
                  className="bg-gray-300 text-gray-600"
                >
                  {showAll ? "Show Less" : "View All"}
                </Button>
              </div>
            )}
          </div>

          {/* Explore Coursework Section */}
          <div className="mt-4 p-5 mb-8">
            <h3 className="text-lg font-font-family text-[#5B6170] font-bold text-xl ">
              Explore coursework
            </h3>
            <div className="flex space-x-4 mb-4 mt-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full gap-2 ${
                    selectedCategory === category
                      ? " text-[#6947BF] font-font-family font-extrabold bg-[#FFFFFF] rounded-xl text-[16px]"
                      : "font-font-family font-bold text-[16px] px-3 py-[6] text-[#98A1BB]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {filteredFiles.length > 0 ? (
                filteredFiles.map((file, index) => (
                  <FileCard
                    key={index}
                    file={file}
                    onClick={() => setSelectedFile(file)}
                  />
                ))
              ) : (
                <p>No coursework found for the selected category.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
