import { useEffect, useState } from "react";
import data from "../data/droneSchedule.json";

const DroneSurveyScheduling = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  // Fake API fetch
  useEffect(() => {
    setTimeout(() => {
      setList(data);
    }, 500);
  }, []);

  const filteredData = list.filter(item =>
    item.workOrderId.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Drone Survey Scheduling</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          + Add Record
        </button>
      </div>

      <div className="flex justify-between mb-4">
        <input
          type="month"
          className="border px-3 py-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Search"
          className="border px-3 py-2 rounded-md"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full border">
          <thead className="bg-gray-100 text-sm">
            <tr>
              <th className="px-4 py-3 text-left">Work Order ID</th>
              <th className="px-4 py-3">UCC</th>
              <th className="px-4 py-3">Project Type</th>
              <th className="px-4 py-3">DSP</th>
              <th className="px-4 py-3">Inspection Month</th>
              <th className="px-4 py-3">TSP</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Applicable Suite</th>
              <th className="px-4 py-3">Inspection Date</th>
              <th className="px-4 py-3">Closure Date</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {filteredData.map(item => (
              <tr key={item.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{item.workOrderId}</td>
                <td className="px-4 py-2">{item.ucc}</td>
                <td className="px-4 py-2">{item.projectType}</td>
                <td className="px-4 py-2">{item.dsp}</td>
                <td className="px-4 py-2">{item.inspectionMonth}</td>
                <td className="px-4 py-2">{item.tsp}</td>
                <td className="px-4 py-2">
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-2">{item.suite}</td>
                <td className="px-4 py-2">{item.inspectionDate}</td>
                <td className="px-4 py-2">{item.closureDate}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredData.length === 0 && (
          <p className="text-center p-4 text-gray-500">No records found</p>
        )}
      </div>
    </div>
  );
};

export default DroneSurveyScheduling;
