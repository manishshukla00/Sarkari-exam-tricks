import React, { useState } from "react";
import admitCardList from "./Data";
import { Link } from "react-router-dom";

const AdmitCard = () => {
  const [visibleCards, setVisibleCards] = useState(15);

  // Function to format the title for the URL
  const formatTitleForURL = (title) =>
    title ? title.toLowerCase().replace(/ /g, "-") : "";

  return (
    <div className="m-auto border-2 flex justify-center border-borderColor">
      <div>
        <h3 className="text-2xl font-semibold bg-customRed text-center text-white p-1">
          Admit Cards
        </h3>
        <ul className="list-disc list-inside pl-6">
          {admitCardList.slice(0, visibleCards).map((card) => (
            <li key={card.id}>
              <Link
                to={`/admitCard/${formatTitleForURL(card.text)}`}
                className="text-blue-800"
              >
                {card.text}
              </Link>
            </li>
          ))}
        </ul>
        {visibleCards < admitCardList.length && (
          <button
            onClick={() => setVisibleCards(visibleCards + 10)}
            className="font-bold border-b-2 border-blue-700 text-blue-700 ml-20"
          >
            Read More
          </button>
        )}
      </div>
    </div>
  );
};

export default AdmitCard;
