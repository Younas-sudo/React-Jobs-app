import React from "react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* Navigation */}
      <nav className="bg-sky-600 border-b border-indigo-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center  justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              {/* Logo */}
              <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                <img className="h-10 w-auto" src={logo} alt="React Jobs" />
                <span className="hidden md:block text-white text-2xl font-bold ml-2">
                  JobSprint 🚀
                </span>
              </NavLink>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white hover:bg-sky-500 bg-sky-900 rounded-md px-3 py-2"
                        : "text-white hover:bg-sky-200 rounded-md px-3 py-2"
                    }
                    aria-label="Home"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/jobs"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white hover:bg-sky-500 bg-sky-900 rounded-md px-3 py-2"
                        : "text-white hover:bg-sky-500 rounded-md px-3 py-2"
                    }
                    aria-label="Jobs"
                  >
                    Jobs
                  </NavLink>
                  <NavLink
                    to="/add-job"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white hover:bg-sky-500 bg-sky-900 rounded-md px-3 py-2"
                        : "text-white hover:bg-sky-500 rounded-md px-3 py-2"
                    }
                    aria-label="Add Job"
                  >
                    Add Job
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
