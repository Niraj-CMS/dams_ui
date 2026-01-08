const UploadProgress = ({ file, progress }) => (
  <div className="rounded-lg border p-3">
    <p className="text-sm font-medium">{file.name}</p>
    <p className="text-xs text-gray-500">
      {(file.size / (1024 * 1024)).toFixed(2)} MB
    </p>

    <div className="mt-2 h-2 rounded bg-gray-200">
      <div
        className="h-2 rounded bg-blue-600 transition-all"
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
);

export default UploadProgress;
