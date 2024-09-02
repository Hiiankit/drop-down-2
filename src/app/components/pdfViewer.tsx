import { FC, useState } from "react";
import { Button } from "./button";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

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
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-row gap-2">
      <div className="p-4 max-w-4xl mx-auto bg-[#E5ECF3]">
        <div className="w-[872px] justify-between rounded-t-3xl bg-pdfBg flex items-center h-[50px]">
          <h2 className="text-[#3D404B] ml-2 bg-[#FFFFFF] rounded-full px-3 py-1 w-fit font-font-family font-bold text-[14px]">
            {file.title}.pdf
          </h2>
          <Button
            onClick={onBack}
            className="mb-2 bg-gray-500 font-semibold text-[#3D404B] bg-[#FFFFFF]"
          >
            Back
          </Button>
        </div>
        <div className="bg-[#FFFFFF] flex overflow-hidden justify-center w-[872px] h-[800px]">
          <div className="p-5 m-5 bg-gray-100 rounded-lg shadow-md">
            <p className="font-font-family font-medium mt-10 p-5 text-[15px] text-[#5B6170]">
              {file.text}
            </p>
          </div>
        </div>
      </div>

      <div className="pt-4 flex flex-col items-center gap-y-2">
        <div className="h-[104px] p-3 items-center gap-10 flex font-font-family w-[356px] rounded-3xl bg-[#FFFFFF]">
          <div>
            <p className="text-[#3D404B] text-[14px] font-medium">
              Overall Score
            </p>
            <h1 className="font-bold text-2xl text-[#7A8196]">
              Remark: <span className="text-[#3CC28A]">Good</span>
            </h1>
            <p>Evaluated on 12 Jul 2024</p>
          </div>
          <div className="border-[10px] w-20 flex items-center justify-center h-20 text-[19px] font-semibold border-[#3CC28A] rounded-full">
            <p>13/20</p>
          </div>
        </div>

        <div className="w-[356px]">
          <div className="h-[104px] p-3 flex items-center gap-5 font-font-family rounded-3xl bg-[#FFFFFF]">
            <div className="border-[5px] p-2 w-10 flex items-center justify-center h-10 text-[12px] font-semibold border-[#3CC28A] rounded-full">
              <p>7/10</p>
            </div>
            <div>
              <p className="text-[#98A1BB] text-[12px] font-semibold">
                Criteria A:
              </p>
              <h1 className="font-bold text-[16px] text-[#7A8196]">
                Understanding Knowledge Questions
              </h1>
            </div>
            <button
              className="ml-auto text-[#3D404B] font-semibold text-[14px] flex items-center"
              onClick={toggleDropdown}
            >
              {isOpen ? <GoChevronUp /> : <GoChevronDown />}
            </button>
          </div>
          {isOpen && (
            <div className="p-3 flex items-center rounded-b-3xl bg-[#FFFFFF] text-[#7A8196] text-[14px]">
              <p>
                This is additional information that is revealed when the
                dropdown is opened. It can contain more details about the
                criteria or any other relevant content.
              </p>
            </div>
          )}
        </div>

        <div className="h-[104px] p-3 items-center gap-5 flex font-font-family w-[356px] rounded-3xl bg-[#FFFFFF]">
          <div className="border-[5px] p-2 w-10 flex items-center justify-center h-10 text-[12px] font-semibold border-[#F9C94E] rounded-full">
            <p>5/10</p>
          </div>
          <div>
            <p className="text-[#98A1BB] text-[12px] font-semibold">
              Criteria B:
            </p>
            <h1 className="font-bold text-[16px] text-[#7A8196]">
              Understanding Knowledge Questions
            </h1>
          </div>
        </div>

        <div className="h-[104px] p-3 items-center gap-5 flex font-font-family w-[356px] rounded-3xl bg-[#FFFFFF]">
          <div className="border-[5px] p-2 w-10 flex items-center justify-center h-10 text-[12px] font-semibold border-[#EB751F] border-t-0 border-l-0 rounded-full">
            <p>3/10</p>
          </div>
          <div>
            <p className="text-[#98A1BB] text-[12px] font-semibold">
              Criteria C:
            </p>
            <h1 className="font-bold text-[16px] text-[#7A8196]">
              Understanding Knowledge Questions
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;
