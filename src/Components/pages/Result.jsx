import React from "react";
import { Link } from "react-router-dom";

const results = [
  { text: "UP Police Constable Result 2024", link: "/" },
  { text: "AFMC Medical Officer Result 2024", link: "/" },
  { text: "SEBI Assistant Manager Phase II Result 2024", link: "/" },
  { text: "NTA UGC NET June 2024 Result", link: "/" },
  { text: "Bihar BSEB Sakshamta Pariksha II Result 2024", link: "/" },
  { text: "UP Police Constable Exam Result 2024", link: "/" },
  { text: "BSSC Inter Level Exam Result 2024", link: "/" },
  { text: "UPSSSC Instructor 2022 Final Result", link: "/" },
  { text: "UKPSC Sub Inspector PET / PST Result 2024", link: "/" },
  { text: "Jharkhand JSSC Graduate Level Re Exam Result 2024", link: "/" },
  { text: "NIELIT CCC Result August 2024 Exam", link: "/" },
  { text: "JSSC Excise Constable PET Result 2024", link: "/" },
  { text: "IBPS Clerk 14th Pre Exam Result 2024", link: "/" },
  { text: "UPSSSC VDO 2018 Final Result", link: "/" },
  {
    text: "RSMSSB Supervisor, Hostel Superintendent Result 2024",
    link: "/",
  },
];

const Result = () => {
  return (
    <div className="m-auto flex justify-center border-2 border-borderColor h-auto">
      <div>
        <h3 className="text-2xl font-semibold bg-customRed text-center text-white p-1">
          Results
        </h3>
        <ul className="list-disc list-inside pl-5">
          {results.map((item, index) => (
            <li key={index}>
              <Link className="text-blue-800" to={item.link}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="text-center mt-4">
          <Link
            to="/results"
            className="font-bold border-b-2 border-blue-700 text-blue-700"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Result;
