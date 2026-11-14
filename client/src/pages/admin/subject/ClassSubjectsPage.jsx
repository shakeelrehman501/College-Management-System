
const ClassSubjectsPage = () => {
    const classSubjects = [{ _id: "subject-1", subjectName: "Mathematics", courseCode: "MATH-101", className: { _id: "class-1", className: "BS Computer Science" }, teacher: { teacher: { name: "Ali Ahmed" } } }, { _id: "subject-2", subjectName: "Programming Fundamentals", courseCode: "CS-101", className: { _id: "class-1", className: "BS Computer Science" } }, { _id: "subject-3", subjectName: "Database Systems", courseCode: "SE-201", className: { _id: "class-2", className: "BS Software Engineering" } }], loading = false;
    const actingId = null;
    const clearing = false;
    return (<div className="max-w-5xl mx-auto p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Class Subjects</h1>
        <button className="text-indigo-600 hover:underline">
          Back to all subjects
        </button>
      </div>

      <div className="mb-3">
        <button disabled={clearing} className="px-4 py-2 rounded-lg bg-red-600 text-white disabled:opacity-50">
          {clearing ? "Deleting…" : "Delete All for this Class"}
        </button>
      </div>

      {loading && <p className="text-sm text-gray-500">Loading…</p>}

      {!loading && (!classSubjects || classSubjects.length === 0) && (<p className="text-sm text-gray-500">No subjects found for this class.</p>)}

      {!loading && classSubjects?.length > 0 && (<div className="bg-white rounded-xl shadow">
          <ul className="divide-y">
            {classSubjects.map((s) => {
                const busy = actingId === s._id;
                return (<li key={s._id} className="p-4 flex items-center justify-between">
                  <div>
                    <p className="font-medium">{s.subjectName}</p>
                    <p className="text-xs text-gray-500">Code: {s.courseCode}</p>
                  </div>
                  <div className="flex gap-2">
                    <button disabled={busy} className="px-3 py-1.5 rounded-md bg-red-600 text-white disabled:opacity-50">
                      {busy ? "Deleting…" : "Delete"}
                    </button>
                  </div>
                </li>);
            })}
          </ul>
        </div>)}
    </div>);
};
export default ClassSubjectsPage;
