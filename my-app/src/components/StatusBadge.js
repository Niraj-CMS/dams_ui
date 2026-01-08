const StatusBadge = ({ status }) => {
  return (
    <span className="inline-flex items-center gap-0 rounded bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-700">
      {status}
    </span>
  );
};

export default StatusBadge;
