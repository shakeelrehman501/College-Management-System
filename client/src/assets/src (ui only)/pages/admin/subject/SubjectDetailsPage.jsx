
const SubjectDetailsPage = () => {
    const subject = ({ _id: "subject-1", subjectName: "Mathematics", courseCode: "MATH-101", className: { _id: "class-1", className: "BS Computer Science" }, teacher: { teacher: { name: "Ali Ahmed" } } }), loading = false 
    // message = "", error = false;
    const busy = false;
    return (<div className="max-w-3xl mx-auto p-6 pt-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold text-sky-600">Subject Details</h1>
        <button className="px-4 py-2 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed transition">
          Back to list
        </button>
      </div>

      {loading && <p className="text-sm text-gray-500">Loading…</p>}

      {!loading && !subject && (<p className="text-sm text-gray-500">Subject not found.</p>)}

      {!loading && subject && (<div className="bg-white rounded-xl shadow p-4 space-y-3">
          <p>
            <span className="font-medium">Subject:</span> {subject.subjectName}
          </p>
          <p>
            <span className="font-medium">Course Code:</span> {subject.courseCode}
          </p>
          <p>
            <span className="font-medium">Class:</span>{" "}
            {typeof subject.className === "object"
                ? subject.className?.className
                : String(subject.className)}
          </p>
          <p>
            <span className="font-medium">Teacher:</span>{" "}
            {subject?.teacher?.teacher?.name || "—"}
          </p>

          <div className="flex gap-2 pt-2">
            <button disabled={busy} className="px-3 py-1.5 rounded-md bg-red-600 text-white disabled:opacity-50">
              {busy ? "Deleting…" : "Delete Subject"}
            </button>
            {!subject?.teacher?.teacher &&
                <button className="px-4 py-2 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed transition">
                Assign Teacher
              </button>}
          </div>
        </div>)}
    </div>);
};
export default SubjectDetailsPage;
