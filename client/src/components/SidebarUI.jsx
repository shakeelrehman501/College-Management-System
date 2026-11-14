
import {
  Menu,
  ChevronLeft,
  GraduationCap,
  Home,
  Clock4,
  Users,
  Monitor,
  Layers,
  BookOpen,
  LogOut,
} from "lucide-react";

const NAV = [
  { label: "Dashboard", icon: Home },
  { label: "Pending Approvals", icon: Clock4 },
  { label: "Students", icon: Users },
  { label: "Teachers", icon: Monitor },
  { label: "Classes", icon: Layers },
  { label: "Subjects", icon: BookOpen },
];

const ItemButton = ({ icon: Icon, label }) => (
  <button
    className="w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
  >
    {Icon && <Icon className="h-5 w-5 text-slate-500" />}
    <span>{label}</span>
  </button>
);

export default function SidebarUI() {
  return (
    <>
      {/* Open Sidebar Button */}
      <button
        className="fixed top-7 left-8 z-50 grid h-11 w-11 place-items-center rounded-md bg-white shadow focus:outline-none focus:ring-2 focus:ring-blue-200"
        aria-label="Open sidebar"
      >
        <Menu className="h-5 w-5 text-slate-700" />
      </button>

      {/* Overlay */}
      <div className="fixed inset-0 lg:left-72 bg-black/30 z-40" />

      {/* Sidebar */}
      <aside
        role="navigation"
        aria-label="Sidebar"
        className="fixed left-0 top-0 z-50 bg-white min-h-screen w-72 flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-6 pt-10">

          <div className="h-10 w-10 rounded-xl grid place-items-center text-white bg-linear-to-br from-sky-500 to-sky-600">
            <GraduationCap className="h-5 w-5" />
          </div>

          <div className="mr-auto">
            <p className="text-lg font-semibold leading-5">
              CMS
            </p>

            <p className="text-xs text-slate-500 -mt-0.5">
              College Management
            </p>
          </div>

          <button
            className="p-2 rounded hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
            aria-label="Close sidebar"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

        </div>

        <hr className="text-gray-300 mx-2" />

        {/* Navigation Items */}
        <nav className="mt-1 px-2 pb-4 overflow-y-auto pt-2">

          {NAV.map((item) => (
            <div
              key={item.label}
              className="mb-1"
            >
              <ItemButton
                icon={item.icon}
                label={item.label}
              />
            </div>
          ))}

        </nav>

        {/* Logout */}
        <div className="mt-auto pb-7 px-3">

          <button
            className="w-full flex items-center gap-3 px-3 py-3 text-sm text-red-600 rounded-lg hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-200"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>

        </div>

      </aside>
    </>
  );
}
