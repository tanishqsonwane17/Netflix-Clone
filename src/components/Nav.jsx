import React from "react";

const Nav = () => {
  return (
    <div className="px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="h-10">
        <img
          className="h-full"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="px-8 py-1.5 border border-gray-400 rounded-md text-white">
          a
        </button>
        <button className="px-6 py-2 rounded-lg bg-[#e50914] font-semibold text-white">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Nav;
