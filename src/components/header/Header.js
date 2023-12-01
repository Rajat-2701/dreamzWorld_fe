import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  const homeClass = location.pathname === "/" ? "headerActive" : "";
  const loginClass = location.pathname === "/login" ? "headerActive" : "";
  const aboutClass = location.pathname === "/about-us" ? "headerActive" : "";

  const [show, setShow] = useState(false);

  return (
    <div className="globalHeader w-full">
      <div
        className={`globalHeader-inner shadow-md mb-10 fixed top-0 left-0 z-[100] bg-white flex items-start flex-col lg:flex-row lg:items-center px-0 lg:px-20 w-full py-1 pl-0 ${
          show ? "h-screen justify-between" : "h-20 lg:h-28 justify-center"
        }`}
      >
        <div className="logo-main w-1/2 flex flex-col justify-center">
          <img
            src="https://instantpics.s3.ap-south-1.amazonaws.com/myDreamzWorld/assets/logoMain.png"
            className="w-[130px] lg:w-[180px]"
            alt="https://instantpics.s3.ap-south-1.amazonaws.com/myDreamzWorld/assets/logoMain.png"
          />
        </div>
        <div
          className="absolute right-4 top-4 block lg:hidden"
          onClick={() => setShow(!show)}
        >
          {!show ? (
            <Icon icon="material-symbols:menu" color="#000" fontSize={40} />
          ) : (
            <Icon icon="material-symbols:close" color="#000" fontSize={40} />
          )}
        </div>
        <div className="navItems w-1/2 mr-20 hidden lg:block">
          <ul className="flex items-center justify-end no-underline">
            <li className="mr-28">
              <Link
                className={`text-2xl cursor-pointer uppercase hover:text-[rgba(8,126,164,1)] transition-all duration-300 ease-in-out text-[#000000] ${
                  homeClass ? `font-bold ${homeClass}` : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="mr-28">
              <Link
                target="_blank"
                to="https://instantpics.in/login"
                className={`text-2xl cursor-pointer uppercase hover:text-[rgba(8,126,164,1)] transition-all duration-300 ease-in-out text-[#000000] ${
                  loginClass ? `font-bold ${loginClass}` : ""
                }`}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className={`text-2xl cursor-pointer uppercase hover:text-[rgba(8,126,164,1)] transition-all duration-300 ease-in-out text-[#000000] ${
                  aboutClass ? `font-bold ${aboutClass}` : ""
                }`}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        {show ? (
          <>
            <div className="flex justify-center items-center lg:hidden absolute left-1/2 right-1/2 top-1/2 bottom-1/2">
              <ul className="flex items-center flex-col justify-center no-underline w-full h-full">
                <li className="mb-10">
                  <Link
                    className={`text-2xl cursor-pointer uppercase hover:text-[rgba(8,126,164,1)] transition-all duration-300 ease-in-out text-[#000000] font-bold ${
                      homeClass ? homeClass : ""
                    }`}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-10">
                  <Link
                    target="_blank"
                    to="https://instantpics.in/login"
                    className={`text-2xl cursor-pointer uppercase hover:text-[rgba(8,126,164,1)] transition-all duration-300 ease-in-out text-[#000000] ${
                      loginClass ? loginClass : ""
                    }`}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className={`text-2xl cursor-pointer uppercase hover:text-[rgba(8,126,164,1)] transition-all duration-300 ease-in-out text-[#000000] ${
                      aboutClass ? aboutClass : ""
                    }`}
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
