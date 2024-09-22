import React, { useState } from 'react';
import PRESIDENTS from 'presidents.js';
import PresidentCard from 'components/PresidentCard.jsx';

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? PRESIDENTS.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === PRESIDENTS.length - 1 ? 0 : prevIndex + 1));
    };

    const previousIndex = currentIndex === 0 ? PRESIDENTS.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === PRESIDENTS.length - 1 ? 0 : currentIndex + 1;

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-black">
            <button onClick={goToPrevious} className="absolute left-0 text-3xl font-bold p-2 text-white z-10">
                {'<'}
            </button>
            <button onClick={goToNext} className="absolute right-0 text-3xl font-bold p-2 text-white z-10">
                {'>'}
            </button>

            <div
                className={`absolute left-1/4 -skew-y-12`}
            >
                <img
                    src={PRESIDENTS[previousIndex].image}
                    alt={PRESIDENTS[previousIndex].name}
                    className="w-48 h-48 object-cover rounded-lg shadow-lg"
                />
            </div>

            {/* Current President */}
            <PresidentCard president={PRESIDENTS[currentIndex]} />

            <div
                className={`absolute right-1/4 skew-y-12`}
            >
                <img
                    src={PRESIDENTS[nextIndex].image}
                    alt={PRESIDENTS[nextIndex].name}
                    className="w-48 h-48 object-cover rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
}

export default Carousel;
