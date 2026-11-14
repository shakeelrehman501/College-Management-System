import { Bell, Search } from "lucide-react";
import SidebarUI from "./ui/SideBarUI";
import StudentProfileCard from "./ui/StudentProfileCard";
export default function StudentDashboard() {
    const dashboardData = { totalStudents: 120, totalTeachers: 12, totalClasses: 8, totalSubjects: 24, students: 120, teachers: 12, classes: 8, subjects: 24, attendance: 85, present: 102, absent: 18, recentStudents: [{ _id: "student-1", student: { name: "Ayesha Khan", email: "ayesha@example.com" }, sClass: { _id: "class-1", className: "BS Computer Science" }, attendance: [] }, { _id: "student-2", student: { name: "Hamza Ali", email: "hamza@example.com" }, sClass: { _id: "class-1", className: "BS Computer Science" }, attendance: [] }, { _id: "student-3", student: { name: "Sara Ahmed", email: "sara@example.com" }, sClass: { _id: "class-2", className: "BS Software Engineering" }, attendance: [] }], recentTeachers: [{ _id: "teacher-1", teacher: { name: "Ali Ahmed", email: "ali@example.com" }, classes: [{ class: { _id: "class-1", className: "BS Computer Science" }, subjects: [{ _id: "subject-1", subjectName: "Mathematics" }] }] }, { _id: "teacher-2", teacher: { name: "Usman Khan", email: "usman@example.com" }, classes: [{ class: { _id: "class-2", className: "BS Software Engineering" }, subjects: [{ _id: "subject-3", subjectName: "Database Systems" }] }] }] };
    return (<div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar component */}
      <SidebarUI />

      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 z-30 bg-white ">
          <div className="px-4 sm:px-6 lg:px-8 h-24 flex items-center gap-3">

            <div className="flex flex-col pl-16">
              <h1 className="text-xl sm:text-3xl font-bold text-sky-600">Student Dashboard</h1>
              <p className=" text-slate-500 -mt-0.5">
                Welcome back
              </p>
            </div>

            <div className="ml-auto flex items-center gap-3">

              <div className="relative">
                <button className="p-2 rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-200">
                  <Bell className="h-5 w-5 text-slate-700"/>
                </button>
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center h-5 min-w-5 px-1.5 rounded-full text-[10px] font-semibold bg-red-500 text-white">
                  2
                </span>
              </div>

              <div className="hidden sm:flex items-center gap-2 border border-gray-300 rounded-xl px-3 h-10 w-60">
                <Search className="h-4 w-4 text-slate-400"/>
                <input type="text" placeholder="Search..." className="outline-none text-sm bg-transparent placeholder:text-slate-400"/>
              </div>
            </div>
          </div>
        </header>
        {!dashboardData?.success ? <div className="min-h-screen mt-0 mx-16 rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <p className="px-6 py-16 text-center items-center justify-center">
            {dashboardData?.message}
          </p>
        </div> :
            <div>

            <StudentProfileCard />
          </div>}
      </div>
    </div>);
}
