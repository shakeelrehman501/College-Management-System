
import { User, Users, GraduationCap } from 'lucide-react'

const Header = () => {
  return (
    <div className='min-h-screen'>

      {/* Header Section */}
      <div>
        <div className='flex items-center justify-center pt-30'>
          <h1 className='text-lg text-slate-500'>
            Welcome to
          </h1>
        </div>

        <div className="flex items-center justify-center px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-sky-600">
            College Management System
          </h1>
        </div>

        <div className='flex items-center justify-center py-4'>
          <button
            className="px-8 py-2 border rounded-lg [border-image:linear-linear(to_bottom,#a855f7,#2563eb)_1] text-gray-600 hover:font-medium"
          >
            Login as Administrator
          </button>
        </div>
      </div>

      <br />

      {/* Dashboard Section */}
      <div className="flex items-center justify-center p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">

          {/* Admin */}
          <div className="bg-linear-to-b from-purple-800 to-blue-900 rounded-2xl p-6 flex flex-col items-center text-white shadow-xl hover:scale-105 transform transition">

            <User size={48} className="mb-4" />

            <h3 className="text-xl font-semibold mb-2">
              Admin
            </h3>

            <p className="text-center">
              Login as an administrator to access the dashboard to manage app data.
            </p>
          </div>

          {/* Student */}
          <div className="bg-linear-to-b from-purple-800 to-blue-900 rounded-2xl p-6 flex flex-col items-center text-white shadow-xl hover:scale-105 transform transition">

            <GraduationCap size={48} className="mb-4" />

            <h3 className="text-xl font-semibold mb-2">
              Student
            </h3>

            <p className="text-center">
              Login as a student to explore course materials and assignments.
            </p>
          </div>

          {/* Teacher */}
          <div className="bg-linear-to-b from-purple-800 to-blue-900 rounded-2xl p-6 flex flex-col items-center text-white shadow-xl hover:scale-105 transform transition">

            <Users size={48} className="mb-4" />

            <h3 className="text-xl font-semibold mb-2">
              Teacher
            </h3>

            <p className="text-center">
              Login as a teacher to create courses, assignments, and track student progress.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Header;
