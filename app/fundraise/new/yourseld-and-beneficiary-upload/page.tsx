"use client";
import React, { useRef, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useFundraiseStore } from "@/stores/fundraiseStore";
import { fetcher } from "@/libs/fetcher";

const UploadPhotoTogetherPage: React.FC = () => {
  const [fileBeneficiary, setFileBeneficiary] = useState<File | null>(null);
  const [previewBeneficiary, setPreviewBeneficiary] = useState<string | null>(null);
  const [fileYou, setFileYou] = useState<File | null>(null);
  const [previewYou, setPreviewYou] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fileInputRefBeneficiary = useRef<HTMLInputElement>(null);
  const fileInputRefYou = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const setAnswer = useFundraiseStore((state) => state.setAnswer);
  const answers = useFundraiseStore((state) => state.answers);
  const questions = useFundraiseStore((state) => state.questions);
  const question19 = questions.find(q => q.id === 19);
  const prev = answers[19];
  const prevFileUrl =
    typeof prev === "object" && prev !== null && "fileUrl" in prev
      ? prev.fileUrl
      : "";
  const [fileUrls, setFileUrls] = useState(() => {
    const [b, y] = prevFileUrl.split(",");
    return { beneficiary: b || "", you: y || "" };
  });

  React.useEffect(() => {
    const prev = answers[19];
    const prevAnswer =
      typeof prev === "object" && prev !== null && "answer" in prev
        ? prev.answer
        : "";

    setAnswer(19, {
      answer: prevAnswer,
      fileUrl: `${fileUrls.beneficiary || ""},${fileUrls.you || ""}`,
    });
  }, [fileUrls]);

  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    who: "beneficiary" | "you"
  ) => {
    const selectedFile = e.target.files?.[0] || null;
    if (!selectedFile) return;

    if (who === "beneficiary") {
      setFileBeneficiary(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => setPreviewBeneficiary(reader.result as string);
      reader.readAsDataURL(selectedFile);
    } else {
      setFileYou(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => setPreviewYou(reader.result as string);
      reader.readAsDataURL(selectedFile);
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const data = await fetcher("/upload", {
        method: "POST",
        body: formData,
      });
      if (data.status && data.url) {
        setFileUrls(prevUrls =>
          who === "beneficiary"
            ? { ...prevUrls, beneficiary: data.url }
            : { ...prevUrls, you: data.url }
        );
      }
    } finally {
      setLoading(false);
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
          {question19?.name || "Please upload separate photos of you and the beneficiary"}
        </div>
        <p className="mb-2 text-[16px] font-medium text-[#333]">Photo of beneficiary</p>
        <div className="flex items-center gap-6 mb-6 w-full">
          <div className="w-[113px] h-[77px] bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
            {previewBeneficiary || fileUrls.beneficiary ? (
              (previewBeneficiary || fileUrls.beneficiary).toLowerCase().endsWith(".pdf") ? (
                <embed
                  src={previewBeneficiary || fileUrls.beneficiary}
                  type="application/pdf"
                  className="w-full h-full"
                  style={{ border: "none" }}
                />
              ) : (
                <img
                  src={previewBeneficiary || fileUrls.beneficiary}
                  alt="Preview"
                  className="object-cover w-full h-full"
                />
              )
            ) : (
              <span className="text-gray-400 text-sm">No file</span>
            )}
          </div>
          <button
            type="button"
            className="cursor-pointer flex-1 bg-[#EB008C] hover:bg-[#c90074] text-white font-semibold h-[77px] flex gap-3 items-center justify-center rounded-lg shadow transition-all duration-200"
            onClick={() => handleUploadClick(fileInputRefBeneficiary)}
            disabled={loading}
          >
            <IoCloudUploadOutline className="text-4xl" />
            Upload Photo
          </button>
          <input
            type="file"
            ref={fileInputRefBeneficiary}
            className="hidden"
            onChange={e => handleFileChange(e, "beneficiary")}
          />
        </div>

        <p className="mb-2 text-[16px] font-medium text-[#333]">Photo of you</p>
        <div className="flex items-center gap-6 mb-6 w-full">
          <div className="w-[113px] h-[77px] bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
            {previewYou || fileUrls.you ? (
              (previewYou || fileUrls.you).toLowerCase().endsWith(".pdf") ? (
                <embed
                  src={previewYou || fileUrls.you}
                  type="application/pdf"
                  className="w-full h-full"
                  style={{ border: "none" }}
                />
              ) : (
                <img
                  src={previewYou || fileUrls.you}
                  alt="Preview"
                  className="object-cover w-full h-full"
                />
              )
            ) : (
              <span className="text-gray-400 text-sm">No file</span>
            )}
          </div>
          <button
            type="button"
            className="cursor-pointer flex-1 bg-[#EB008C] hover:bg-[#c90074] text-white font-semibold h-[77px] flex gap-3 items-center justify-center rounded-lg shadow transition-all duration-200"
            onClick={() => handleUploadClick(fileInputRefYou)}
            disabled={loading}
          >
            <IoCloudUploadOutline className="text-4xl" />
            Upload Photo
          </button>
          <input
            type="file"
            ref={fileInputRefYou}
            className="hidden"
            onChange={e => handleFileChange(e, "you")}
          />
        </div>
        <button
          className="cursor-pointer w-full bg-[#EB008C] text-white text-[18px] font-semibold py-3 rounded-lg shadow hover:bg-[#c90074] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!fileUrls.beneficiary || !fileUrls.you || loading}
          onClick={() => router.push("/fundraise/new/phone-number")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UploadPhotoTogetherPage;
