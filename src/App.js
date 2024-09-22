import React from "react";
import Carousel from "components/Carousel.jsx";
import MainHeader from "components/MainHeader";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-900	">
      <MainHeader />
      <main className="flex-grow flex flex-col justify-center">
        <Carousel />
      </main>
    </div>
  );
}

export default App;
