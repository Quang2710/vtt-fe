"use client";
import React, { useRef, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const UploadPhotoTogetherPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="main-container-upload bg-[#f4f4f4]">
      <div className="create-container h-[100vh] flex flex-col max-w-2xl mx-auto mb-[60px] mb-[20%] p-[40px] bg-[#f4f4f4]">
        <p className="text-[#999] text-[16px] font-medium">Rosie @ Give.Asia</p>
        <div
          className="bg-white w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg text-[16px] focus:outline-none focus:ring-0"
        >
          Please upload a photo of you and the beneficiary together for verification.
        </div>
        <p className="mb-2 text-[16px] font-medium text-[#333]">Photo of you and beneficiary</p>
        <div className="flex items-center gap-6 mb-6 w-full">
          <div className="w-[113px] h-[77px] bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
            {preview ? (
              file && file.type.startsWith('image/') ? (
                <img src={preview} alt="Preview" className="object-cover w-full h-full" />
              ) : file && file.type === 'application/pdf' ? (
                <div className="w-full h-full overflow-hidden flex items-center justify-center ">
                  <embed
                    src={preview}
                    type="application/pdf"
                    className="w-full h-full "
                    style={{ border: 'none' }}
                  />
                </div>
              ) : (
                <span className="text-gray-400 text-sm">{file?.name || 'No file'}</span>
              )
            ) : (
              <span className="text-gray-400 text-sm">No file</span>
            )}
          </div>
          <button
            type="button"
            className="cursor-pointer flex-1 bg-[#EB008C] hover:bg-[#c90074] text-white font-semibold h-[77px] flex gap-3 items-center justify-center rounded-lg shadow transition-all duration-200"
            onClick={handleUploadClick}
          >
            <IoCloudUploadOutline className="text-4xl" />
            Upload Photo
          </button>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        <button
          className="cursor-pointer w-full bg-[#EB008C] text-white text-[18px] font-semibold py-3 rounded-lg shadow hover:bg-[#c90074] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!file}
          onClick={() => router.push("/fundraise/new/phone-number")}
        >
          Next
        </button>
      </div>
    </div>

  );
};

export default UploadPhotoTogetherPage;
