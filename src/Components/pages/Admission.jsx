import React from "react";
import { Link } from "react-router-dom";

const Admission = () => {
  return (
    <div className="border-2 border-borderColor  row-span-2 col-span-1">
      <div>
        <h3 className="text-2xl font-semibold bg-customRed text-center text-white p-1">
          Admission
        </h3>
        <ul className="list-disc list-inside pl-6">
          <li>
            {" "}
            <Link to={"/exam-detail"} className="text-blue-800">
              UPNEET UG 2024 Online Counseling
            </Link>
          </li>
          <li>
            {" "}
            <Link to={"/exam-detail"} className="text-blue-800">
              GATE 2025 Online Form
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={"/exam-detail"} className="text-blue-800">
              BHU IMS B.Pharma, M.Pharma Online Form 2024
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={"/exam-detail"} className="text-blue-800">
              NTA NEET UG 2024 Online Counselling
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={"/exam-detail"} className="text-blue-800">
              UPBED 2024 Online Counselling
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={"/exam-detail"} className="text-blue-800">
              Allahabad University CRET Online Form 2024
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={"/exam-detail"} className="text-blue-800">
              MP CPCT 2024 Online Form
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={"/exam-detail"} className="text-blue-800">
              Allahabad University CUET Phase II Registration 2024
            </Link>
          </li>
          <li>
            {" "}
            <Link to={"/exam-detail"} className="text-blue-800">
              MPESB PNST / GNMTST Online Form 2024
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={"/exam-detail"} className="text-blue-800">
              UPRTOU Admissions Online Form
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={"/exam-detail"} className="text-blue-800">
              NVS Class 6th Admissions 2025
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={"/exam-detail"} className="text-blue-800">
              UP Scholarship Online Form 2024
            </Link>
          </li>
        </ul>
        {/* <span className='font-bold border-b-2 border-blue-700 text-blue-700  ml-24' >View More</span> */}
      </div>
    </div>
  );
};

export default Admission;
