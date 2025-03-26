import React from "react";
import { Link } from "react-router-dom";

const AdmitCard = () => {
  const admitCards = [
    { text: "UP Police Constable Admit Card 2024", link: "/" },
    { text: "AFMC Medical Officer Admit Card 2024", link: "/" },
    { text: "SEBI Assistant Manager Phase II Admit Card 2024", link: "/" },
    { text: "NTA UGC NET June 2024 Admit Card", link: "/" },
    { text: "Bihar BSEB Sakshamta Pariksha II Admit Card 2024", link: "/" },
    { text: "UP Police Constable Exam Instruction 2024", link: "/" },
    { text: "BSSC Inter Level Exam Mode Notice 2024", link: "/" },
    { text: "UPSSSC Instructor 2022 Document Verification Letter", link: "/" },
    { text: "UKPSC Sub Inspector PET / PST Admit Card 2024", link: "/" },
    { text: "Jharkhand JSSC Graduate Level Re Exam Date 2024", link: "/" },
    { text: "NIELIT CCC Admit Card August 2024 Exam", link: "/" },
    { text: "JSSC Excise Constable PET Admit Card 2024", link: "/" },
    { text: "IBPS Clerk 14th Pre Exam Admit Card 2024", link: "/" },
    { text: "UPSSSC VDO 2018 DV Letter", link: "/" },
    {
      text: "RSMSSB Supervisor, Hostel Superintendent Exam Date 2024",
      link: "/",
    },
    { text: "SSC MTS 2024 Exam Date", link: "/" },
    { text: "NTA UGC NET Exam City 2024", link: "/" },
    {
      text: "Jharkhand High Court Typist Skill Test Admit Card 2024",
      link: "/",
    },
    { text: "UPPSC Agriculture Services Pre Admit Card 2024", link: "/" },
    { text: "UPSC Civil Services IAS Mains Exam Schedule 2024", link: "/" },
    {
      text: "BPSC Bihar Simultala Residential School Teacher Admit Card 2024",
      link: "/",
    },
    { text: "RSMSSB Junior Assistant / Clerk Admit Card 2024", link: "/" },
    { text: "SSC CGL 2024 Tier I Exam Date", link: "/" },
    { text: "Delhi DSSSB Admit Card August / September 2024", link: "/" },
    { text: "IBPS RRB 13th Office Assistant Admit Card 2024", link: "/" },
    { text: "CSBC Bihar Police Constable 2023 Admit Card", link: "/" },
  ];

  return (
    <div className="m-auto flex justify-center border-2 border-borderColor">
      <div>
        <h3 className="text-2xl font-semibold bg-customRed text-center text-white p-1">
          Admit Card
        </h3>
        <ul className="list-disc list-inside pl-5">
          {admitCards.slice(0, 15).map((item, index) => (
            <li key={index}>
              <Link className="text-blue-800" to={item.link}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="text-center mt-4">
          <Link
            to="/admit-cards"
            className="font-bold border-b-2 border-blue-700 text-blue-700"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdmitCard;
