import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronLeft, GraduationCap, Home, Clock4, Users, LogOut, } from "lucide-react";
/** Same items, same UI — display-only */
const NAV = [
    { label: "Dashboard", icon: Home },
    { label: "Pending Approvals", icon: Clock4 },
    { label: "All Admins", icon: Users },
];
// Map labels to routes (kept separate so UI doesn’t change)
// const ROUTE_BY_LABEL = {
//     Dashboard: "/superAdmin/dashboard",
//     "Pending Approvals": "/superAdmin/dashboard/pending-approvals",
//     "All Admins": "/superAdmin/dashboard/admins",
// };
export default function SASidebarUI() {
    const prefersReducedMotion = false;
    // const user = ({ _id: "user-1", name: "Admin User", email: "admin@example.com", role: "admin", profile: { name: "Admin User" } });
    const duration = prefersReducedMotion ? 0 : 0.22;
    const asideVariants = {
        hidden: { x: "-100%", opacity: 0.0 },
        visible: { x: 0, opacity: 1.0, transition: { duration } },
        exit: { x: "-100%", opacity: 0.0, transition: { duration: duration * 0.9 } },
    };
    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration } },
        exit: { opacity: 0, transition: { duration: duration * 0.8 } },
    };
    const ItemButton = ({ icon: Icon, label }) => (<button className="w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-200">
      {Icon ? <Icon className="h-5 w-5 text-slate-500"/> : null}
      <span>{label}</span>
    </button>);
    return (<>
      {/* Floating opener when hidden */}
      {!true && (<button className="fixed top-7 left-8 z-50 grid h-11 w-11 place-items-center rounded-md bg-white shadow focus:outline-none focus:ring-2 focus:ring-blue-200" aria-label="Open sidebar" title="Open sidebar (Ctrl/Cmd + B)">
          <Menu className="h-5 w-5 text-slate-700"/>
        </button>)}

      {/* Backdrop overlay (all viewports) */}
      <AnimatePresence>
        {true && (<motion.button key="overlay" className="fixed inset-0 lg:left-72 bg-black/30 z-40" initial="hidden" animate="visible" exit="exit" variants={overlayVariants} aria-hidden="true"/>)}
      </AnimatePresence>

      {/* Sidebar itself */}
      <AnimatePresence initial={false}>
        {true && (<motion.aside key="aside" role="navigation" aria-label="Sidebar" className="fixed left-0 top-0 z-50 bg-white min-h-screen w-72 flex flex-col" initial="hidden" animate="visible" exit="exit" variants={asideVariants}>
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-6 pt-10">
              <div className="h-10 w-10 rounded-xl grid place-items-center text-white bg-gradient-to-br from-sky-500 to-sky-600">
                <GraduationCap className="h-5 w-5"/>
              </div>
              <div className="mr-auto">
                <p className="text-lg font-semibold leading-5">CMS</p>
                <p className="text-xs text-slate-500 -mt-0.5">College Management</p>
              </div>
              <button className="p-2 rounded hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-200" aria-label="Close sidebar" title="Close (Esc)">
                <ChevronLeft className="h-4 w-4"/>
              </button>
            </div>
            <hr className="text-gray-300 mx-2"/>

            {/* Items (no links) */}
            <nav className="mt-1 px-2 pb-4 overflow-y-auto pt-2">
              {NAV.map((item) => (<motion.div key={item.label} className="mb-1" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0, transition: { duration: prefersReducedMotion ? 0 : 0.18 } }}>
                  <ItemButton icon={item.icon} label={item.label} // navigate here
            />
                </motion.div>))}
            </nav>

            {/* Logout */}
            <div className="mt-auto pb-7 px-3 ">
              <button className="w-full flex items-center gap-3 px-3 py-3 text-sm text-red-600 rounded-lg hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-200">
                <LogOut className="h-5 w-5"/>
                <span>Logout</span>
              </button>
            </div>
          </motion.aside>)}
      </AnimatePresence>
    </>);
}
