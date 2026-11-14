
const SubjectCreatePage = () => {
    // class list for the select
    const classes = [{ _id: "class-1", className: "BS Computer Science", department: "Computer Science", student: [] }, { _id: "class-2", className: "BS Software Engineering", department: "Software Engineering", student: [] }];
    // form state
    const classId = "";
    const rows = [{ subjectName: "", courseCode: "" }];
    const submitting = false;
    return (<div className="max-w-3xl mx-auto p-6 pt-10">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold text-sky-600">Add Subjects</h1>
        <button className="px-4 py-2 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed transition">
          Back to list
        </button>
      </div>

      <form className="bg-white rounded-xl shadow p-4 space-y-4">
        {/* Class select */}
        <div>
          <label className="text-base font-medium">Class</label>
          <select className="w-full border rounded-lg px-3 py-2 outline-none" defaultValue={classId}>
            <option value=""> Select Class </option>
            {classes.map((c) => (<option value={c._id} key={c._id}>
                {c.className} ({c.department || "-"})
              </option>))}
          </select>
        </div>

        {/* Rows */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-medium">Subjects</h2>
            <button type="button" className="px-3 py-1.5 rounded-md bg-gray-100 hover:bg-gray-200">
              + Add Row
            </button>
          </div>

          {rows.map((row, idx) => (<div key={idx} className="grid grid-cols-12 gap-2">
              <input type="text" placeholder="Subject Name" defaultValue={row.subjectName} className="col-span-5 border rounded-lg px-3 py-2 outline-none"/>
              <input type="text" placeholder="Course Code" defaultValue={row.courseCode} className="col-span-5 border rounded-lg px-3 py-2 outline-none"/>
              <button type="button" className="col-span-2 px-3 py-2 rounded-md bg-red-100 text-red-700 hover:bg-red-200" disabled={rows.length === 1}>
                Remove
              </button>
            </div>))}
        </div>

        <button type="button" disabled={submitting} className="w-full py-2.5 rounded-lg bg-sky-600 text-white font-medium disabled:opacity-50">
          {submitting ? "Saving…" : "Save Subjects"}
        </button>
      </form>
    </div>);
};
export default SubjectCreatePage;
