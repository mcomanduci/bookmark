import { useState } from "react";
import logo from "/images/logo-bookmark.svg";
import whiteLogo from "/images/logo-bookmark-footer.svg";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function handleClick() {
    setShowMenu((state) => !state);
  }

  return (
    <nav className="container relative mx-auto p-6">
      <div className="flex items-center justify-between space-x-20 my-6">
        <div className="z-30">
          <img src={showMenu ? whiteLogo : logo} alt="" id="logo" />
        </div>

        <div className="hidden items-center space-x-10 uppercase text-grayishBlue md:flex">
          <a href="#features" className="tracking-widest hover:text-softRed">
            Features
          </a>
          <a href="#download" className="tracking-widest hover:text-softRed">
            Download
          </a>
          <a href="#faq" className="tracking-widest hover:text-softRed">
            FAQ
          </a>

          <a
            href="#"
            className="px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md hover:text-softRed hover:bg-white"
          >
            Login
          </a>
        </div>
        <button
          onClick={handleClick}
          id="menu-btn"
          className={`z-30 block md:hidden focus:outline-none hamburger ${
            showMenu ? "open" : ""
          }`}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div
        id="menu"
        className={`fixed inset-0 z-20 flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue ${
          showMenu ? "" : "hidden"
        }`}
      >
        <div className="w-full py-3 text-center">
          <a
            href="#features"
            className="block hover:text-softRed"
            onClick={handleClick}
          >
            Features
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a
            href="#download"
            className="block hover:text-softRed"
            onClick={handleClick}
          >
            Download
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a
            href="#faq"
            className="block hover:text-softRed"
            onClick={handleClick}
          >
            FAQ
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a
            href="#"
            className="block hover:text-softRed"
            onClick={handleClick}
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
