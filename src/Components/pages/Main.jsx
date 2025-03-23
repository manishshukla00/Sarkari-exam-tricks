import React from "react";
import Result from "./Result";
import AdmitCard from "./AdmitCard";
import LatestJobs from "./LatestJobs";
import AnswerKey from "./AnswerKey";
import Syllabus from "./Syllabus";
import Admission from "./Admission";
import CertificateVerification from "./CertificateVerification";
import Important from "./Important";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <div className="text-center font-semibold  pt-3 text-xl">
        <p>
          <a href="/" className="text-blue-700 ">
            <i class="fa-solid fa-magnifying-glass"></i>
            <span className="border-b-2 border-dotted border-blue-700">
              Sarkari Result : SarkariResult.Com
            </span>
          </a>
          Sarkari Naukri Latest Jobs Online From at Sarkari Result 2024
        </p>
        <p className="text-red-700 pt-3 ">
          Welcome to No. 1 Education Portal Sarkari Result 2024
        </p>
      </div>

      <p className="text-center font-semibold text-xl pr-10 pl-10">
        <a
          href="https://sarkariexamtricks.com/"
          className="text-blue-700 border-b-2 border-blue-700"
        >
          Sarkari Result Android Apps
        </a>

        <a
          href="https://sarkariexamtricks.com/"
          className="text-blue-700 border-b-2 border-blue-700"
        >
          Sarkari Result Youtube Channel
        </a>

        <a
          href="https://sarkariexamtricks.com/"
          className="text-blue-700 border-b-2 border-blue-700"
        >
          Sarkari Result Apple / IOS Apps
        </a>

        <a
          href="https://sarkariexamtricks.com/"
          className="text-blue-700 border-b-2 border-blue-700"
        >
          Follow Instagram
        </a>
      </p>

      <div className="text-center font-semibold text-xl pr-10 pl-10">
        <marquee behavior="alternate" direction="onscreen">
          <p className="pt-1">
            <a
              href="https://sarkariexamtricks.com/"
              className="text-blue-700 border-b-2 border-blue-700"
            >
              CTET Result July 2024
            </a>

            <a
              href="https://sarkariexamtricks.com/"
              className="text-blue-700 border-b-2 border-blue-700"
            >
              IPR RES MTS Online Form 2024
            </a>

            <a
              href="https://sarkariexamtricks.com/"
              className="text-blue-700 border-b-2 border-blue-700"
            >
              MP CPCT Online Form 2024
            </a>
          </p>
        </marquee>
        <marquee behavior="alternate" direction="onscreen">
          <p className="pt-1">
            <a
              href="https://sarkariexamtricks.com/"
              className="text-blue-700 border-b-2 border-blue-700"
            >
              HSSC Primary Teacher Online Form 2024
            </a>

            <a
              href="https://sarkariexamtricks.com/"
              className="text-blue-700 border-b-2 border-blue-700"
            >
              UPBED 2024 Online Counselling
            </a>

            <a
              href="https://sarkariexamtricks.com/"
              className="text-blue-700 border-b-2 border-blue-700"
            >
              UP NEET UG Online Counselling 2024
            </a>
          </p>
        </marquee>

        <marquee behavior="alternate" direction="onscreen">
          <p className="pt-1">
            <a
              href="https://sarkariexamtricks.com/"
              className="text-blue-700 border-b-2 border-blue-700"
            >
              UP Police UPP Constable Exam City Details 2024
            </a>

            <a
              href="https://sarkariexamtricks.com/"
              className="text-blue-700 border-b-2 border-blue-700"
            >
              JSSC Stenographer Online Form 2024
            </a>

            <a
              href="https://sarkariexamtricks.com/"
              className="text-blue-700 border-b-2 border-blue-700"
            >
              RRC CR Apprentices Online Form 2024
            </a>
          </p>
        </marquee>
      </div>

      <div className="flex font-semibold text-white text-center pt-10 pr-10 pl-10">
        <span className="w-full bg-box1 h-14 border-2 ">
          <Link>
            Uttarakhand TET <br /> Apply Online
          </Link>
        </span>
        <span className="w-full bg-box2 h-14 border-2">
          <Link>
            Jharkhand TET <br /> Apply Online
          </Link>
        </span>
        <span className="w-full bg-box3 h-14 border-2">
          <Link>
            UPP Constable <br /> Admit Card 2024
          </Link>
        </span>
        <span className="w-full bg-box4 h-14 border-2">
          <Link>
            RRB JE 2024 <br /> Apply Online
          </Link>
        </span>
      </div>

      <div className="flex font-semibold text-white text-center pr-10 pl-10">
        <span className="w-full bg-box5 h-14 border-2">
          <Link>
            IBPS PO 14th <br /> Apply Online
          </Link>
        </span>
        <span className="w-full bg-box6 h-14 border-2">
          <Link>
            MP Sub Engineer <br /> Apply Online
          </Link>
        </span>
        <span className="w-full bg-box7 h-14 border-2">
          <Link>
            UPBED 2024 <br /> Online Counselling
          </Link>
        </span>
        <span className="w-full bg-box8 h-14 border-2">
          <Link>
            SSC Hindi Translator <br /> Apply Online
          </Link>
        </span>
      </div>

      <div className="flex p-4 pr-10 pl-10 gap-6 ">
        <Result />
        <AdmitCard />
        <LatestJobs />
      </div>

      <div className="container mx-auto p-2 ">
        <div className="grid grid-cols-3 grid-rows-2 gap-6 h-ful">
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
