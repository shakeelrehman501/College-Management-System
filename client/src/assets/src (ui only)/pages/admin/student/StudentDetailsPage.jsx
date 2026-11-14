
const StudentDetailsPage = () => {
  const student = ({ _id: "student-1", student: { name: "Ayesha Khan", email: "ayesha@example.com" }, sClass: { _id: "class-1", className: "BS Computer Science" }, attendance: [], subjects: [{ _id: "subject-1", subjectName: "Mathematics", courseCode: "MATH-101", className: { _id: "class-1", className: "BS Computer Science" }, teacher: { teacher: { name: "Ali Ahmed" } } }, { _id: "subject-2", subjectName: "Programming Fundamentals", courseCode: "CS-101", className: { _id: "class-1", className: "BS Computer Science" } }, { _id: "subject-3", subjectName: "Database Systems", courseCode: "SE-201", className: { _id: "class-2", className: "BS Software Engineering" } }] }), loading = false;
  const classSubjects = [{ _id: "subject-1", subjectName: "Mathematics", courseCode: "MATH-101", className: { _id: "class-1", className: "BS Computer Science" }, teacher: { teacher: { name: "Ali Ahmed" } } }, { _id: "subject-2", subjectName: "Programming Fundamentals", courseCode: "CS-101", className: { _id: "class-1", className: "BS Computer Science" } }, { _id: "subject-3", subjectName: "Database Systems", courseCode: "SE-201", className: { _id: "class-2", className: "BS Software Engineering" } }], subjLoading = false;
  const currentClassId = student?.sClass?._id || student?.sClass || "";
  // attendance form state
  const subjectId = "";
  const date = () => new Date().toISOString().slice(0, 10);
  const status = "present";
  const busy = false;
  return (<div className="max-w-5xl mx-auto p-6 pt-8">
    <div className="flex items-center justify-between mb-4">
      <h1 className="text-2xl text-sky-600 font-medium">Student Details</h1>
      <button disabled={loading} className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition">
        Back to list
      </button>
    </div>

    {loading && <p className="text-sm text-gray-500">Loading…</p>}

    {!loading && !student && (<p className="text-sm text-gray-500">Student not found.</p>)}

    {!loading && student && (<div className="space-y-6">
      {/* basic information */}
      <div className="bg-white rounded-xl shadow p-4">
        <p><span className="font-medium">Name:</span> {student?.student?.name || "—"}</p>
        <p><span className="font-medium">Email:</span> {student?.student?.email || "—"}</p>
        <p><span className="font-medium">Class:</span> {student?.sClass?.className || "—"}</p>
        <p><span className="font-medium">Attendance entries:</span> {Array.isArray(student.attendance) ? student.attendance.length : 0}</p>
      </div>

      {/* mark attendance */}
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-medium mb-3 text-sky-600">Mark Attendance</h2>
        <div className="grid grid-cols-12 gap-2 items-end">
          <div className="col-span-5">
            <label className="block text-sm mb-1">Subject</label>
            <select className="w-full border rounded-lg px-3 py-2 outline-none" defaultValue={subjectId} disabled={subjLoading || !currentClassId}>
              <option value="">{subjLoading ? "Loading…" : " Select Subject "}</option>
              {classSubjects.map((s) => (<option key={s._id} value={s._id}>
                {s.subjectName} ({s.courseCode})
              </option>))}
            </select>
          </div>

          <div className="col-span-3">
            <label className="block text-sm mb-1">Date</label>
            <input type="date" className="w-full border rounded-lg px-3 py-2 outline-none" defaultValue={date} />
          </div>

          <div className="col-span-2">
            <label className="block text-sm mb-1">Status</label>
            <select className="w-full border rounded-lg px-3 py-2 outline-none" defaultValue={status}>
              <option value="present">Present</option>
              <option value="absent">Absent</option>
            </select>
          </div>

          <div className="col-span-2">
            <button disabled={busy} className="w-full px-3 py-2 rounded-md bg-indigo-600 text-white disabled:opacity-50">
              {busy ? "Saving…" : "Save"}
            </button>
          </div>
        </div>
      </div>

      {/* clear attendance */}
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-medium mb-3 text-sky-600">Clear Attendance</h2>
        <div className="flex flex-wrap gap-2">
          <button disabled={busy} className="px-3 py-2 rounded-md bg-amber-600 text-white disabled:opacity-50">
            {busy ? "Working…" : "Clear This Student (All)"}
          </button>

          <button disabled={busy || !subjectId} className="px-3 py-2 rounded-md bg-amber-500 text-white disabled:opacity-50" title={!subjectId ? "Select a subject first" : ""}>
            {busy ? "Working…" : "Clear This Student (Subject)"}
          </button>

          <button disabled={busy || !subjectId} className="px-3 py-2 rounded-md bg-red-600 text-white disabled:opacity-50" title={!subjectId ? "Select a subject first" : ""}>
            {busy ? "Working…" : "Clear ALL Students (Subject)"}
          </button>
        </div>
      </div>

      {/* attendance */}
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-medium mb-3 text-sky-600">Attendance Log</h2>
        {Array.isArray(student.attendance) && student.attendance.length > 0 ? (<ul className="divide-y">
          {student.attendance
            .slice()
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((a, idx) => (<li key={idx} className="py-2 flex items-center justify-between">
              <div>
                <p className="font-medium">{new Date(a.date).toDateString()}</p>
                <p className="text-xs text-gray-500">
                  Status: {a.status} • Subject: {String(a.subjectId.subjectName)}
                </p>
              </div>
            </li>))}
        </ul>) : (<p className="text-sm text-gray-500">No attendance yet.</p>)}
      </div>
    </div>)}
  </div>);
};
export default StudentDetailsPage;
