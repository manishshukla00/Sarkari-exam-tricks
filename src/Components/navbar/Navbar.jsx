import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mt-0 flex font-bold text-center">
      <Link
        to={"/"}
        className="bg-black text-white h-14  p-3 alig-middle border-r w-full"
      >
        Home
      </Link>
      <Link
        to={"/latestjobs"}
        className="bg-black text-white h-14  p-3 align-middle border-r w-full"
      >
        Latest Jobs
      </Link>
      <Link
        to={"result"}
        className="bg-black text-white h-14  p-3 align-middle border-r w-full"
      >
        Results
      </Link>
      <Link
        to={"/admitcard"}
        className="bg-black text-white h-14  p-3 align-middle border-r w-full"
      >
        Admit Card
      </Link>
      <Link
        to={"answerkey"}
        className="bg-black text-white h-14  p-3 align-middle border-r w-full"
      >
        Answer Key
      </Link>
      <Link
        to={"/syllabus"}
        className="bg-black text-white h-14  p-3 align-middle border-r w-full"
      >
        Syllabus
      </Link>
      <Link
        to={"https://sarkariexamtricks.com/"}
        className="bg-black text-white h-14  p-3 align-middle border-r w-full"
      >
        Search
      </Link>
      <Link
        to={"contactUs"}
        className="bg-black text-white h-14  p-3 align-middle w-full"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default Navbar;
