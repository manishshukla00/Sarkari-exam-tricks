import React from "react";
import jobList from "./Data";
import { Link } from "react-router-dom";

const LatestJobs = () => {
  return (
    <div
      className="m-auto border-2 flex justify-center border-borderColor"
      style={{ height: "500px" }}
    >
      <div>
        <h3 className="text-2xl font-semibold bg-customRed text-center text-white p-1">
          Latest Jobs
        </h3>
        <ul className="list-disc list-inside pl-6">
          {jobList.slice(0, 15).map((job, index) => (
            <li key={index}>
              <Link to={"/exam-detail"} className="text-blue-800">
                {job}
              </Link>
            </li>
          ))}
        </ul>
        <div className="text-center mt-4">
          <Link
            to="/latest-jobs"
            className="font-bold border-b-2 border-blue-700 text-blue-700"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestJobs;
