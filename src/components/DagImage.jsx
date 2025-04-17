import React from "react";
import { useRef, useState } from "react";
import Image from "next/legacy/image";

export const DagImage = ({ label, onChange, name, value }) => {
  const inputImageRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [previewLink, setPreviewLink] = useState("");
  const [tempFile, setTempFile] = useState(null);
  const openBrowse = () => {
    inputImageRef.current?.click();
  };

  const handleInputChang = (event) => {
    const file = Array.from(event.target.files)[0];
    if (file) {
      setTempFile(file);
      setPreviewLink(URL.createObjectURL(file));
      onChange(event);
    }

    setPreviewLink(URL.createObjectURL(file));
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = Array.from(event.dataTransfer.files)[0];
    setPreviewLink(URL.createObjectURL(file));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };
  const clearImage = () => {
    setPreviewLink("");
    setTempFile({});
    inputImageRef.current.value = "";
    setIsDragging(false);
  };

  const handleDragLeave = () => setIsDragging(false);

  return (
    <div className="mt-2">
      <label>
        {label}
        <span className="text-red-500"> * </span>
      </label>
      <div className="relative ">
        <div
          className={`bg-gray-100 mt-2 h-[180px] rounded-md border relative flex justify-center items-center cursor-pointer ${
            isDragging ? "border-dashed" : "border-black"
          }`}
          onClick={openBrowse}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <input
            ref={inputImageRef}
            type="file"
            className="hidden"
            onChange={handleInputChang}
            name={name}
          />
        </div>
        {previewLink ? (
          <Image
            src={previewLink}
            layout="fill"
            alt="Browse or Drop Image"
            className="w-full h-full object-cover rounded-md"
          />
        ) : (
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer flex flex-col items-center justify-center gap-2"
            onClick={openBrowse}
          >
            <img
              src="hehe.svg"
              alt=""
              className="flex items-center p-2 bg-white rounded-full"
            />

            <p className="">Browse or Drop Image</p>
          </div>
        )}

        {previewLink && (
          <button
            className="absolute top-2 right-2 bg-black p-1 rounded-full"
            onClick={clearImage}
          >
            <img src="/close.svg" alt="close" />
          </button>
        )}
      </div>
    </div>
  );
};
