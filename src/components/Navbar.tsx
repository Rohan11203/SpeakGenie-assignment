import { useState } from "react";
import { LogoIcon } from "./Icons/LogoIcon";
import { HamburgerIcon } from "./Icons/HamburgerIcon";
import { CloseIcon } from "./Icons/CloseIcon";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#", text: "Why" },
    { href: "#", text: "Programs" },
    { href: "#", text: "Features" },
    { href: "#", text: "For Parents" },
    { href: "#", text: "FAQ" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/30 shadow-sm backdrop-blur-lg noto-sans-kr fixed top-0 left-0 right-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <LogoIcon />
            <span className="ml-3 text-2xl font-bold text-gray-800">
              Topmind Care
            </span>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="text-purple-700 hover:text-purple-900 font-semibold transition duration-150 ease-in-out"
              >
                {link.text}
              </a>
            ))}
            <div className="hidden md:block">
              <button className="bg-purple-600  cursor-pointer text-white font-bold py-3 px-4 rounded-2xl hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
                Start Free
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            {isMenuOpen ? (
              <CloseIcon onClick={toggleMenu} />
            ) : (
              <HamburgerIcon onClick={toggleMenu} />
            )}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="text-purple-700 hover:bg-purple-50 block px-3 py-2 rounded-md text-base font-semibold"
              >
                {link.text}
              </a>
            ))}
          </div>
          <div className="px-4 pb-4">
            <button className="w-full bg-purple-600 text-white font-bold py-3 px-6 rounded-full hover:bg-purple-700 transition duration-300 ease-in-out shadow-md">
              Start Free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
