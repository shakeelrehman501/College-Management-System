
const TeacherMarkAttendance = () => {
    const subject = ({ _id: "subject-1", subjectName: "Mathematics", courseCode: "MATH-101", className: { _id: "class-1", className: "BS Computer Science" }, teacher: { teacher: { name: "Ali Ahmed" } } });
    const students = [{ _id: "student-1", student: { name: "Ayesha Khan", email: "ayesha@example.com" }, sClass: { _id: "class-1", className: "BS Computer Science" }, attendance: [] }, { _id: "student-2", student: { name: "Hamza Ali", email: "hamza@example.com" }, sClass: { _id: "class-1", className: "BS Computer Science" }, attendance: [] }, { _id: "student-3", student: { name: "Sara Ahmed", email: "sara@example.com" }, sClass: { _id: "class-2", className: "BS Software Engineering" }, attendance: [] }], loading = false, message = "";
    const date = new Date().toISOString().slice(0, 10);
    const statuses = {};
    // const classId = subject?.className?._id;
    return (<div className="p-6 bg-white shadow-md rounded-2xl space-y-6">
            {/* Header  */}
            <div className="text-center space-y-2 pt-10">
                <p className="text-2xl font-bold text-indigo-700">{subject?.subjectName}</p>
                <p className="text-sm text-gray-500">Course Code: {subject?.courseCode}</p>
                <p className="text-md font-medium text-gray-700">
                    Class Name: {subject?.className?.className}
                </p>
            </div>

            <div className="space-y-4">
                <div className='flex justify-between'>
                    <h2 className="text-2xl font-bold text-indigo-600">
                        Attendance for {date}
                    </h2>

                    <div className='flex justify-between items-center gap-2'>

                        <label className="block text-sm font-medium text-gray-700">
                            Date:
                            <input type="date" defaultValue={date} className="ml-2 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
                        </label>


                        <button disabled={loading} className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition">
                            Mark Attendance
                        </button>
                        <button disabled={loading} className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition">
                            Back to list
                        </button>
                    </div>
                </div>

                {loading && <p className="text-sm text-yellow-600">Loading...</p>}
                {message && (<p className={`text-sm ${typeof message === "string"
                ? "text-green-600"
                : "text-red-600"}`}>
                        {typeof message === "string" ? message : message.message}
                    </p>)}

                {/* List of Students shows here */}
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200 rounded-lg">
                        <thead className="bg-gray-100 text-gray-700 text-sm">
                            <tr>
                                <th className="px-4 py-2 text-left">Name</th>
                                <th className="px-4 py-2 text-left">Class</th>
                                <th className="px-4 py-2 text-left">Mark Attendance</th>
                                <th className="px-4 py-2 text-left">Current Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-sm">
                            {students.map(s => (<tr key={s._id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 font-medium text-gray-800">
                                        {s.student?.name}
                                    </td>
                                    <td className="px-4 py-2 text-gray-600">
                                        {s.sClass?.className}
                                    </td>
                                    <td className="px-4 py-2">
                                        <select defaultValue={statuses[s._id] || "present"} className="border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400">
                                            <option value="present">Present</option>
                                            <option value="absent">Absent</option>
                                        </select>
                                    </td>
                                    <td className="px-4 py-2 text-gray-600">
                                        {s.attendance?.status ? (<span className="font-semibold text-gray-800">
                                                {s.attendance?.status}
                                            </span>) : (<span className="italic text-gray-400">Not marked</span>)}
                                    </td>
                                </tr>))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>);
};
export default TeacherMarkAttendance;
