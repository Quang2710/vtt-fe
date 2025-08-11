"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useFundraiseStore } from "@/stores/fundraiseStore";
import { fetcher } from "@/libs/fetcher";

const RecordingVideoPage: React.FC = () => {
  const [refreshCamera, setRefreshCamera] = useState(0);
  const [visible, setVisible] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  const [showTyping, setShowTyping] = useState(true);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordTime, setRecordTime] = useState(60);
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();
  const setAnswer = useFundraiseStore((state) => state.setAnswer);
  const questions = useFundraiseStore((state) => state.questions);
  const answers = useFundraiseStore((state) => state.answers);

  useEffect(() => {
    setShowTyping(true);
    const timer = setTimeout(() => {
      setShowTyping(false);
      setVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    let previewStream: MediaStream | null = null;
    let permissionChecked = false;
    async function checkAndAskCameraPermission() {
      if (navigator.permissions) {
        try {
          const result = await navigator.permissions.query({ name: "camera" as PermissionName });
          if (result.state === "granted") {
            previewStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: false });
            setHasPermission(true);
            setMediaStream(previewStream);
            if (videoRef.current) {
              videoRef.current.srcObject = previewStream;
              videoRef.current.play();
            }
            permissionChecked = true;
          } else if (result.state === "prompt" || result.state === "denied") {
            try {
              previewStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: false });
              setHasPermission(true);
              setMediaStream(previewStream);
              if (videoRef.current) {
                videoRef.current.srcObject = previewStream;
                videoRef.current.play();
              }
              permissionChecked = true;
            } catch (err) {
              setHasPermission(false);
              setMediaStream(null);
              if (videoRef.current) {
                videoRef.current.srcObject = null;
              }
              permissionChecked = true;
            }
          }
        } catch (err) {
          try {
            previewStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: false });
            setHasPermission(true);
            setMediaStream(previewStream);
            if (videoRef.current) {
              videoRef.current.srcObject = previewStream;
              videoRef.current.play();
            }
          } catch (err) {
            setHasPermission(false);
            setMediaStream(null);
            if (videoRef.current) {
              videoRef.current.srcObject = null;
            }
          }
        }
      } else {
        try {
          previewStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: false });
          setHasPermission(true);
          setMediaStream(previewStream);
          if (videoRef.current) {
            videoRef.current.srcObject = previewStream;
            videoRef.current.play();
          }
        } catch (err) {
          setHasPermission(false);
          setMediaStream(null);
          if (videoRef.current) {
            videoRef.current.srcObject = null;
          }
        }
      }
    }
    checkAndAskCameraPermission();
    return () => {
      if (previewStream) {
        previewStream.getTracks().forEach((track) => track.stop());
      }
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    };
  }, [visible, refreshCamera, recordedBlob]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (countdown !== null && countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prev) => (prev !== null ? prev - 1 : null));
      }, 1000);
    } else if (countdown === 0) {
      setCountdown(null);
      startRecording();
    }
    return () => clearInterval(interval);
  }, [countdown]);

  useEffect(() => {
    if (isRecording) {
      timerRef.current = setInterval(() => {
        setRecordTime((prev) => {
          if (prev <= 1) {
            stopRecording();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRecording]);

  const startRecording = async () => {
    setRecordedBlob(null);
    setPreviewUrl(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: true });
      setMediaStream(stream);
      setIsRecording(true);
      setRecordTime(60);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      const chunks: Blob[] = [];
      const recorder = new MediaRecorder(stream);
      setMediaRecorder(recorder);
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data);
      };
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: "video/webm" });
        setRecordedBlob(blob);
        setPreviewUrl(URL.createObjectURL(blob));
        if (videoRef.current) {
          videoRef.current.srcObject = null;
        }
      };
      recorder.start();
    } catch (err) {
      alert("Could not access camera/microphone.");
      setIsRecording(false);
    }
  };

  const stopRecording = () => {
    setIsRecording(false);
    setRecordTime(60);
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.stop();
    }
    if (mediaStream) {
      mediaStream.getTracks().forEach((track) => track.stop());
      setMediaStream(null);
    }
  };

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  return (
    <div className="create-container h-[100vh] flex flex-col max-w-2xl mx-auto mt-[30px] mb-[60px] my-[20%] p-[40px]">
      <p className="text-[#999] text-[16px] font-medium">Rosie @ Give.Asia</p>
      {showTyping && (
        <div className="rounded-2xl px-5 py-3 shadow-md bg-[#f4f4f4] text-[17px] text-black w-fit self-start animate-pulse mb-3">
          <span className="inline-block w-2 h-2 bg-[#bbb] rounded-full mr-1 align-middle animate-bounce"></span>
          <span className="inline-block w-2 h-2 bg-[#bbb] rounded-full mr-1 align-middle animate-bounce delay-150"></span>
          <span className="inline-block w-2 h-2 bg-[#bbb] rounded-full align-middle animate-bounce delay-300"></span>
        </div>
      )}
      {visible && (
        <>
          <div className="w-full self-start transition-all duration-500 text-[14px] leading-[24px] font-semibold text-[#333] bg-white border border-[#eee] rounded-[12px] shadow-[0_20px_30px_0_rgba(0,0,0,0.05)] py-[15px] px-[25px] mb-[10px]">
            Awesome! Please continue if you are happy with the video.
          </div>
          {!hasPermission && (
            <p className="my-[16px] text-[16px] text-black">
              To record a video update, please allow camera and microphone access on your browser.
            </p>
          )}
          <div className="w-full h-auto min-h-[400px] bg-[#f4f4f4] rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
            {recordedBlob && previewUrl ? (
              <video
                src={previewUrl}
                controls
                autoPlay
                className="w-full h-full object-cover rounded-lg"
              />
            ) : hasPermission ? (
              <div className="relative w-full h-full">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover rounded-lg"
                  autoPlay
                  muted
                  playsInline
                />
                {countdown !== null && countdown > 0 && (
                  <div className="absolute inset-0 flex items-center justify-center z-10" style={{ background: 'rgba(244,244,244,0.35)', backdropFilter: 'blur(6px)' }}>
                    <span className="text-[64px] font-bold text-[#EB008C] drop-shadow-lg">{countdown}</span>
                  </div>
                )}
                {isRecording && (
                  <span className="absolute top-2 left-3 text-[18px] font-bold text-[#EB008C] bg-white bg-opacity-80 px-3 py-1 rounded z-20">
                    {recordTime}s
                  </span>
                )}
              </div>
            ) : (
              <span className="text-[#bbb] text-[16px]">Your camera preview will appear here</span>
            )}
          </div>
          {isRecording ? (
            <button
              className="cursor-pointer w-full bg-[#EB008C] text-white text-[18px] font-semibold rounded-lg shadow hover:bg-[#c90074] transition-all duration-200 mt-4"
              style={{ height: "38px", paddingTop: 0, paddingBottom: 0 }}
              onClick={stopRecording}
            >
              STOP RECORDING
            </button>
          ) : recordedBlob && previewUrl ? (
            <div className="flex flex-col gap-4 mt-4">
              <button
                className="cursor-pointer w-full bg-[#EB008C] text-white text-[18px] font-semibold rounded-lg shadow hover:bg-[#c90074] transition-all duration-200"
                style={{ height: "38px", paddingTop: 0, paddingBottom: 0 }}
                disabled={uploading}
                onClick={async () => {
                  if (!recordedBlob) return;
                  setUploading(true);
                  try {
                    const formData = new FormData();
                    formData.append("file", recordedBlob, "thankyou.webm");
                    const data = await fetcher("/upload", {
                      method: "POST",
                      body: formData,
                    });
                    if (data.status && data.url) {
                      setAnswer(20, { answer: "", fileUrl: data.url });
                      router.push("/fundraise/new/tags-describe");
                    } else {
                      alert("Upload failed!");
                    }
                  } catch (err) {
                    alert("Upload failed!");
                  } finally {
                    setUploading(false);
                  }
                }}
              >
                {uploading ? "UPLOADING..." : "PROCEED WITH VIDEO"}
              </button>
              <button
                className="cursor-pointer w-full bg-[#f4f4f4] text-[#EB008C] text-[18px] font-semibold rounded-lg shadow hover:bg-[#e0e0e0] transition-all duration-200"
                style={{ height: "38px", paddingTop: 0, paddingBottom: 0, border: "1px solid #EB008C" }}
                onClick={() => {
                  setRecordedBlob(null);
                  setPreviewUrl(null);
                  setCountdown(null);
                  setIsRecording(false);
                  setRecordTime(60);
                  setRefreshCamera((v) => v + 1);
                }}
              >
                RETAKE
              </button>
            </div>
          ) : (
            <button
              className="cursor-pointer w-full bg-[#EB008C] text-white text-[18px] font-semibold rounded-lg shadow hover:bg-[#c90074] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
              style={{ height: "38px", paddingTop: 0, paddingBottom: 0 }}
              onClick={() => setCountdown(3)}
              disabled={isRecording || (countdown !== null && countdown > 0)}
            >
              START RECORDING
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default RecordingVideoPage;
