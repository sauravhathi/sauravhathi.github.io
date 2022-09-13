import React, { useState } from "react";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
      <nav class="flex items-center justify-between flex-wrap bg-gray-600 p-4 lg:pl-10 lg:pr-10">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <img
            src={require("../assests/logo.png")}
            class="fill-current h-8 w-8 mr-2"
            width="84"
            height="84"
            alt="Logo"
          />
          <span class="font-semibold text-xl tracking-tight">Portfolio</span>
        </div>
        <div class="block lg:hidden">
          <button
            class="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-200 hover:text-white hover:border-gray-500"
            onClick={toggleMenu}
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            showMenu ? "block" : "hidden"
          }`}
        >
          <div class="text-sm lg:flex-grow">
            <a
              href="/"
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            >
              Home
            </a>
            <a
              href="#About"
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            >
              About
            </a>
            <a
              href="https://github.com/sauravhathi?tab=repositories"
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            >
              Projects
            </a>
            <a
              href="https://realcoder.techss24.com/"
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white"
            >
              Blog
            </a>
          </div>
          <div>
            <a
              href="https://github.com/sauravhathi"
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-gray-200 hover:border-transparent hover:text-gray-600 hover:bg-white mt-4 lg:mt-0"
            >
              Github
            </a>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;
