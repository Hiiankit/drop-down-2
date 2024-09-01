"use client";
import React from "react";
import Image from "next/image";
import ZuAi from "../../public/ZuAI.svg";
import Beta from "../../public/beta.svg";
import Book from "../../public/book_4.svg";
import Quiz from "../../public/quiz.svg";
import FileCopy from "../../public/file_copy (1).svg";
import Dashboard from "../../public/dashboard.svg";

export default function Sidebar() {
  return (
    <div className="flex w-14 flex-col gap-3 items-center mt-4 fixed bg-white mx-3 h-[95%] bg-gray-100 rounded-xl ">
      {/* Logo Section */}
      <div className="relative flex flex-col items-center  w-16 px-3">
        <Image className="w-14 h-14" src={ZuAi} alt="ZuAi Icon" />
        <Image
          className="absolute w-5 h-3 top-[60%] left-[65%] translate-x-[-50%]"
          src={Beta}
          alt="Beta Icon"
        />
      </div>

      {/* Navigation Icons */}
      <div className=" flex  justify-center">
        <div className=" flex  flex-col  gap-4 justify-center items-center">
          <div className="bg-bluedash  rounded-full">
            <Image
              className="w-9  p-2 h-9"
              src={Dashboard}
              alt="Dashboard Icon"
            />
          </div>
          <Image className="w-6 h-9" src={Book} alt="Book Icon" />
          <Image className="w-6 h-9" src={FileCopy} alt="File Copy Icon" />
          <Image className="w-6 h-9" src={Quiz} alt="Quiz Icon" />
        </div>
      </div>
    </div>
  );
}
