import React from "react";
import Result from "./result/Result";
import AdmitCard from "./admit-card/AdmitCard";
import LatestJobs from "./latest-jobs/LatestJobs";
import AnswerKey from "./answerKey/AnswerKey";
import Syllabus from "./syllabus/Syllabus";
import Admission from "./Admission";
import CertificateVerification from "./CertificateVerification";
import Important from "./Important";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Welcome Section */}
      <div className="text-center font-semibold pt-3 text-lg sm:text-xl">
        <p className="text-red-700 pt-3">
          Welcome to No. 1 Sarkari Exam Portal Sarkari Exam Tricks 2025
        </p>
      </div>

      {/* Marquee Section */}
      <div className="text-center font-semibold text-lg sm:text-xl px-4 sm:px-10">
        <div className="relative overflow-hidden">
          <div className="animate-marquee-left whitespace-nowrap">
            <p className="pt-1 inline-block space-x-4">
              <Link
                to="/ctet-result"
                className="text-blue-700 border-b-2 border-blue-700 hover:text-blue-500 hover:border-blue-500"
              >
                CTET Result July 2024
              </Link>
              <Link
                to="/ipr-res-mts"
                className="text-blue-700 border-b-2 border-blue-700 hover:text-blue-500 hover:border-blue-500"
              >
                IPR RES MTS Online Form 2024
              </Link>
              <Link
                to="/mp-cpct"
                className="text-blue-700 border-b-2 border-blue-700 hover:text-blue-500 hover:border-blue-500"
              >
                MP CPCT Online Form 2024
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Grid Section for Result, Admit Card, and Latest Jobs */}
      <div className="container mx-auto p-4">
        <h2 className="text-center text-2xl font-bold mb-6">
          Important Sections
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Result />
          <AdmitCard />
          <LatestJobs />
        </div>
      </div>

      {/* Grid Section for Other Components */}
      <div className="container mx-auto p-4">
        <h2 className="text-center text-2xl font-bold mb-6">Other Sections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnswerKey />
          <Syllabus />
          <Admission />
          <CertificateVerification />
          <Important />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Main;
