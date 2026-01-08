import { useLocation } from "react-router-dom";
import formData from "../data/manualFormData.json";

const AddDetailsManually = () => {
  const { state } = useLocation();
  const ucc = state?.ucc || "";

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-lg font-semibold mb-4">
        Add Details Manually
      </h1>

      <div className="bg-white rounded-xl p-6 shadow">
        <h2 className="font-medium mb-4">Drone Survey Scheduling</h2>

        <div className="grid grid-cols-2 gap-4">
          <input disabled value={ucc} className="input" />
          <input disabled value={formData.projectName} className="input" />

          <input disabled value={formData.ro} className="input" />
          <input disabled value={formData.piu} className="input" />

          <input disabled value={formData.pdName} className="input" />
          <input disabled value={formData.aeName} className="input" />

          <select className="input">
            <option>Select DSP</option>
            <option>M/s Trust Media</option>
            <option>M/s Drone Vision</option>
          </select>

          <div>
            <p className="text-xs mb-1">Applicable Suite *</p>
            <div className="flex gap-2">
              <button className="chip-active">UC</button>
              <button className="chip">O&M</button>
            </div>
          </div>

          <input type="date" className="input" />
          <input type="date" className="input" />
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button className="btn-outline">Cancel</button>
          <button disabled className="btn-disabled">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AddDetailsManually;
