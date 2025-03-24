import React, { useState } from "react";
import jobList from "./Data";
import { Link } from "react-router-dom";

const LatestJobs = () => {
  const [visibleJobs, setVisibleJobs] = useState(20);

  const showMoreJobs = () => {
    setVisibleJobs((prevVisibleJobs) => prevVisibleJobs + 10);
  };

  return (
    <div className="w-auto m-auto border-2 flex justify-center border-borderColor">
      <div>
        <h3 className="text-2xl font-semibold bg-customRed text-center text-white p-1">
          Latest Jobs
        </h3>
        <ul className="list-disc list-inside pl-6">
          {jobList.map((job, index) => (
            // .slice(0, visibleJobs)
            <li key={index}>
              <Link to={"/exam-detail"} className="text-blue-800">
                {job}
              </Link>
            </li>
          ))}
        </ul>
        {visibleJobs < jobList.length && (
          <button
            onClick={showMoreJobs}
            className="font-bold border-b-2 border-blue-700 text-blue-700 ml-20"
          >
            Read More
          </button>
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
