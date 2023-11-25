import { TbShoppingBag } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import NikeLogo from "../assets/nike-logo.svg";
import { useState } from "react";

const NAVLINKS = ["Home", "About", "Services", "Pricing", "Contact"];
export const Nav = ({setIsBagClicked}) => {
  const [isHamburgerMenuClicked, setIsHamburgerMenuClicked] = useState(false);
  return (
    <div>
      <div className="md:z-10 md:relative flex justify-between items-center">
        <img className="h-20 w-20 cursor-pointer" src={NikeLogo} />
        <div className="hidden md:flex space-x-12 ">
          {NAVLINKS.map((link, i) => (
            <div
              className={`hover:text-blue-400 cursor-pointer p-3 rounded-md ${
                i === 0 && "text-blue-400"
              }`}
              key={link}
            >
              {link}
            </div>
          ))}
        </div>
        <div className="md:static fixed left-4 bottom-4 bg-white cursor-pointer p-4 rounded-full md:mr-6">
          <TbShoppingBag onClick={setIsBagClicked} />
        </div>
        <button
          onClick={() => setIsHamburgerMenuClicked(!isHamburgerMenuClicked)}
          className=" md:hidden block p-2 bg-transparent hover:bg-gray-300 rounded-lg border-gray-300 focus:border"
        >
          <RxHamburgerMenu className="h-6 w-6 cursor-pointer " />
        </button>
      </div>
      <div>
        {isHamburgerMenuClicked && (
          <div className="flex flex-col bg-gray-50 rounded-md p-4 cursor-pointer md:hidden">
            {NAVLINKS.map((link, i) => (
              <div
                className={`hover:bg-gray-100 p-3 rounded-md ${
                  i === 0 && "bg-blue-500 hover:bg-blue-500"
                }`}
                key={link}
              >
                {link}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
