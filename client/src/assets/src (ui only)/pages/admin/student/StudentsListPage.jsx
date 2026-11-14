
// Child component so hooks are not inside a loop
const ClassSection = ({ label, classStudents, isOpen, actingId }) => {
    const maxHeight = "1000px";
    return (<div className="mb-4 bg-white shadow rounded-xl overflow-hidden">

      <button className="w-full flex justify-between items-center p-3 bg-gray-200 hover:bg-gray-300">
        <span className="font-medium">
          {label} ({classStudents.length})
        </span>
        <svg className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
        </svg>
      </button>

      <div style={{ maxHeight }} className="transition-all duration-300 ease-in-out overflow-hidden">
        <ul className="divide-y">
          {classStudents.map((st) => {
            const busy = actingId === st._id;
            return (<li key={st._id} className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium">{st?.student?.name || "Unnamed Student"}</p>
                  <p className="text-xs text-gray-500">
                    Attendance entries: {st?.attendance?.length ?? 0}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 rounded-md bg-gray-100 hover:bg-gray-200">
                    Details
                  </button>
                  <button disabled={busy} className="px-3 py-1.5 rounded-md bg-red-600 text-white disabled:opacity-50">
                    {busy ? "Deleting…" : "Delete"}
                  </button>
                </div>
              </li>);
        })}
        </ul>
      </div>
    </div>);
};
const StudentsListPage = () => {
    const students = [{ _id: "student-1", student: { name: "Ayesha Khan", email: "ayesha@example.com" }, sClass: { _id: "class-1", className: "BS Computer Science" }, attendance: [] }, { _id: "student-2", student: { name: "Hamza Ali", email: "hamza@example.com" }, sClass: { _id: "class-1", className: "BS Computer Science" }, attendance: [] }, { _id: "student-3", student: { name: "Sara Ahmed", email: "sara@example.com" }, sClass: { _id: "class-2", className: "BS Software Engineering" }, attendance: [] }], loading = false;
    const expandedClasses = ({});
    const actingId = null;
    const bulkBusy = false;
    // useMemo never change jabtak students change nhi hoty
    const grouped = students.reduce((acc, st) => {
        const label = st?.sClass?.className || "No Class";
        if (!acc[label])
            acc[label] = [];
        acc[label].push(st);
        return acc;
    }, {});
    return (<div className="max-w-6xl mx-auto p-6 pt-8">

      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl text-sky-600 font-medium">Students</h1>
        <div className="flex gap-2">
          <button disabled={bulkBusy} className="px-4 py-2 rounded-lg bg-amber-600 text-white disabled:opacity-50">
            {bulkBusy ? "Working…" : "Clear All Attendance"}
          </button>
          <button disabled={bulkBusy} className="px-4 py-2 rounded-lg bg-red-600 text-white disabled:opacity-50">
            {bulkBusy ? "Working…" : "Delete All"}
          </button>
          <button className="px-4 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700">
            + New Student
          </button>
        </div>
      </div>

      {loading && <p className="text-sm text-gray-500">Loading…</p>}
      {!loading && students.length === 0 && (<p className="text-sm text-gray-500">No students found.</p>)}

      {!loading &&
            Object.entries(grouped).map(([label, classStudents]) => (<ClassSection key={label} label={label} classStudents={classStudents} isOpen={!!expandedClasses[label]} actingId={actingId}/>))}
      <div className="flex justify-end">
        <button className="px-4 py-2 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed transition">
          Back to Dashboard
        </button>
      </div>
    </div>);
};
export default StudentsListPage;
