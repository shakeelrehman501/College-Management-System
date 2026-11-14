
const StudentCreatePage = () => {
    const classes = [{ _id: "class-1", className: "BS Computer Science", department: "Computer Science", student: [] }, { _id: "class-2", className: "BS Software Engineering", department: "Software Engineering", student: [] }];
    const email = "";
    const classId = "";
    const submitting = false;
    return (<div className="max-w-3xl mx-auto p-6 pt-10">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold text-sky-600">Create Student Profile</h1>
        <button className="px-4 py-2 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed transition">
          Back to list
        </button>
      </div>

      <form className="bg-white rounded-xl shadow p-4 space-y-4">
        <div>
          <label className="block text-sm mb-1">Student Email</label>
          <input type="email" placeholder="student@email.com" defaultValue={email} className="w-full border rounded-lg px-3 py-2 outline-none"/>
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

        <button type="button" disabled={submitting} className="w-full py-2.5 rounded-lg bg-sky-600 text-white font-medium disabled:opacity-50">
          {submitting ? "Creating…" : "Create"}
        </button>
      </form>
    </div>);
};
export default StudentCreatePage;
