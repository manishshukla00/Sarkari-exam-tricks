import React from "react";
import { useParams } from "react-router-dom";
import jobList from "./Data";
import Footer from "../../footer/Footer";

const LatestJobForm = () => {
  const { title } = useParams();

  const formatTitleForURL = (title) => title.toLowerCase().replace(/ /g, "-");
  const job = jobList.find((job) => formatTitleForURL(job.title) === title);

  if (!job) {
    return (
      <div className="text-center text-red-500 py-10 text-xl">
        Job not found
      </div>
    );
  }

  const {
    postName,
    eligibility,
    vacancy,
    importantDates,
    applicationFee,
    howToApply,
  } = job;

  return (
    <>
      <div className="max-w-2xl mx-auto p-6 border-2 border-gray-300 rounded-2xl shadow-lg mt-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-customRed mb-4">
          {job.title}
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Detailed information about the job is provided below.
        </p>

        {/* Post Name */}
        {postName && (
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              Post Name
            </h3>
            <p className="text-gray-700">{postName}</p>
          </div>
        )}

        {/* Total Vacancy */}
        {vacancy && (
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              Total Vacancy
            </h3>
            <p className="text-gray-700">{vacancy}</p>
          </div>
        )}

        {/* Eligibility */}
        {eligibility && (
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              Eligibility
            </h3>
            <p className="text-gray-700">{eligibility}</p>
          </div>
        )}

        {/* Important Dates */}
        {importantDates?.length > 0 && (
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Important Dates</h3>
            <ul className="list-disc list-inside text-gray-700">
              {importantDates.map((item, index) => (
                <li key={index}>
                  <strong>{item.label}:</strong> {item.value}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Application Fee */}
        {applicationFee?.length > 0 && (
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Application Fee</h3>
            <ul className="list-disc list-inside text-gray-700">
              {applicationFee.map((item, index) => (
                <li key={index}>
                  <strong>{item.label}:</strong> {item.value}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* How to Apply */}
        {howToApply?.length > 0 && (
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">How to Apply</h3>
            <ul className="list-disc list-inside text-gray-700">
              {howToApply.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default LatestJobForm;
