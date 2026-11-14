import { ChevronDown, ChevronRight } from "lucide-react";
const TeacherDetailsPage = () => {
    const classes = [{ _id: "class-1", className: "BS Computer Science", department: "Computer Science", student: [] }, { _id: "class-2", className: "BS Software Engineering", department: "Software Engineering", student: [] }];
    const teacher = ({ _id: "teacher-1", teacher: { name: "Ali Ahmed", email: "ali@example.com" }, classes: [{ class: { _id: "class-1", className: "BS Computer Science" }, subjects: [{ _id: "subject-1", subjectName: "Mathematics" }, { _id: "subject-2", subjectName: "Programming Fundamentals" }] }] }), loading = false;
    const freeSubjects = [{ _id: "subject-1", subjectName: "Mathematics", courseCode: "MATH-101", className: { _id: "class-1", className: "BS Computer Science" }, teacher: { teacher: { name: "Ali Ahmed" } } }, { _id: "subject-2", subjectName: "Programming Fundamentals", courseCode: "CS-101", className: { _id: "class-1", className: "BS Computer Science" } }, { _id: "subject-3", subjectName: "Database Systems", courseCode: "SE-201", className: { _id: "class-2", className: "BS Software Engineering" } }], subjLoading = false;
    const busy = false;
    const classId = "";
    const subjectId = "";
    const openClass = null; // only one open at a time
    return (<div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold text-sky-600">Teacher Details</h1>
        <button className="px-4 py-2 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed transition">
          Back to list
        </button>
      </div>

      {loading && <p className="text-sm text-gray-500">Loading…</p>}

      {!loading && !teacher && (<p className="text-sm text-gray-500">Teacher not found.</p>)}

      {!loading && teacher && (<div className="bg-white rounded-xl shadow p-4 space-y-4">
          <div className="p-4 rounded-2xl shadow-md bg-white border border-gray-200">

            {/* Teacher Name */}
            <p className="text-lg font-semibold text-gray-800 mb-3">
              <span className="text-blue-600">Name:</span>{" "}
              {teacher?.teacher?.name || "—"}
            </p>

            {/* Classes & Subjects */}
            <div className="text-sm text-gray-700">
              <ul className="space-y-3">
                {teacher?.classes?.length > 0 ? (teacher.classes.map((cls) => {
                const isOpen = openClass === cls.class._id;
                return (<li key={cls.class._id} className="p-3 rounded-lg bg-gray-50 border border-gray-100">
                        <button className="flex items-center w-full text-left focus:outline-none">
                          {isOpen ? (<ChevronDown className="w-4 h-4 mr-2 text-gray-600"/>) : (<ChevronRight className="w-4 h-4 mr-2 text-gray-600"/>)}
                          <span className="font-medium text-gray-900">
                            Class: {cls.class.className || "_"}
                          </span>
                        </button>

                        {/* Subjects list */}
                        <div className={`ml-6 mt-2 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40" : "max-h-0"}`}>
                          <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {cls?.subjects?.length > 0 ? (cls.subjects.map((subs) => (<li key={subs._id} className="pl-1">
                                  {subs?.subjectName || "_"}
                                </li>))) : (<li className="italic text-gray-400">
                                No subjects assigned
                              </li>)}
                          </ul>
                        </div>
                      </li>);
            })) : (<li className="italic text-gray-400">No subjects assigned</li>)}
              </ul>
            </div>
          </div>

          {/* Assign another subject */}
          <div className="border-t pt-4">
            <h2 className="text-lg font-medium mb-2 text-sky-600">Assign Subject</h2>

            <div className="grid grid-cols-12 gap-2">
              <select className="col-span-5 border rounded-lg px-3 py-2 outline-none" defaultValue={classId}>
                <option value=""> Select Class </option>
                {classes.map((c) => (<option key={c._id} value={c._id}>
                    {c.className} ({c.department || "-"})
                  </option>))}
              </select>

              <select className="col-span-5 border rounded-lg px-3 py-2 outline-none" defaultValue={subjectId} disabled={subjLoading || !(classId)}>
                <option value="">
                  {subjLoading ? "Loading…" : " Select Free Subject "}
                </option>
                {freeSubjects.map((s) => (<option key={s._id} value={s._id}>
                    {s.subjectName} ({s.courseCode})
                  </option>))}
              </select>

              <button disabled={busy} className="col-span-2 px-3 py-2 rounded-md bg-sky-600 text-white disabled:opacity-50">
                {busy ? "Saving…" : "Assign"}
              </button>
            </div>
            {!freeSubjects.length && (classId) && !subjLoading && (<p className="text-xs text-gray-500 mt-1">No free subjects in this class.</p>)}
          </div>

          <div className="flex gap-2 pt-2">
            <button disabled={busy} className="px-3 py-1.5 rounded-md bg-red-600 text-white disabled:opacity-50">
              {busy ? "Deleting…" : "Remove Teacher"}
            </button>
          </div>
        </div>)}
    </div>);
};
export default TeacherDetailsPage;
