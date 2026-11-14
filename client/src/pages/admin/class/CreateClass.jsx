
const ClassCreatePage = () => {
    const className = "";
    const department = "";
    const submitting = false;
    return (<div className="max-w-xl mx-auto p-6 pt-10">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold text-sky-600">Create Class</h1>
        <button className="px-4 py-2 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed transition">
          Back to list
        </button>
      </div>

      <form className="bg-white rounded-xl shadow p-4 space-y-4">
        <div>
          <label className="block text-sm mb-1">Class Name</label>
          <input type="text" defaultValue={className} placeholder="e.g. BSCS-1" className="w-full border rounded-lg px-3 py-2 outline-none focus:ring"/>
        </div>

        <div>
          <label className="block text-sm mb-1">Department</label>
          <input type="text" defaultValue={department} placeholder="e.g. Computer Science" className="w-full border rounded-lg px-3 py-2 outline-none focus:ring"/>
        </div>

        <button type="button" disabled={submitting} className="w-full py-2.5 rounded-lg bg-sky-600 text-white font-medium disabled:opacity-50">
          {submitting ? "Creating…" : "Create"}
        </button>
      </form>
    </div>);
};
export default ClassCreatePage;
