import React from "react";
import { useParams } from "react-router-dom";
import jobList from "../pages/latest-jobs/Data";
import Footer from "../footer/Footer";

const Form = () => {
  const { title } = useParams();

  // Function to format the title for comparison
  const formatTitleForURL = (title) => title.toLowerCase().replace(/ /g, "-");

  // Find the job based on the formatted title
  const job = jobList.find((job) => formatTitleForURL(job.title) === title);

  if (!job) {
    return <div className="text-center text-red-500">Job not found</div>;
  }

  const formDetails = {
    importantDates: [
      { label: "Application Begin", value: "29/03/2025" },
      { label: "Last Date for Apply Online", value: "10/04/2025" },
      { label: "Pay Exam Fee Last Date", value: "10/04/2025" },
    ],
    applicationFee: [
      { label: "General / OBC / EWS", value: "550/-" },
      { label: "SC / ST", value: "550/-" },
    ],
    howToApply: [
      "Read the Notification Before Applying.",
      "Check and Collect All Documents.",
      "Take a Printout of the Final Submitted Form.",
    ],
  };

  return (
    <>
      <div className="max-w-2xl mx-auto p-4 border-2 border-gray-300 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4">{job.title}</h2>
        <p className="text-center text-gray-600 mb-2">
          Detailed information about the job is provided below.
        </p>

        {/* Important Dates */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Important Dates</h3>
          <ul className="list-disc list-inside">
            {formDetails.importantDates.map((item, index) => (
              <li key={index}>
                <strong>{item.label}:</strong> {item.value}
              </li>
            ))}
          </ul>
        </div>

        {/* Application Fee */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Application Fee</h3>
          <ul className="list-disc list-inside">
            {formDetails.applicationFee.map((item, index) => (
              <li key={index}>
                <strong>{item.label}:</strong> {item.value}
              </li>
            ))}
          </ul>
        </div>

        {/* How to Apply */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">How to Apply</h3>
          <ul className="list-disc list-inside">
            {formDetails.howToApply.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Form;
