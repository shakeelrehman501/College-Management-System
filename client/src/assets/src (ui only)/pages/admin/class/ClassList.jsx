
const ClassesListPage = () => {
    const classes = [{ _id: "class-1", className: "BS Computer Science", department: "Computer Science", student: [] }, { _id: "class-2", className: "BS Software Engineering", department: "Software Engineering", student: [] }], loading = false
    const actingId = null;
    return (<div className="max-w-5xl mx-auto p-6 pt-8">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-semibold text-sky-600">Classes</h1>
                <div className="flex items-center justify-between gap-2">
                    <div>
                        <button className="px-4 py-2.5 rounded-lg bg-sky-600 text-white hover:bg-sky-700">
                            + New Class
                        </button>
                    </div>
                    <button className="px-4 py-2.5 rounded-lg bg-sky-600 text-white hover:bg-sky-700">
                        Back to Dashboard
                    </button>
                </div>
            </div>

            {loading && <p className="text-sm text-gray-500">Loading…</p>}

            {!loading && (!classes || classes.length === 0) && (<p className="text-sm text-gray-500">No classes found.</p>)}

            {!loading && classes?.length > 0 && (<div className="bg-white rounded-xl shadow">
                    <ul className="divide-y">
                        {classes.map((c) => {
                const busy = actingId === c._id;
                return (<li key={c._id} className="p-4 flex items-center justify-between">
                                    <div>
                                        <p className="font-medium">{c.className}</p>
                                        <p className="text-xs text-gray-500">
                                            Dept: {c.department || "-"}
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="px-3 py-1.5 rounded-md bg-gray-100 hover:bg-gray-200">
                                            Details
                                        </button>
                                        <button disabled={busy} className="px-3 py-1.5 rounded-md bg-amber-500 text-white disabled:opacity-50">
                                            {busy ? "Working…" : "Clear Students"}
                                        </button>
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
export default ClassesListPage;
