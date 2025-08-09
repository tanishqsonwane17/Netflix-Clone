import React from "react";
import Nav from "../components/Nav";

const Main = () => {
  return (
    <main className="relative h-screen w-full">
      {/* Background Image */}
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg"
        alt="Netflix Background"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Nav on top */}
      <div className="relative z-10">
        <Nav />
      </div>

      {/* Center content (optional) */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white h-full">
        <h1 className="text-5xl font-bold mb-4">Unlimited movies, TV shows and more</h1>
        <p className="text-xl mb-6">Watch anywhere. Cancel anytime.</p>
        <button className="px-6 py-3 bg-red-600 rounded-md font-semibold">
          Get Started
        </button>
      </div>
    </main>
  );
};

export default Main;
