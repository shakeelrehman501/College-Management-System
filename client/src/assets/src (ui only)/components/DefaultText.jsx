
import { assets } from "../assets/assets";
import Navbar from "./Navbar";
import AdminDashboard from "../pages/admin/AdminDashboard";
import TeacherDashboard from "../pages/teacher/TeacherDashboard";
import StudentDashboard from "../pages/student/StudentDashboard";

const DashboardLoader = () => {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-linear-to-br from-blue-100 to-purple-200">

            <Navbar />

            {/* Access Restricted UI */}
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md flex flex-col items-center text-center border border-indigo-300">

                <img
                    src={assets.header_img}
                    alt="warning"
                    className="w-14 mb-4"
                />

                <h2 className="text-2xl font-bold text-indigo-800 mb-2">
                    Access Restricted
                </h2>

                <p className="text-indigo-500 font-medium mb-3">
                    Your account is not verified or approved yet.
                </p>

                <p className="text-slate-500 text-sm">
                    Please contact your administrator for more information.
                </p>

            </div>

            {/* Dashboard UI */}
            <div className="w-full">
                <AdminDashboard />
                <TeacherDashboard />
                <StudentDashboard />
            </div>

        </div>
    );
};

export default DashboardLoader;
