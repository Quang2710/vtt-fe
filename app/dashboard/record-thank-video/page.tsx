"use client";

import PinkButtonWidth from "@/components/layout/button/w-limit";
import { Card, Divider } from "@heroui/react";
import { useRef, useState } from "react";

export default function RecordThankVideoPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [recording, setRecording] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);

  const startRecording = async () => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const hasVideo = devices.some((device) => device.kind === "videoinput");
      if (!hasVideo) {
        alert("No camera device found.");
        return; // exit without throwing
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      if (videoRef.current) videoRef.current.srcObject = stream;
      const mediaRecorder = new MediaRecorder(stream);
      const chunks: BlobPart[] = [];
      mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: "video/webm" });
        setRecordedBlob(blob);
        if (videoRef.current) videoRef.current.srcObject = null;
        stream.getTracks().forEach((track) => track.stop());
      };
      mediaRecorder.start();
      mediaRecorderRef.current = mediaRecorder;
      setRecording(true);
    } catch (err) {
      // Optional: only log unexpected errors
      if (err && typeof err === "object" && "message" in err) {
        if (
          (err as { message: string }).message !== "No camera device found."
        ) {
          console.error(err);
        }
        alert(
          (err as { message?: string }).message || "Could not start recording."
        );
      } else {
        alert("Could not start recording.");
      }
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  return (
    <div className="min-h-screen px-6 md:px-[7vw] py-15">
      <h1 className="text-md hidden md:block  font-medium mb-6">
        To record a video update, please allow camera and microphone access on
        your browser.
      </h1>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left panel */}
        <div className="flex-1 rounded-xl border-gray-200 border p-6 max-w-md">
          <h2 className="text-lg font-semibold mb-4">
            Record a simple thank you video for your givers in less than a
            minute
          </h2>
          <div className="mb-4">
            <p className="font-semibold mb-4">Some tips for recording:</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 p-2 bg-gray-200 rounded-lg">
                  <img
                    src={"/videorecord/quiet.png"}
                    alt="Quiet"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <span>Find a quiet place</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 p-2 bg-gray-200 rounded-lg">
                  <img
                    src={"/videorecord/phone.png"}
                    alt="Quiet"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <span>
                  Film in portrait using the front camera of your phone
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 p-2 bg-gray-200 rounded-lg">
                  <img
                    src={"/videorecord/clear.png"}
                    alt="Quiet"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <span>
                  Ensure that you and beneficiary can be seen clearly in the
                  video
                </span>
              </li>
            </ul>
          </div>
          <Divider className="my-4" />
          <div>
            <p className="font-semibold mb-2">Message ideas:</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                “Thank you for your generous donations; your support means the
                world to my family.”
              </li>
              <li>
                “I am overwhelmed with gratitude for your generous donations.
                Your support gives my son hope.”
              </li>
              <li>
                “Your recent donations are vital to our ongoing efforts to
                support our family member, and we truly appreciate your
                continued support.”
              </li>
            </ol>
          </div>
        </div>
        {/* Right panel */}
        <div className="flex-1 rounded-xl relative min-h-[360px] flex items-center justify-center border">
          {!recordedBlob ? (
            <>
              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
              />

              {!recording ? (
                // Centered START RECORDING
                <div className="z-10 flex justify-center items-center">
                  <PinkButtonWidth onClick={startRecording}>
                    START RECORDING
                  </PinkButtonWidth>
                </div>
              ) : (
                <>
                  {/* STOP RECORDING outside bottom */}
                  <div className="absolute -bottom-16 w-full flex justify-center z-10">
                    <PinkButtonWidth onClick={stopRecording}>
                      STOP RECORDING
                    </PinkButtonWidth>
                  </div>
                </>
              )}
            </>
          ) : (
            <Card className="p-4 w-full text-center">
              <p className="font-semibold mb-4">
                Awesome! Please submit the video if you are happy with it.
              </p>
              <div className="flex justify-center gap-4">
                <button
                  className="text-pink-600 font-bold"
                  onClick={() => setRecordedBlob(null)}
                >
                  RETAKE
                </button>
                <button
                  className="bg-pink-600 text-white py-2 px-4 rounded-full font-bold"
                  onClick={() => {
                    console.log("Uploading video...", recordedBlob);
                  }}
                >
                  UPLOAD VIDEO
                </button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
