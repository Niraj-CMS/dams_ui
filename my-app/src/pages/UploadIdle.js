const UploadIdle = ({ onUploadClick, onManualSelect }) => (
  <div className="space-y-4">
    <button
      onClick={onUploadClick}
      className="w-full rounded-lg border border-dashed border-blue-300 bg-blue-50 px-4 py-6 text-center hover:bg-blue-100"
    >
      <p className="text-sm font-medium text-blue-700">Upload Excel File</p>
      <p className="text-xs text-gray-500">
        Import multiple entries using formatted Excel sheet.
      </p>
    </button>

    <button
      onClick={onManualSelect}
      className="w-full rounded-lg border px-4 py-6 text-center hover:bg-gray-50"
    >
      <p className="text-sm font-medium">Start Manual Entry</p>
      <p className="text-xs text-gray-500">
        Add data one-by-one using the form.
      </p>
    </button>
  </div>
);

export default UploadIdle;
