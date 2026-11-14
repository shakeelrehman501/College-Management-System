

const Navbar = () => {

    return (
        <div className="w-full flex justify-between items-center p-3 sm:p-6 sm:px-24 absolute top-0">

            {/* Logo */}
            <img
                src="/cms_logo.png"
                alt="College Management System"
                className="w-16 sm:w-24"
            />

            {/* User Profile Dropdown */}
            <div className="relative group">

                <input
                    type="checkbox"
                    id="user-menu"
                    className="hidden peer"
                />

                <label
                    htmlFor="user-menu"
                    className="w-8 h-8 flex justify-center items-center rounded-full bg-black text-white cursor-pointer"
                >
                    U
                </label>

                {/* Dropdown Menu */}
                <div className="absolute hidden peer-checked:block group-hover:block top-0 right-0 z-10 text-black rounded pt-10">

                    <ul className="list-none m-0 p-2 bg-gray-100 text-xs sm:text-sm min-w-27.5 sm:min-w-35">

                        <li className="py-1 px-2 hover:bg-gray-200 cursor-pointer">
                            Verify Email
                        </li>

                        <li className="py-1 px-2 hover:bg-gray-200 cursor-pointer">
                            Logout
                        </li>

                    </ul>

                </div>
            </div>

        </div>
    );
}

export default Navbar;
