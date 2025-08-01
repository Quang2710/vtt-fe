"use client";
import React, { useRef, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const UploadPhotoTogetherPage: React.FC = () => {
  // Tách riêng 2 trường file và preview cho mỗi input
  const [fileBeneficiary, setFileBeneficiary] = useState<File | null>(null);
  const [previewBeneficiary, setPreviewBeneficiary] = useState<string | null>(null);
  const [fileYou, setFileYou] = useState<File | null>(null);
  const [previewYou, setPreviewYou] = useState<string | null>(null);

  const fileInputRefBeneficiary = useRef<HTMLInputElement>(null);
  const fileInputRefYou = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFile: React.Dispatch<React.SetStateAction<File | null>>,
    setPreview: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
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

const handleUploadClick = (ref: React.RefObject<HTMLInputElement | null>) => {
  ref.current?.click();
};

  return (
    <div className="main-container-upload bg-[#f4f4f4]">
      <div className="create-container h-[100vh] flex flex-col max-w-2xl mx-auto mb-[60px] mb-[20%] p-[40px] bg-[#f4f4f4]">
        <p className="text-[#999] text-[16px] font-medium">Rosie @ Give.Asia</p>
        <div className="bg-white w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg text-[16px] focus:outline-none focus:ring-0">
          Please upload separate photos of you and the beneficiary
        </div>
        <p className="mb-2 text-[16px] font-medium text-[#333]">Photo of beneficiary</p>
        <div className="flex items-center gap-6 mb-6 w-full">
          <div className="w-[113px] h-[77px] bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
            {previewBeneficiary ? (
              fileBeneficiary && fileBeneficiary.type.startsWith('image/') ? (
                <img src={previewBeneficiary} alt="Preview" className="object-cover w-full h-full" />
              ) : fileBeneficiary && fileBeneficiary.type === 'application/pdf' ? (
                <div className="w-full h-full overflow-hidden flex items-center justify-center ">
                  <embed
                    src={previewBeneficiary}
                    type="application/pdf"
                    className="w-full h-full "
                    style={{ border: 'none' }}
                  />
                </div>
              ) : (
                <span className="text-gray-400 text-sm">{fileBeneficiary?.name || 'No file'}</span>
              )
            ) : (
              <span className="text-gray-400 text-sm">No file</span>
            )}
          </div>
          <button
            type="button"
            className="cursor-pointer flex-1 bg-[#EB008C] hover:bg-[#c90074] text-white font-semibold h-[77px] flex gap-3 items-center justify-center rounded-lg shadow transition-all duration-200"
            onClick={() => handleUploadClick(fileInputRefBeneficiary)}
          >
            <IoCloudUploadOutline className="text-4xl" />
            Upload Photo
          </button>
          <input
            type="file"
            ref={fileInputRefBeneficiary}
            className="hidden"
            onChange={e => handleFileChange(e, setFileBeneficiary, setPreviewBeneficiary)}
          />
        </div>

        <p className="mb-2 text-[16px] font-medium text-[#333]">Photo of you</p>
        <div className="flex items-center gap-6 mb-6 w-full">
          <div className="w-[113px] h-[77px] bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
            {previewYou ? (
              fileYou && fileYou.type.startsWith('image/') ? (
                <img src={previewYou} alt="Preview" className="object-cover w-full h-full" />
              ) : fileYou && fileYou.type === 'application/pdf' ? (
                <div className="w-full h-full overflow-hidden flex items-center justify-center ">
                  <embed
                    src={previewYou}
                    type="application/pdf"
                    className="w-full h-full "
                    style={{ border: 'none' }}
                  />
                </div>
              ) : (
                <span className="text-gray-400 text-sm">{fileYou?.name || 'No file'}</span>
              )
            ) : (
              <span className="text-gray-400 text-sm">No file</span>
            )}
          </div>
          <button
            type="button"
            className="cursor-pointer flex-1 bg-[#EB008C] hover:bg-[#c90074] text-white font-semibold h-[77px] flex gap-3 items-center justify-center rounded-lg shadow transition-all duration-200"
            onClick={() => handleUploadClick(fileInputRefYou)}
          >
            <IoCloudUploadOutline className="text-4xl" />
            Upload Photo
          </button>
          <input
            type="file"
            ref={fileInputRefYou}
            className="hidden"
            onChange={e => handleFileChange(e, setFileYou, setPreviewYou)}
          />
        </div>
        <button
          className="cursor-pointer w-full bg-[#EB008C] text-white text-[18px] font-semibold py-3 rounded-lg shadow hover:bg-[#c90074] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!fileBeneficiary || !fileYou}
          onClick={() => router.push("/fundraise/new/phone-number")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UploadPhotoTogetherPage;
