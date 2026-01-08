import React, { useRef, useState } from "react";
import UploadIdle from "../pages/UploadIdle";
import UploadSelected from "../pages/UploadSelected";
import UploadProgress from "../pages/UploadProgress";
import UploadError from "../pages/UploadError";
import UploadSuccess from "../pages/UploadSuccess";

const AddRecordModal = ({ isOpen, onClose, onManualSelect }) => {
  const fileInputRef = useRef(null);

  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("idle");
  // idle | fileSelected | uploading | success | error
  const [progress, setProgress] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  // STEP 1: File selected (NO upload yet)
  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setStatus("fileSelected");
  };

  // STEP 2: Click Continue → start upload (dummy)
  const startUpload = () => {
    setStatus("uploading");
    setProgress(0);

    const isInvalid = file.name.endsWith(".txt"); // dummy validation

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          if (isInvalid) {
            setStatus("error");
            setErrorMessage(
              "The uploaded Excel file format is invalid or does not meet the required template."
            );
          } else {
            setStatus("success");
          }
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const resetUpload = () => {
    setFile(null);
    setProgress(0);
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={status === "uploading" ? null : onClose}
      />

      <div className="relative z-10 w-[420px] rounded-xl bg-white shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-5 py-4">
          <h2 className="text-sm font-semibold">Upload Document</h2>
          <button onClick={onClose}>✕</button>
        </div>

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept=".xlsx,.xls,.csv"
          className="hidden"
          onChange={handleFileSelect}
        />

        {/* Body */}
        <div className="p-5">
          {status === "idle" && (
            <UploadIdle
              onUploadClick={() => fileInputRef.current.click()}
              onManualSelect={onManualSelect}
            />
          )}

          {status === "fileSelected" && (
            <UploadSelected
              file={file}
              onContinue={startUpload}
              onRemove={resetUpload}
            />
          )}

          {status === "uploading" && (
            <UploadProgress file={file} progress={progress} />
          )}

          {status === "error" && (
            <UploadError message={errorMessage} onRetry={resetUpload} />
          )}

          {status === "success" && (
            <UploadSuccess onDone={onClose} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AddRecordModal;
