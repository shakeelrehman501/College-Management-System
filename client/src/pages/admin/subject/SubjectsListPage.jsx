
const SubjectsListPage = () => {
    const subjects = [{ _id: "subject-1", subjectName: "Mathematics", courseCode: "MATH-101", className: { _id: "class-1", className: "BS Computer Science" }, teacher: { teacher: { name: "Ali Ahmed" } } }, { _id: "subject-2", subjectName: "Programming Fundamentals", courseCode: "CS-101", className: { _id: "class-1", className: "BS Computer Science" } }, { _id: "subject-3", subjectName: "Database Systems", courseCode: "SE-201", className: { _id: "class-2", className: "BS Software Engineering" } }], loading = false;
    const actingId = null;
    const deletingAll = false;
    const expandedClasses = ({});
    const grouped = subjects.reduce((acc, subj) => {
        const classLabel = typeof subj.className === "object" && subj.className
            ? subj.className.className
            : String(subj.className || "Unassigned");
        if (!acc[classLabel])
            acc[classLabel] = [];
        acc[classLabel].push(subj);
        return acc;
    }, {});
    return (<div className="max-w-6xl mx-auto p-6 pt-8">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-semibold text-sky-600">Subjects</h1>
                <div className="flex gap-2">
                    <button disabled={deletingAll} className="px-4 py-2 rounded-lg bg-red-600 text-white disabled:opacity-50">
                        {deletingAll ? "Deleting…" : "Delete All"}
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700">
                        + New Subject
                    </button>
                    <button className="px-4 py-2.5 rounded-lg bg-sky-600 text-white hover:bg-sky-700">
                        Back to Dashboard
                    </button>
                </div>
            </div>

            {/* Loading or Empty state */}
            {loading && <p className="text-sm text-gray-500">Loading…</p>}
            {!loading && (!subjects || subjects.length === 0) && (<p className="text-sm text-gray-500">No subjects found.</p>)}

            {/* Grouped dropdown list */}
            {!loading &&
            Object.keys(grouped).map((classLabel) => (<div key={classLabel} className="bg-white rounded-xl shadow mb-4 overflow-hidden">
                        {/* Class dropdown */}
                        <button className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 text-left">
                            <span className="font-semibold text-gray-700">
                                Class: {classLabel} ({grouped[classLabel].length})
                            </span>
                            <span className={`text-sm text-gray-500 transform transition-transform duration-300 ${expandedClasses[classLabel] ? "rotate-180" : "rotate-0"}`}>
                                ▼
                            </span>
                        </button>

                        {/* subject list */}
                        <div className={`transition-all duration-500 overflow-hidden ${expandedClasses[classLabel]
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"}`}>
                            <ul className="divide-y">
                                {grouped[classLabel].map((s) => {
                    const busy = actingId === s._id;
                    return (<li key={s._id} className="p-4 flex items-center justify-between">
                                            <div>
                                                <p className="font-medium">
                                                    {s.subjectName}
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    Code: {s.courseCode}
                                                </p>
                                            </div>
                                            <div className="flex gap-2">
                                                <button className="px-3 py-1.5 rounded-md bg-gray-100 hover:bg-gray-200">
                                                    Details
                                                </button>
                                                <button disabled={busy} className="px-3 py-1.5 rounded-md bg-red-600 text-white hover:bg-red-700 disabled:opacity-50">
                                                    {busy
                            ? "Deleting…"
                            : "Delete"}
                                                </button>
                                            </div>
                                        </li>);
                })}
                            </ul>
                        </div>
                    </div>))}
        </div>);
};
export default SubjectsListPage;
