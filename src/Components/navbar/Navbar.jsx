import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-0 font-bold">
      <div className="flex justify-between items-center md:hidden bg-black text-white h-14 p-3">
        <div className="text-lg">
          <img
            className="md:hidden rounded-full"
            width={40}
            src={logo}
            alt=""
          />
        </div>
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>
      <div
        className={`fixed md:static md:flex md:flex-row md:space-x-4 top-0 left-0 h-full md:h-auto w-64 md:w-auto bg-gradient-to-b md:bg-transparent from-gray-800 to-black text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          className="text-white text-2xl absolute top-4 right-4 md:hidden"
          onClick={toggleMenu}
          aria-label="Close Menu"
        >
          ✕
        </button>
        <div className="flex flex-col md:flex-row mt-16 md:mt-0 space-y-4 md:space-y-0">
          <Link
            to={"/"}
            className="hover:bg-gray-700 md:hover:bg-transparent p-4 text-lg transition-colors"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to={"/latestjobs"}
            className="hover:bg-gray-700 md:hover:bg-transparent p-4 text-lg transition-colors"
            onClick={toggleMenu}
          >
            Latest Jobs
          </Link>
          <Link
            to={"result"}
            className="hover:bg-gray-700 md:hover:bg-transparent p-4 text-lg transition-colors"
            onClick={toggleMenu}
          >
            Results
          </Link>
          <Link
            to={"/admitcard"}
            className="hover:bg-gray-700 md:hover:bg-transparent p-4 text-lg transition-colors"
            onClick={toggleMenu}
          >
            Admit Card
          </Link>
          <Link
            to={"answerkey"}
            className="hover:bg-gray-700 md:hover:bg-transparent p-4 text-lg transition-colors"
            onClick={toggleMenu}
          >
            Answer Key
          </Link>
          <Link
            to={"/syllabus"}
            className="hover:bg-gray-700 md:hover:bg-transparent p-4 text-lg transition-colors"
            onClick={toggleMenu}
          >
            Syllabus
          </Link>
          <Link
            to={"https://sarkariexamtricks.com/"}
            className="hover:bg-gray-700 md:hover:bg-transparent p-4 text-lg transition-colors"
            onClick={toggleMenu}
          >
            Search
          </Link>
          <Link
            to={"contactUs"}
            className="hover:bg-gray-700 md:hover:bg-transparent p-4 text-lg transition-colors"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden`}
        onClick={toggleMenu}
      ></div>
    </div>
  );
};

export default Navbar;
