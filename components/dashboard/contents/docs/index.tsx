"use client";

import PinkButton from "@/components/layout/button";
import PinkButtonWidth from "@/components/layout/button/w-limit";
import { Card, Input } from "@heroui/react";
import { useRef, useState } from "react";

type Doc = {
  id: number;
  title: string;
  thumbnailUrl: string;
  date: string;
};

export default function DocsManager() {
  const [documents, setDocuments] = useState<Doc[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [title, setTitle] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [showValidation, setShowValidation] = useState(false);

  const openFormForNew = () => {
    setEditingId(null);
    setTitle("");
    setPreview(null);
    setShowValidation(false);
    setIsFormOpen(true);
    setTimeout(
      () => fileRef.current?.scrollIntoView({ behavior: "smooth" }),
      50
    );
  };

  const validateForm = () => {
    if (!preview || !title.trim()) {
      setShowValidation(true);
      return false;
    }
    return true;
  };

  const openFormForEdit = (doc: Doc) => {
    setEditingId(doc.id);
    setTitle(doc.title);
    setPreview(doc.thumbnailUrl);
    setIsFormOpen(true);
    setTimeout(
      () => fileRef.current?.scrollIntoView({ behavior: "smooth" }),
      50
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const url = URL.createObjectURL(f);

    if (preview) URL.revokeObjectURL(preview);
    setPreview(url);
  };

  const handleSave = () => {
    if (!preview) {
      setShowValidation(true);
      return;
    }

    if (!title.trim()) return;
    const dateStr = new Date().toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    if (editingId) {
      setDocuments((prev) =>
        prev.map((d) =>
          d.id === editingId
            ? {
                ...d,
                title: title.trim(),
                thumbnailUrl: preview,
                date: dateStr,
              }
            : d
        )
      );
    } else {
      const newDoc: Doc = {
        id: Date.now(),
        title: title.trim(),
        thumbnailUrl: preview,
        date: dateStr,
      };
      setDocuments((prev) => [newDoc, ...prev]);
    }

    setIsFormOpen(false);
    setEditingId(null);
    setTitle("");
    setPreview(null);

    if (fileRef.current) fileRef.current.value = "";
  };

  const handleDelete = (id: number) => {
    if (!confirm("Delete this document?")) return;
    const target = documents.find((d) => d.id === id);
    if (target) URL.revokeObjectURL(target.thumbnailUrl);
    setDocuments((prev) => prev.filter((d) => d.id !== id));
  };

  return (
    <div className="space-y-6 px-6">
      {/* Header + top add button */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-light text-gray-400 my-4">Documents</h2>
      </div>

      {/* Form card */}
      {isFormOpen && (
        <Card ref={fileRef} className="bg-white  rounded-lg p-4">
          <div className="flex flex-col md:flex-row gap-4 items-start">
            {/* image box */}
            <label className="flex w-full md:w-3/5 flex-row md:flex-col rounded-lg overflow-hidden ">
              <div className="relative w-full aspect-video bg-gray-400 flex items-center justify-center">
                {preview ? (
                  <>
                    <img
                      src={preview}
                      alt="preview"
                      className="w-full h-full object-cover"
                    />
                    {preview && (
                      <div
                        className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm font-semibold py-2 text-center cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          if (preview) URL.revokeObjectURL(preview);
                          setPreview(null);
                        }}
                      >
                        REMOVE
                      </div>
                    )}
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center text-gray-500 p-6">
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm font-semibold py-2 text-center cursor-pointer">
                      SELECT AN IMAGE
                    </div>
                  </div>
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>

            {/* form fields */}
            <div className="col-span-1 w-full md:col-span-3">
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                variant="bordered"
                placeholder="Document title"
                className="w-full text-sm mb-4"
              />
              {/* error box */}
              {showValidation && (!preview || !title.trim()) && (
                <div className="w-full my-4 text-[#e41407] text-[14px] p-[10px] bg-[#ffe8e8] border border-[#d3999f] text-left rounded-[6px]">
                  <strong>Oops, there are one or more issues:</strong>
                  <ul className="list-disc pl-5 mt-1">
                    {!preview && (
                      <>
                        <li>Please select a document</li>
                        <li>
                          Image of document should be JPG, PNG or other image
                          format
                        </li>
                      </>
                    )}
                    {!title.trim() && (
                      <li>Please, enter the label of document</li>
                    )}
                  </ul>
                </div>
              )}
              <div className="flex gap-3">
                <PinkButton
                  onClick={() => {
                    setShowValidation(true);
                    if (validateForm() && title.trim()) {
                      handleSave();
                    }
                  }}
                >
                  SAVE DOCUMENT
                </PinkButton>
                <button
                  onClick={() => {
                    setIsFormOpen(false);
                    setEditingId(null);
                    setTitle("");
                    if (preview) URL.revokeObjectURL(preview);
                    setPreview(null);
                    if (fileRef.current) fileRef.current.value = "";
                  }}
                  className="px-4 cursor-pointer rounded-md"
                >
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Documents list */}
      <div className="space-y-4">
        {documents.map((doc) => (
          <Card
            key={doc.id}
            className="p-4 flex flex-col md:flex-row items-start gap-4"
          >
            <div className="w-full md:w-3/5 rounded-lg overflow-hidden">
              <img
                src={doc.thumbnailUrl}
                alt={doc.title}
                className="w-full h-45 object-cover"
              />
            </div>
            <div className="flex flex-col w-full items-start">
              <div className="font-semibold text-gray-800 lowercase:capitalize">
                {doc.title}
              </div>
              <div className="text-sm text-gray-500">Uploaded {doc.date}</div>
            </div>
            <div className="flex gap-4 items-start">
              <button
                onClick={() => openFormForEdit(doc)}
                className="text-pink-600 font-semibold"
              >
                EDIT
              </button>
              <button
                onClick={() => handleDelete(doc.id)}
                className="text-gray-600"
              >
                DELETE
              </button>
            </div>
          </Card>
        ))}
      </div>

      {/* bottom big add document */}
      <div>
        <PinkButton onClick={openFormForNew}>ADD DOCUMENT</PinkButton>
      </div>
    </div>
  );
}
