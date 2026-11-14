
export default function StudentSubjectsList() {
    // const dashboardData = { totalStudents: 120, totalTeachers: 12, totalClasses: 8, totalSubjects: 24, students: 120, teachers: 12, classes: 8, subjects: 24, attendance: 85, present: 102, absent: 18, recentStudents: [{ _id: "student-1", student: { name: "Ayesha Khan", email: "ayesha@example.com" }, sClass: { _id: "class-1", className: "BS Computer Science" }, attendance: [] }, { _id: "student-2", student: { name: "Hamza Ali", email: "hamza@example.com" }, sClass: { _id: "class-1", className: "BS Computer Science" }, attendance: [] }, { _id: "student-3", student: { name: "Sara Ahmed", email: "sara@example.com" }, sClass: { _id: "class-2", className: "BS Software Engineering" }, attendance: [] }], recentTeachers: [{ _id: "teacher-1", teacher: { name: "Ali Ahmed", email: "ali@example.com" }, classes: [{ class: { _id: "class-1", className: "BS Computer Science" }, subjects: [{ _id: "subject-1", subjectName: "Mathematics" }] }] }, { _id: "teacher-2", teacher: { name: "Usman Khan", email: "usman@example.com" }, classes: [{ class: { _id: "class-2", className: "BS Software Engineering" }, subjects: [{ _id: "subject-3", subjectName: "Database Systems" }] }] }] };
    // const student = ({ _id: "student-1", student: { name: "Ayesha Khan", email: "ayesha@example.com" }, sClass: { _id: "class-1", className: "BS Computer Science" }, attendance: [], subjects: [{ _id: "subject-1", subjectName: "Mathematics", courseCode: "MATH-101", className: { _id: "class-1", className: "BS Computer Science" }, teacher: { teacher: { name: "Ali Ahmed" } } }, { _id: "subject-2", subjectName: "Programming Fundamentals", courseCode: "CS-101", className: { _id: "class-1", className: "BS Computer Science" } }, { _id: "subject-3", subjectName: "Database Systems", courseCode: "SE-201", className: { _id: "class-2", className: "BS Software Engineering" } }] });
    const classSubjects = [{ _id: "subject-1", subjectName: "Mathematics", courseCode: "MATH-101", className: { _id: "class-1", className: "BS Computer Science" }, teacher: { teacher: { name: "Ali Ahmed" } } }, { _id: "subject-2", subjectName: "Programming Fundamentals", courseCode: "CS-101", className: { _id: "class-1", className: "BS Computer Science" } }, { _id: "subject-3", subjectName: "Database Systems", courseCode: "SE-201", className: { _id: "class-2", className: "BS Software Engineering" } }];
    // const currentClassId = student?.sClass?._id || student?.sClass || "";
    return (<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 m-8">
      <div className="mx-auto flex justify-center items-center max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 pb-6">
        <h1 className="text-3xl font-medium text-sky-600">
          Enrolled Subjects
        </h1>
      </div>

      {classSubjects.length === 0 ? (<p className="text-gray-500 text-center py-6">
          No subjects enrolled yet.
        </p>) : (<ul className="space-y-3">
          {classSubjects.map((s) => (<li key={s._id} className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm 
                         flex justify-between items-center hover:bg-sky-100 
                         transition-colors duration-200">
              <span className="text-gray-800 font-medium">
                {s.subjectName}
              </span>
              <span className="text-gray-500 text-sm font-semibold">
                {s.courseCode}
              </span>
            </li>))}
        </ul>)}
    </div>);
}
