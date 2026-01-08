const Pagination = () => {
  return (
    <div className="flex items-center justify-end gap-4 px-4 py-3 text-sm text-gray-600">
      <span>Rows per page</span>
      <select className="border rounded px-2 py-1">
        <option>1</option>
        <option>2</option>
      </select>
      <span>1–20 of 12</span>
      <button className="border rounded px-2 py-1">‹</button>
      <button className="border rounded px-2 py-1">›</button>
    </div>
  );
};

export default Pagination;
