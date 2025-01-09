// src/components/Header.js
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = ({ toggleDarkMode, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const navigations = [
    {
      text: "Beranda",
      to: "/",
    },
    {
      text: "Tentang",
      to: "/about",
    },
    {
      text: "Layanan",
      to: "/services",
    },
    {
      text: "Portfolio",
      to: "/portfolio",
    },
    {
      text: "Kontak",
      to: "/contact",
    },
  ];
  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav
      className={`${
        isScrolling
          ? `bg-white border-b-2 border-gray-200 dark:bg-gray-900 `
          : "bg-transparent"
      } fixed z-50 w-screen`}>
      <div className="max-w-screen-xl flex md:flex-wrap gap-6 items-center justify-between mx-auto p-8">
        <NavLink
          to="/"
          className="flex items-center justify-center w-full md:w-auto">
          <img
            src="/assets/superai-image-1735128080093.png"
            className="h-10 md:h-12 mr-3 rounded-full"
            alt="Syntax Threads Generation Logo"
          />
          <span
            className={`self-center text-lg md:text-xl font-semibold whitespace-nowrap ${
              isScrolling ? "text-gray-900 dark:text-white" : "text-white"
            }`}>
            Syntax Threads Generation
          </span>
        </NavLink>
        <button
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex items-center p-3 w-12 h-12 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded={isOpen}
          onClick={toggleNavbar}>
          <span className="sr-only">Buka menu utama</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:block md:w-auto max-md:absolute max-md:right-0 max-md:top-28 max-md:z-50`}
          id="navbar-multi-level">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {navigations.map((navigation) => (
              <li key={navigation.text}>
                <NavLink
                  to={navigation.to}
                  className={`block py-3 px-4 text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${
                    isScrolling ? "text-gray-900 dark:text-white" : "text-white"
                  } md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>
                  {navigation.text}
                </NavLink>
              </li>
            ))}
            <li>
              <button
                onClick={toggleDarkMode}
                className={`flex items-center py-3 px-4 text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                  isScrolling ? "text-gray-900 dark:text-white" : "text-white"
                }`}>
                {isDarkMode ? (
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    height="1em"
                    role="presentation"
                    viewBox="0 0 24 24"
                    width="1em">
                    <g fill="currentColor">
                      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
                      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
                    </g>
                  </svg>
                ) : (
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    height="1em"
                    role="presentation"
                    viewBox="0 0 24 24"
                    width="1em">
                    <path
                      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
                      fill="currentColor"
                    />
                  </svg>
                )}
                {isDarkMode ? "Mode Terang" : "Mode Gelap"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
