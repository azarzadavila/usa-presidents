import React, { useState } from "react";
import PRESIDENTS from "presidents.js";
import PresidentCard from "components/PresidentCard.jsx";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? PRESIDENTS.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === PRESIDENTS.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousIndex =
    currentIndex === 0 ? PRESIDENTS.length - 1 : currentIndex - 1;
  const nextIndex =
    currentIndex === PRESIDENTS.length - 1 ? 0 : currentIndex + 1;

  function SideCard({ position }) {
    const index = position === "previous" ? previousIndex : nextIndex;
    const skewClass = position === "previous" ? "-skew-y-12" : "skew-y-12";
    return (
      <div className={`flex flex-col justify-center`}>
        <div className={`flex flex-col justify-center ${skewClass}`}>
          <img
            src={PRESIDENTS[index].image}
            alt={PRESIDENTS[index].name}
            className="w-48 h-48 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row justify-evenly justify-items-center grow">
      <SideCard position="previous" />
      <div className="flex flex-col justify-center">
        <PresidentCard president={PRESIDENTS[currentIndex]} />
        <div className="flex flex-row justify-evenly">
          <button
            onClick={goToPrevious}
            className="text-3xl font-bold p-2 text-white"
          >
            {"<"}
          </button>
          <button
            onClick={goToNext}
            className="text-3xl font-bold p-2 text-white"
          >
            {">"}
          </button>
        </div>
      </div>

      <SideCard position="next" />
    </div>
  );
}

export default Carousel;
