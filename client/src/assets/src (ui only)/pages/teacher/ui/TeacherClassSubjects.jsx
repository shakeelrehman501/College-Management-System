
const TeacherClassSubjects = () => {
    // const user = ({ _id: "user-1", name: "Admin User", email: "admin@example.com", role: "admin", profile: { name: "Admin User" } });
    // const teacher = ({ _id: "teacher-1", teacher: { name: "Ali Ahmed", email: "ali@example.com" }, classes: [{ class: { _id: "class-1", className: "BS Computer Science" }, subjects: [{ _id: "subject-1", subjectName: "Mathematics" }, { _id: "subject-2", subjectName: "Programming Fundamentals" }] }] });
    const classSubjects = [{ _id: "subject-1", subjectName: "Mathematics", courseCode: "MATH-101", className: { _id: "class-1", className: "BS Computer Science" }, teacher: { teacher: { name: "Ali Ahmed" } } }, { _id: "subject-2", subjectName: "Programming Fundamentals", courseCode: "CS-101", className: { _id: "class-1", className: "BS Computer Science" } }, { _id: "subject-3", subjectName: "Database Systems", courseCode: "SE-201", className: { _id: "class-2", className: "BS Software Engineering" } }], loading = false;
    // const teacherId = teacher?._id;
    return (<div className="max-w-5xl mx-auto p-6">
            {loading && <p className="text-sm text-gray-500">Loading…</p>}

            {!loading && (!classSubjects || classSubjects.length === 0) && (<p className="text-sm text-gray-500">No subjects found for this class.</p>)}

            <p className="font-medium flex justify-between items-center mt-10 mb-3">
                <span className=" text-indigo-600 text-2xl ">Subjects</span>
                <button disabled={loading} className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition">
                    Back to list
                </button>
            </p>


            {!loading && classSubjects?.length > 0 && (<div className="bg-white rounded-xl shadow">
                    <ul className="divide-y">
                        {classSubjects.map((s) => {
                return (<li key={s._id} className="p-4 flex items-center justify-between">
                                    <div>
                                        <p className="font-medium">{s.subjectName}</p>
                                        <p className="text-xs text-gray-500">Code: {s.courseCode}</p>
                                    </div>
                                    <button className="px-3 py-1.5 rounded-md bg-gray-100 hover:bg-gray-200">
                                        Take Attendance
                                    </button>
                                </li>);
            })}
                    </ul>
                </div>)}
        </div>);
};
export default TeacherClassSubjects;
