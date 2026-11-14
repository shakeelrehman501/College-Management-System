
const TeacherCreatePage = () => {
    const classes = [{ _id: "class-1", className: "BS Computer Science", department: "Computer Science", student: [] }, { _id: "class-2", className: "BS Software Engineering", department: "Software Engineering", student: [] }];
    const freeSubjects = [{ _id: "subject-1", subjectName: "Mathematics", courseCode: "MATH-101", className: { _id: "class-1", className: "BS Computer Science" }, teacher: { teacher: { name: "Ali Ahmed" } } }, { _id: "subject-2", subjectName: "Programming Fundamentals", courseCode: "CS-101", className: { _id: "class-1", className: "BS Computer Science" } }, { _id: "subject-3", subjectName: "Database Systems", courseCode: "SE-201", className: { _id: "class-2", className: "BS Software Engineering" } }], subjLoading = false;
    const email = "";
    const classId = "";
    const subjectId = "";
    const submitting = false;
    return (<div className="max-w-3xl mx-auto p-6 pt-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold text-sky-600">Create Teacher Profile</h1>
        <button className="px-4 py-2 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed transition">
          Back to list
        </button>
      </div>

      <form className="bg-white rounded-xl shadow p-4 space-y-4">
        <div>
          <label className="block text-sm mb-1">Teacher Email</label>
          <input type="email" placeholder="teacher@email.com" defaultValue={email} className="w-full border rounded-lg px-3 py-2 outline-none"/>
        </div>

        <div>
          <label className="block text-sm mb-1">Class</label>
          <select className="w-full border rounded-lg px-3 py-2 outline-none" defaultValue={classId}>
            <option value=""> Select Class </option>
            {classes.map((c) => (<option key={c._id} value={c._id}>
                {c.className} ({c.department || "-"})
              </option>))}
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">Subject (free only)</label>
          <select className="w-full border rounded-lg px-3 py-2 outline-none" defaultValue={subjectId} disabled={!classId || subjLoading}>
            <option value="">{subjLoading ? "Loading…" : " Select Subject "}</option>
            {freeSubjects.map((s) => (<option key={s._id} value={s._id}>
                {s.subjectName} ({s.courseCode})
              </option>))}
          </select>
          {!freeSubjects.length && classId && !subjLoading && (<p className="text-xs text-gray-500 mt-1">No free subjects in this class.</p>)}
        </div>

        <button type="button" disabled={submitting} className="w-full py-2.5 rounded-lg bg-sky-600 text-white font-medium disabled:opacity-50">
          {submitting ? "Creating…" : "Create"}
        </button>
      </form>
    </div>);
};
export default TeacherCreatePage;
