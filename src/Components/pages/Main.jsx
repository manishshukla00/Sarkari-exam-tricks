import React from "react";
import Result from "./Result";
import AdmitCard from "./AdmitCard";
import LatestJobs from "./latest-jobs/LatestJobs";
import AnswerKey from "./AnswerKey";
import Syllabus from "./Syllabus";
import Admission from "./Admission";
import CertificateVerification from "./CertificateVerification";
import Important from "./Important";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="text-center font-semibold pt-3 text-lg sm:text-xl">
        {/* <p>
          <Link to="/" className="text-blue-700 hover:text-blue-500">
            <i className="fa-solid fa-magnifying-glass"></i>
            <span className="border-b-2 border-dotted border-blue-700 hover:border-blue-500">
              Sarkari Result : Sarkariexamtricks.Com
            </span>
          </Link>
          Sarkari Naukri Latest Jobs Online From at Sarkari Result 2025
        </p> */}
        <p className="text-red-700 pt-3">
          Welcome to No. 1 Sarkari Exam Portal Sarkari exam tricks 2025
        </p>
      </div>

      <p className="text-center font-semibold text-lg sm:text-xl px-4 sm:px-10 space-y-2">
        {/* <Link
          to="/android-apps"
          className="text-blue-700 border-b-2 border-blue-700 hover:text-blue-500 hover:border-blue-500"
        >
          Sarkari Result Android Apps
        </Link> */}

        <Link
          to="/youtube-channel"
          className="text-blue-700 border-b-2 border-blue-700 hover:text-blue-500 hover:border-blue-500"
        >
          Sarkari Exam Tricks Youtube Channel
        </Link>

        {/* <Link
          to="/ios-apps"
          className="text-blue-700 border-b-2 border-blue-700 hover:text-blue-500 hover:border-blue-500"
        >
          Sarkari Result Apple / IOS Apps
        </Link> */}

        <Link
          to="/instagram"
          className="text-blue-700 border-b-2 border-blue-700 hover:text-blue-500 hover:border-blue-500"
        >
          Follow Instagram
        </Link>
      </p>

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
        <div className="relative overflow-hidden">
          <div className="animate-marquee-right whitespace-nowrap">
            <p className="pt-1 inline-block space-x-4">
              <Link
                to="/hssc-primary-teacher"
                className="text-blue-700 border-b-2 border-blue-700 hover:text-blue-500 hover:border-blue-500"
              >
                HSSC Primary Teacher Online Form 2024
              </Link>
              <Link
                to="/upbed-counselling"
                className="text-blue-700 border-b-2 border-blue-700 hover:text-blue-500 hover:border-blue-500"
              >
                UPBED 2024 Online Counselling
              </Link>
              <Link
                to="/up-neet-ug-counselling"
                className="text-blue-700 border-b-2 border-blue-700 hover:text-blue-500 hover:border-blue-500"
              >
                UP NEET UG Online Counselling 2024
              </Link>
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div className="animate-marquee-left whitespace-nowrap">
            <p className="pt-1 inline-block space-x-4">
              <Link
                to="/upp-constable-exam-city"
                className="text-blue-700 border-b-2 border-blue-700 hover:text-blue-500 hover:border-blue-500"
              >
                UP Police UPP Constable Exam City Details 2024
              </Link>
              <Link
                to="/jssc-stenographer"
                className="text-blue-700 border-b-2 border-blue-700 hover:text-blue-500 hover:border-blue-500"
              >
                JSSC Stenographer Online Form 2024
              </Link>
              <Link
                to="/rrc-cr-apprentices"
                className="text-blue-700 border-b-2 border-blue-700 hover:text-blue-500 hover:border-blue-500"
              >
                RRC CR Apprentices Online Form 2024
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-semibold text-white text-center pt-10 px-4 sm:px-10">
        <div className="bg-box1 h-14 border-2 hover:bg-opacity-80">
          <Link to="/uttarakhand-tet">
            Uttarakhand TET <br /> Apply Online
          </Link>
        </div>
        <div className="bg-box2 h-14 border-2 hover:bg-opacity-80">
          <Link to="/jharkhand-tet">
            Jharkhand TET <br /> Apply Online
          </Link>
        </div>
        <div className="bg-box3 h-14 border-2 hover:bg-opacity-80">
          <Link to="/upp-constable-admit-card">
            UPP Constable <br /> Admit Card 2024
          </Link>
        </div>
        <div className="bg-box4 h-14 border-2 hover:bg-opacity-80">
          <Link to="/rrb-je">
            RRB JE 2024 <br /> Apply Online
          </Link>
        </div>
        <div className="bg-box5 h-14 border-2 hover:bg-opacity-80">
          <Link to="/ibps-po">
            IBPS PO 14th <br /> Apply Online
          </Link>
        </div>
        <div className="bg-box6 h-14 border-2 hover:bg-opacity-80">
          <Link to="/mp-sub-engineer">
            MP Sub Engineer <br /> Apply Online
          </Link>
        </div>
        <div className="bg-box7 h-14 border-2 hover:bg-opacity-80">
          <Link to="/upbed-counselling">
            UPBED 2024 <br /> Online Counselling
          </Link>
        </div>
        <div className="bg-box8 h-14 border-2 hover:bg-opacity-80">
          <Link to="/ssc-hindi-translator">
            SSC Hindi Translator <br /> Apply Online
          </Link>
        </div>
      </div>

      <div className="w-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4 gap-6">
        <Result />
        <AdmitCard />
        <LatestJobs />
      </div>

      <div className="container mx-auto p-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnswerKey />
          <Syllabus />
          <Admission />
          <CertificateVerification />
          <Important />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
