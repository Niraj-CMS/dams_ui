import { useEffect, useState } from "react";
import data from "../data/droneSchedule.json";
import StatusBadge from "../components/StatusBadge";
import Pagination from "../components/Pagination";
import AddRecordModal from "../components/AddRecordModal";
import ManualAddRecordModal from "../components/ManualAddRecordModal";
const DroneSurveyScheduling = () => {
    const [rows, setRows] = useState([]);
    const [search, setSearch] = useState("");
    const [showAddModal, setShowAddModal] = useState(false);
const [showManualModal, setShowManualModal] = useState(false);




    useEffect(() => {
        // simulate API
        setTimeout(() => setRows(data), 400);
    }, []);

    const filtered = rows.filter(r =>
        r.workOrderId.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            {/* Header */}
            <div className="mb-4">
                <h1 className="text-xl font-semibold text-gray-800">
                    Drone Survey Scheduling
                </h1>

                <div className="mt-2 flex gap-6 text-sm">
                    <button className="font-medium text-blue-600 border-b-2 border-blue-600 pb-1">
                        DAMS Details
                    </button>
                    <button className="text-gray-500">Activity Logs</button>
                </div>
            </div>

            {/* Card */}
            <div className="bg-white rounded-xl shadow">
                {/* Card Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="font-medium text-gray-700">
                        Drone Survey Scheduling Lists
                    </h2>
                   <button
  onClick={() => setShowAddModal(true)}
  className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
>
  + Add Record
</button>


                </div>

                {/* Filters */}
                <div className="flex items-center justify-between p-4">
                    <input
                        type="month"
                        className="border rounded-md px-3 py-2 text-sm"
                    />

                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border rounded-md px-3 py-2 text-sm"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                        <button className="border rounded-md p-2">🔍</button>
                        <button className="border rounded-md p-2">⬇</button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50 text-gray-600">
                            <tr>
                                <th className="px-4 py-3 text-left">Work Order ID</th>
                                <th className="px-4 py-3 text-left">UCC</th>
                                <th className="px-4 py-3 text-left">Project Type</th>
                                <th className="px-4 py-3 text-left">DSP</th>
                                <th className="px-4 py-3">Inspection Month</th>
                                <th className="px-4 py-3">TSP</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Applicable Suite</th>
                                <th className="px-4 py-3">Schedule Date of Inspection</th>
                                <th className="px-4 py-3">Schedule Date of Closure</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filtered.map(row => (
                                <tr
                                    key={row.id}
                                    className="border-t hover:bg-gray-50"
                                >
                                    <td className="px-4 py-3">{row.workOrderId}</td>
                                    <td className="px-4 py-3 font-medium">{row.ucc}</td>
                                    <td className="px-4 py-3">{row.projectType}</td>
                                    <td className="px-4 py-3">{row.dsp}</td>
                                    <td className="px-4 py-3 text-center">{row.inspectionMonth}</td>
                                    <td className="px-4 py-3 text-center">{row.tsp}</td>
                                    <td className="px-4 py-3 text-center">
                                        <StatusBadge status={row.status} />
                                    </td>
                                    <td className="px-4 py-3 text-center">{row.suite}</td>
                                    <td className="px-4 py-3 text-center">{row.inspectionDate}</td>
                                    <td className="px-4 py-3 text-center">{row.closureDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
               

<AddRecordModal
  isOpen={showAddModal}
  onClose={() => setShowAddModal(false)}
  onManualSelect={() => {
    setShowAddModal(false);
    setShowManualModal(true);
  }}
/>

<ManualAddRecordModal
  isOpen={showManualModal}
  onClose={() => setShowManualModal(false)}
/>



                {/* Pagination */}
                <Pagination />
            </div>
        </div>
    );
};

export default DroneSurveyScheduling;
