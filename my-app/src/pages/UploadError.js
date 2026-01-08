const UploadError = ({ message, onRetry }) => (
  <div className="text-center">
    <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
      !
    </div>
    <p className="text-sm font-semibold">Upload Failed</p>
    <p className="text-xs text-gray-500">{message}</p>

    <button
      onClick={onRetry}
      className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-white"
    >
      Try Again
    </button>
  </div>
);

export default UploadError;
