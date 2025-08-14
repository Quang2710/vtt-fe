import React, { useEffect, useRef } from "react";
import "./scss/index.scss";
import "./ts";

export interface TextEditorProps {
  options?: any; // Use your EditorOptions type if you want
}

const TextEditor: React.FC<TextEditorProps> = ({ options }) => {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current && typeof window !== "undefined") {
      // @ts-ignore
      window.installEditor(editorRef.current, options || {});
    }
  }, [options]);

  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="block mb-1 text-sm font-semibold text-gray-600">
        Campaign story
      </label>
      <div
        ref={editorRef}
        className="w-full min-h-[450px] border-2 border-gray-300 rounded-2xl p-4"
      />
    </div>
  );
};

export default TextEditor;
