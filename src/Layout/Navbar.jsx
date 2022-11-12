import React from "react";
import { Link } from "react-router-dom";
import img from "./img.png";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex  justify-between items-center mx-auto">
        <div className="flex">
          <img src={img} alt="*******" />
          <h1 className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Contact Manager
          </h1>
        </div>
        <div className="container flex  justify-evenly items-center mx-auto">
          <Link
            to="/"
            className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Home
          </Link>
          <Link
            to="/add-contact"
            className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Add-Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
