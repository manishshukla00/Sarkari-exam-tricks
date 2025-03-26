import React from "react";
import { Link } from "react-router-dom";

const AdmitCard = () => {
  const admitCardLinks = [
    { text: "UP Police Constable Admit Card 2024", to: "/" },
    { text: "AFMC Medical Officer Admit Card 2024", to: "/" },
    { text: "SEBI Assistant Manager Phase II Admit Card 2024", to: "/" },
    { text: "NTA UGC NET June 2024 Admit Card", to: "/" },
    { text: "Bihar BSEB Sakshamta Pariksha II Admit Card 2024", to: "/" },
    { text: "UP Police Constable Exam Instruction 2024", to: "/" },
    { text: "BSSC Inter Level Exam Mode Notice 2024", to: "/" },
    { text: "UPSSSC Instructor 2022 Document Verification Letter", to: "/" },
    { text: "UKPSC Sub Inspector PET / PST Admit Card 2024", to: "/" },
    { text: "Jharkhand JSSC Graduate Level Re Exam Date 2024", to: "/" },
    { text: "NIELIT CCC Admit Card August 2024 Exam", to: "/" },
    { text: "JSSC Excise Constable PET Admit Card 2024", to: "/" },
    { text: "IBPS Clerk 14th Pre Exam Admit Card 2024", to: "/" },
    { text: "UPSSSC VDO 2018 DV Letter", to: "/" },
    {
      text: "RSMSSB Supervisor, Hostel Superintendent Exam Date 2024",
      to: "/",
    },
    { text: "SSC MTS 2024 Exam Date", to: "/" },
    { text: "NTA UGC NET Exam City 2024", to: "/" },
    { text: "Jharkhand High Court Typist Skill Test Admit Card 2024", to: "/" },
    { text: "UPPSC Agriculture Services Pre Admit Card 2024", to: "/" },
    { text: "UPSC Civil Services IAS Mains Exam Schedule 2024", to: "/" },
    {
      text: "BPSC Bihar Simultala Residential School Teacher Admit Card 2024",
      to: "/",
    },
    { text: "RSMSSB Junior Assistant / Clerk Admit Card 2024", to: "/" },
    { text: "SSC CGL 2024 Tier I Exam Date", to: "/" },
    { text: "Delhi DSSSB Admit Card August / September 2024", to: "/" },
    { text: "IBPS RRB 13th Office Assistant Admit Card 2024", to: "/" },
    { text: "CSBC Bihar Police Constable 2023 Admit Card", to: "/" },
  ];

  return (
    <div className="m-auto flex justify-center border-2 border-borderColor">
      <div>
        <h3 className="text-2xl font-semibold bg-customRed text-center text-white p-1">
          Admit Card
        </h3>
        <ul className="list-disc list-inside pl-5">
          {admitCardLinks.map((link, index) => (
            <li key={index}>
              <Link className="text-blue-800" to={link.to}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        {/* <span className='font-bold border-b-2 border-blue-700 text-blue-700 ml-16' >View More</span> */}
      </div>
    </div>
  );
};

export default AdmitCard;
