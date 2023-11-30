import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="second-section h-auto bg-[#212529] relative py-8 lg:py-16">
      <div className="about-policies-inner">
        <div className="grid about-policies-inner-main pl-10 lg:pl-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 !gap-5 lg:gap-10 w-full">
          {/* About */}
          <div className="about flex flex-col items-start">
            <h4 className="text-[30px] lg:text-[45px] leading-[60px] relative font-extrabold text-[#fff] after:absolute after:w-3/4 after:h-[4px] after:bg-[#fff] after:left-0 after:bottom-0">
              ABOUT US
            </h4>
            <div className="flex items-start flex-col mt-8 lg:mt-16">
              <div className="explore text-[#fff] font-bold uppercase text-lg">
                <Link className="hover:text-[rgba(8,126,164,1)] transition-all duration-300 ease-in-out">
                  Explore
                </Link>
              </div>
              <div className="explore text-[#fff] mt-3 font-bold uppercase text-lg">
                <Link className="hover:text-[rgba(8,126,164,1)] transition-all duration-300 ease-in-out">
                  FAQ
                </Link>
              </div>
            </div>
          </div>
          {/* Policies */}
          <div className="policies flex flex-col items-start">
            <h4 className="text-[30px] lg:text-[45px] leading-[60px] uppercase relative font-extrabold text-[#fff] after:absolute after:w-full after:h-[4px] after:bg-[#fff] after:left-0 after:bottom-0">
              Policies
            </h4>
            <div className="flex items-start flex-col mt-8 lg:mt-16">
              <div className="explore text-[#fff] font-bold uppercase text-lg hover:text-[#fff] transition-all duration-300 ease-linear">
                <Link
                  to="/terms-conditions"
                  className="hover:text-[rgba(8,126,164,1)] transition-all duration-300 ease-in-out"
                >
                  Terms & Condtions
                </Link>
              </div>
              <div className="faqs text-[#fff] font-bold uppercase text-lg mt-3">
                <Link className="hover:text-[rgba(8,126,164,1)] transition-all duration-300 ease-in-out">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
          {/* Follow Us */}
          <div className="policies flex flex-col items-start">
            <h4 className="text-[30px] lg:text-[45px] leading-[60px] uppercase relative font-extrabold text-[#fff] after:absolute after:w-full after:h-[4px] after:bg-[#fff] after:left-0 after:bottom-0">
              Follow Us
            </h4>
            {/* Social Icons */}
            <div className="social-main mt-8 lg:mt-16 grid grid-cols-3 gap-4 lg:gap-5">
              {/* For desktop */}
              <div className="twitter p-3 bg-white rounded-full hidden md:block">
                <Icon icon="devicon:twitter" color="white" fontSize={30} />
              </div>
              {/* For Mobile */}
              <div className="twitter p-[10px] bg-white rounded-full block md:hidden">
                <Icon icon="devicon:twitter" color="#cd486b" fontSize={20} />
              </div>
              {/* For Desktop */}
              <div className="twitter p-3 bg-white rounded-full hidden md:block">
                <Icon icon="eva:facebook-fill" color="#3b5998" fontSize={30} />
              </div>
              {/* For Mobile */}
              <div className="twitter p-[10px] bg-white rounded-full block md:hidden">
                <Icon icon="eva:facebook-fill" color="#cd486b" fontSize={20} />
              </div>
              {/* For Desktop */}
              <div className="twitter p-3 bg-white rounded-full hidden md:block">
                <Icon icon="mdi:instagram" color="#cd486b" fontSize={30} />
              </div>
              {/* For Mobile */}
              <div className="twitter p-[10px] bg-white rounded-full block md:hidden">
                <Icon icon="mdi:instagram" color="#cd486b" fontSize={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
