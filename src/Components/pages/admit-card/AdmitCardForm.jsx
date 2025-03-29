import React from "react";
import { useParams } from "react-router-dom";
import admitCardData from "./Data";

const AdmitCardForm = () => {
  const { title } = useParams();

  // Function to format the title for comparison
  const formatTitleForURL = (title) =>
    title ? title.toLowerCase().replace(/ /g, "-") : "";

  // Find the admit card based on the formatted title
  const admitCard = admitCardData.find(
    (item) => formatTitleForURL(item.text) === title
  );

  if (!admitCard) {
    return <div className="text-center text-red-500">Admit Card not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4 border-2 border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-4">{admitCard.text}</h2>
      <p className="text-center text-gray-600 mb-4">
        Please enter your details to download the admit card.
      </p>

      {/* Admit Card Form */}
      <form className="space-y-4">
        <div>
          <label
            htmlFor="rollNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Roll Number
          </label>
          <input
            type="text"
            id="rollNumber"
            name="rollNumber"
            placeholder="Enter your roll number"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="dob"
            className="block text-sm font-medium text-gray-700"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Download Admit Card
        </button>
      </form>
    </div>
  );
};

export default AdmitCardForm;
