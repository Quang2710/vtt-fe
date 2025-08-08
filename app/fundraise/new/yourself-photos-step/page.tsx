"use client";
import React, { useRef, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useFundraiseStore } from "@/stores/fundraiseStore";
import { fetcher } from "@/libs/fetcher";
import { useFundraiseStepGuard } from "@/hooks/useFundraiseStepGuard";

const UploadPhotoPage: React.FC = () => {
  const isGuardChecked = useFundraiseStepGuard(4, "/fundraise/new");

  const [file, setFile] = useState<File | null>(null);
  const answers = useFundraiseStore((state) => state.answers);
  const questions = useFundraiseStore((state) => state.questions);
  const question17 = questions.find((q) => q.id === 17);
  const prev = answers[17];
  const prevFileUrl =
    typeof prev === "object" && prev !== null && "fileUrl" in prev
      ? prev.fileUrl
      : "";

  const [preview, setPreview] = useState<string | null>(prevFileUrl || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const setAnswer = useFundraiseStore((state) => state.setAnswer);

  if (!isGuardChecked) return null;

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(selectedFile);

      setLoading(true);
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const data = await fetcher("/upload", {
          method: "POST",
          body: formData,
        });
        if (data.status && data.url) {
          const prev = useFundraiseStore.getState().answers[17];
          setAnswer(17, {
            answer:
              typeof prev === "object" && prev !== null && "answer" in prev
                ? prev.answer
                : "",
            fileUrl: data.url,
          });
        } else {
          setError("Upload failed!");
        }
      } catch (err) {
        setError("Upload failed!");
      } finally {
        setLoading(false);
      }
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
        <input
          type="text"
          className="bg-white w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg text-[16px] focus:outline-none focus:ring-0"
          value="Please upload a photo of yourself for verification."
          readOnly
          tabIndex={-1}
        />
        <p className="mb-2 text-[16px] font-medium text-[#333]">
          {question17?.name || "Please upload a photo of yourself for verification."}
        </p>
        <div className="flex items-center gap-6 mb-6 w-full">
          <div className="w-[113px] h-[77px] bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
            {preview || prevFileUrl ? (
              (preview || prevFileUrl).toLowerCase().endsWith(".pdf") ? (
                <embed
                  src={preview || prevFileUrl}
                  type="application/pdf"
                  className="w-full h-full"
                  style={{ border: "none" }}
                />
              ) : (
                <img
                  src={preview || prevFileUrl}
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
            className={`cursor-pointer flex-1 bg-[#EB008C] hover:bg-[#c90074] text-white font-semibold h-[77px] flex gap-3 items-center justify-center rounded-lg shadow transition-all duration-200 ${
              loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
            onClick={handleUploadClick}
            disabled={loading}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
                Uploading...
              </>
            ) : (
              <>
                <IoCloudUploadOutline className="text-4xl" />
                Upload Photo
              </>
            )}
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
          disabled={(!preview && !prevFileUrl) || loading}
          onClick={() => router.push("/fundraise/new/phone-number")}
        >
          Next
        </button>
        {error && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30">
            <div className="bg-white rounded-xl shadow-lg p-6 min-w-[300px] flex flex-col items-center">
              <div className="text-pink-600 font-semibold text-lg mb-2">
                Error
              </div>
              <div className="text-[#333] mb-4">{error}</div>
              <button
                className="px-4 py-2 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700"
                onClick={() => setError(null)}
              >
                Đóng
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadPhotoPage;
