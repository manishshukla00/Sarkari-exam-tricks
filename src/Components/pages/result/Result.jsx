import React, { useState } from "react";
import Data from "./Data";
import { Link } from "react-router-dom";

const Result = () => {
  const [visibleResults, setVisibleResults] = useState(15);

  // Function to format the title for the URL
  const formatTitleForURL = (title) => title.toLowerCase().replace(/ /g, "-");

  return (
    <div className="w-full m-auto border-2 flex justify-center border-borderColor">
      <div className="w-full">
        <h3 className="text-2xl font-semibold bg-customRed text-center text-white p-1">
          Results
        </h3>
        <ul className="list-disc list-inside pl-6">
          {Data.slice(0, visibleResults).map((result) => (
            <li key={result.id}>
              <Link
                to={`/result/${formatTitleForURL(result.title)}`}
                className="text-blue-800"
              >
                {result.title}
              </Link>
            </li>
          ))}
        </ul>
        {visibleResults < Data.length && (
          <button
            onClick={() => setVisibleResults(visibleResults + 10)}
            className="font-bold border-b-2 border-blue-700 text-blue-700 ml-20"
          >
            Read More
          </button>
        )}
      </div>
    </div>
  );
};

export default Result;
