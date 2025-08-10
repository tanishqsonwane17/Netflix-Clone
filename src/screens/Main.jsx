import React from "react";
import Nav from "../components/Nav";

const Main = () => {
  return (
    <main className="relative h-screen w-full">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg"
        alt="Netflix Background"/>
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="relative z-10">
        <Nav />
      </div>
      <div className="relative px-12 top-18 z-10 flex flex-col items-center gap-2 text-white h-full">
        <h1 className="text-3xl font-bold mb-">Unlimited movies, TV shows and more</h1>
        <p className="text-lg mb-6 px-6">Starts at ₹149. Cancel at any time.</p>
        <p className="text-lg mb-6 px-2">Ready to watch? Enter your email to create or restart your membership.</p>

        <input
          type="text"
          placeholder="Email address"
          className="w-full mb-2 py-3 px-3 border border-white/20 rounded-md bg-white/10 text-white placeholder-white/70  backdrop-blur-xs focus:outline-none focus:ring-2 focus:ring-white/25 transition"/>       
           <button className="px-6 py-3 bg-red-600 rounded-md text-lg font-semibold">
          Get Started
        </button>
      </div>
    </main>
  );
};

export default Main;
