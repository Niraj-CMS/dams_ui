const UploadSelected = ({ file, onContinue, onRemove }) => (
  <div className="space-y-4">
    <div className="rounded-lg border p-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">{file.name}</p>
          <p className="text-xs text-gray-500">
            {(file.size / (1024 * 1024)).toFixed(2)} MB
          </p>
        </div>
        <button onClick={onRemove} className="text-gray-400">
          ✕
        </button>
      </div>
    </div>

    <button
      onClick={onContinue}
      className="w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700"
    >
      Continue
    </button>
  </div>
);

export default UploadSelected;
