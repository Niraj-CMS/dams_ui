import { useState } from "react";
import { useNavigate } from "react-router-dom";
import uccList from "../data/uccList.json";

const ManualAddRecordModal = ({ isOpen, onClose }) => {
  const [selectedUcc, setSelectedUcc] = useState("");
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleDone = () => {
    navigate("/dams/add-manual", {
      state: { ucc: selectedUcc }
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="relative z-10 w-[420px] rounded-xl bg-white shadow-lg">
        <div className="border-b px-5 py-4">
          <h2 className="text-sm font-semibold text-gray-800">
            Add Record
          </h2>
        </div>

        <div className="px-5 py-6">
          <label className="text-xs font-medium text-gray-600">
            Select UCC <span className="text-red-500">*</span>
          </label>

          <select
            value={selectedUcc}
            onChange={(e) => setSelectedUcc(e.target.value)}
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
          >
            <option value="">Select UCC</option>
            {uccList.map(u => (
              <option key={u.id} value={u.ucc}>{u.ucc}</option>
            ))}
          </select>
        </div>

        <div className="flex justify-end gap-3 border-t px-5 py-4">
          <button
            onClick={onClose}
            className="rounded-lg border px-4 py-2 text-sm"
          >
            Cancel
          </button>

          <button
            disabled={!selectedUcc}
            onClick={handleDone}
            className={`rounded-lg px-4 py-2 text-sm font-medium text-white
              ${selectedUcc
                ? "bg-blue-700 hover:bg-blue-800"
                : "bg-gray-300 cursor-not-allowed"}
            `}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManualAddRecordModal;
