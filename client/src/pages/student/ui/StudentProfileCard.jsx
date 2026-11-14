import { User, Mail, GraduationCap, ClipboardList } from "lucide-react";
const StudentProfileCard = () => {
    // const dashboardData = { totalStudents: 120, totalTeachers: 12, totalClasses: 8, totalSubjects: 24, students: 120, teachers: 12, classes: 8, subjects: 24, attendance: 85, present: 102, absent: 18, recentStudents: [{ _id: "student-1", student: { name: "Ayesha Khan", email: "ayesha@example.com" }, sClass: { _id: "class-1", className: "BS Computer Science" }, attendance: [] }, { _id: "student-2", student: { name: "Hamza Ali", email: "hamza@example.com" }, sClass: { _id: "class-1", className: "BS Computer Science" }, attendance: [] }, { _id: "student-3", student: { name: "Sara Ahmed", email: "sara@example.com" }, sClass: { _id: "class-2", className: "BS Software Engineering" }, attendance: [] }], recentTeachers: [{ _id: "teacher-1", teacher: { name: "Ali Ahmed", email: "ali@example.com" }, classes: [{ class: { _id: "class-1", className: "BS Computer Science" }, subjects: [{ _id: "subject-1", subjectName: "Mathematics" }] }] }, { _id: "teacher-2", teacher: { name: "Usman Khan", email: "usman@example.com" }, classes: [{ class: { _id: "class-2", className: "BS Software Engineering" }, subjects: [{ _id: "subject-3", subjectName: "Database Systems" }] }] }] };
    const student = ({ _id: "student-1", student: { name: "Ayesha Khan", email: "ayesha@example.com" }, sClass: { _id: "class-1", className: "BS Computer Science" }, attendance: [], subjects: [{ _id: "subject-1", subjectName: "Mathematics", courseCode: "MATH-101", className: { _id: "class-1", className: "BS Computer Science" }, teacher: { teacher: { name: "Ali Ahmed" } } }, { _id: "subject-2", subjectName: "Programming Fundamentals", courseCode: "CS-101", className: { _id: "class-1", className: "BS Computer Science" } }, { _id: "subject-3", subjectName: "Database Systems", courseCode: "SE-201", className: { _id: "class-2", className: "BS Software Engineering" } }] }), loading = false;
    return (<div className="min-h-80  flex items-center justify-center px-4 py-20">
            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">

                <div className="bg-sky-600 px-6 py-4">
                    <h1 className="text-2xl font-semibold text-white text-center">
                        Student Details
                    </h1>
                </div>

                <div className="px-8 py-12 flex flex-col items-center justify-center text-center">
                    {loading && (<p className="text-gray-500 italic">Loading...</p>)}

                    {!loading && !student && (<p className="text-sm text-gray-500">Student not found.</p>)}

                    {!loading && student && (<div className="space-y-6 w-full text-left">

                            <div className="flex items-center space-x-3">
                                <div className="p-3 bg-sky-100 rounded-full">
                                    <User className="w-6 h-6 text-sky-600"/>
                                </div>
                                <p className="text-lg font-medium text-slate-900">
                                    {student?.student?.name || "—"}
                                </p>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="p-3 bg-sky-100 rounded-full">
                                    <Mail className="w-6 h-6 text-sky-600"/>
                                </div>
                                <p className="text-base text-slate-700">
                                    {student?.student?.email || "—"}
                                </p>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="p-3 bg-sky-100 rounded-full">
                                    <GraduationCap className="w-6 h-6 text-sky-600"/>
                                </div>
                                <p className="text-base text-slate-700">
                                    {student?.sClass?.className || "—"}
                                </p>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="p-3 bg-sky-100 rounded-full">
                                    <ClipboardList className="w-6 h-6 text-sky-600"/>
                                </div>
                                <p className="text-base text-slate-700">
                                    Attendance Entries:{" "}
                                    {Array.isArray(student.attendance)
                ? student.attendance.length
                : 0}
                                </p>
                            </div>
                        </div>)}
                </div>
            </div>
        </div>);
};
export default StudentProfileCard;
