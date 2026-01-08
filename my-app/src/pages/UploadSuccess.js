const UploadSuccess = ({ onDone }) => (
  <div className="text-center">
    <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
      ✓
    </div>
    <p className="text-sm font-semibold">Excel Uploaded</p>
    <p className="text-xs text-gray-500">
      Your Excel file has been uploaded successfully.
    </p>

    <button
      onClick={onDone}
      className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-white"
    >
      Done
    </button>
  </div>
);

export default UploadSuccess;
