import React from "react";

function Navbar() {
  return (
    <header className="bg-black text-white body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokelinecap="round"
            strokelinejoin="round"
            strokewidth="2"
            className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-white text-xl">MB Portfolio</span>
        </a>
      </div>
    </header>
  );
}

export default Navbar;
