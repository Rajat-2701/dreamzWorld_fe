import React from "react";
import HomeImg from "../../assets/umberella.png";
import Term from "../../assets/term.png";
import Car from "../../assets/car.png";
import Bike from "../../assets/bike.png";
import Health from "../../assets/health.png";
import maxLife from "../../assets/maxLife.png";
import manipalHealth from "../../assets/mainipal.png";
import avivaLife from "../../assets/avivaLife.png";
import digitLife from "../../assets/digit.png";
import hdfcLife from "../../assets/hdfcLife.png";
import futureGeneral from "../../assets/futureGeneral.png";
import careHealth from "../../assets/careHealth.png";
import bajajAllianz from "../../assets/bajajAllianz.png";
import royalSundream from "../../assets/royalSundream.jpeg";
import aegon from "../../assets/aegon.png";
import edelwise from "../../assets/edelwise.png";
import starHealth from "../../assets/starHealth.png";
import canaraObc from "../../assets/canaraObc.jpeg";
import aditiyaCaptial from "../../assets/aditiyaCaptial.jpeg";
import shreeRamInsurance from "../../assets/shreeRam.png";
import iciciInsurnace from "../../assets/iciciInsurnace.jpeg";
import univeralSompo from "../../assets/univeralSompo.jpeg";
import ergoInsurance from "../../assets/ergo.png";
import tataAig from "../../assets/tataAig.png";
import libertyGeneral from "../../assets/libertyGeneral.jpeg";
import nivaHealth from "../../assets/nivaHealth.png";
import lombard from "../../assets/lombard.png";
import relianceGeneral from "../../assets/relianceGeneral.jpeg";
import praAmerica from "../../assets/praAmerica.png";
import nationalInsurance from "../../assets/nationalInsurance.jpeg";
import sbiGeneral from "../../assets/sbiGeneral.jpeg";
import metLife from "../../assets/pnbMetlife.png";
import tataAia from "../../assets/tataAia.png";
const Home = () => {
  return (
    <>
      <div className="pb-20 pt-40 px-10">
        <div className="flex justify-between items-center flex-col xl:flex-row">
          <div className="flex flex-col w-full justify-between gap-9 items-center">
            <h4 className="text-3xl lg:text-4xl text-[#394253] font-medium">
              Compare Best Insurance Policies & Save Money
            </h4>
            <div className="border bg-white rounded-md px-10 w-full py-20 shadow-md">
              <div className="flex justify-between items-center flex-col lg:flex-row gap-10 lg:gap-0">
                <div className="flex items-center flex-col">
                  <img src={Term} alt="term" className="w-20" />
                  <h4 className="text-lg uppercase font-medium underline">
                    Term Insurance
                  </h4>
                </div>
                <div className="flex items-center flex-col">
                  <img src={Car} alt="car" className="w-20" />
                  <h4 className="text-lg uppercase font-medium underline">
                    Car Insurance
                  </h4>
                </div>
                <div className="flex items-center flex-col">
                  <img src={Bike} alt="bike" className="w-20" />
                  <h4 className="text-lg uppercase font-medium underline">
                    Bike Insurance
                  </h4>
                </div>
                <div className="flex items-center flex-col">
                  <img src={Health} alt="health" className="w-20" />
                  <h4 className="text-lg uppercase font-medium underline">
                    Health Insurance
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <img src={HomeImg} alt="homeImg" className="w-[600px]" />
        </div>
      </div>
      {/* our partners */}
      <div className="our-partners bg-[#f5f5f5] px-0 py-10">
        <h4 className="text-[50px] uppercase font-medium text-[rgba(8,126,164,1)] text-center">
          Our partners
        </h4>
        <div className="flex justify-center gap-10 items-start xl:items-center flex-wrap mt-10 xl:mt-20 mb-10">
          <div className="border-dashed border-2 p-2 border-gray-300">
            <img src={maxLife} className="w-[160px] h-[90px]" />
          </div>
          <div className="border-dashed border-2 p-2 border-gray-300">
            <img src={manipalHealth} className="w-[160px] h-[90px]" />
          </div>
          <div className="border-dashed border-2 p-2 border-gray-300">
            <img src={avivaLife} className="w-[160px] h-[90px]" />
          </div>
          <div className="border-dashed border-2 p-2 border-gray-300">
            <img src={digitLife} className="w-[160px] h-[90px]" />
          </div>
          <div className="border-dashed border-2 p-2 border-gray-300">
            <img src={hdfcLife} className="w-[160px] h-[90px]" />
          </div>
          <div className="border-dashed border-2 p-2 border-gray-300">
            <img src={futureGeneral} className="w-[160px] h-[90px]" />
          </div>
        </div>
        <div className="flex justify-center gap-10 items-start xl:items-center flex-wrap !mt-0 mb-10">
          <div className="border-dashed border-2 p-2 border-gray-300">
            <img src={careHealth} className="w-[160px] h-[90px]" />
          </div>
          <div className="border-dashed border-2 p-2 border-gray-300">
            <img src={bajajAllianz} className="w-[160px] h-[90px]" />
          </div>
          <div className="border-dashed border-2 p-2 border-gray-300">
            <img src={royalSundream} className="w-[160px] h-[90px]" />
          </div>
          <div className="border-dashed border-2 p-2 border-gray-300">
            <img src={aegon} className="w-[160px] h-[90px]" />
          </div>
          <div className="border-dashed border-2 p-2 border-gray-300">
            <img src={edelwise} className="w-[160px] h-[90px]" />
          </div>
          <div className="border-dashed border-2 p-2 border-gray-300">
            <img src={starHealth} className="w-[160px] h-[90px]" />
          </div>
        </div>
        <div className="flex justify-center gap-10 items-start xl:items-center flex-wrap !mt-0 mb-10">
          <div className="border-dashed border-2 p-2 border-gray-300">
            <img src={canaraObc} className="w-[160px] h-[90px]" />
          </div>
          <div className="border-dashed border-2 p-2 border-gray-300">
            <img src={aditiyaCaptial} className="w-[160px] h-[90px]" />
          </div>
          <div className="border-dashed border-2 p-2 border-gray-300">
            <img src={shreeRamInsurance} className="w-[160px] h-[90px]" />
          </div>
          <div className="border-dashed border-2 p-2 border-gray-300">
            <img src={iciciInsurnace} className="w-[160px] h-[90px]" />
          </div>
          <div className="border-dashed border-2 p-2 border-gray-300">
            <img src={univeralSompo} className="w-[160px] h-[90px]" />
          </div>
          <div className="border-dashed border-2 p-2 border-gray-300">
            <img src={ergoInsurance} className="w-[160px] h-[90px]" />
          </div>
        </div>
        <div className="flex justify-center gap-10 items-start xl:items-center flex-wrap !mt-0 mb-10">
          <div className="border-dashed border-2 p-2 border-gray-300">
            <img src={tataAig} className="w-[160px] h-[90px]" />
          </div>
          <div className="border-dashed border-2 p-2 border-gray-300">
            <img src={libertyGeneral} className="w-[160px] h-[90px]" />
          </div>
          <div className="border-dashed border-2 p-2 border-gray-300">
            <img src={nivaHealth} className="w-[160px] h-[90px]" />
          </div>
          <div className="border-dashed border-2 p-2 border-gray-300">
            <img src={relianceGeneral} className="w-[160px] h-[90px]" />
          </div>
          <div className="border-dashed border-2 p-2 border-gray-300">
            <img src={praAmerica} className="w-[160px] h-[90px]" />
          </div>
          <div className="border-dashed border-2 p-2 border-gray-300">
            <img src={lombard} className="w-[160px] h-[90px]" />
          </div>
        </div>
        <div className="flex mx-auto justify-center gap-10 items-start xl:items-center flex-wrap !mt-0">
          <div className="border-dashed border-2 p-2 border-gray-300">
            <img src={nationalInsurance} className="w-[160px] h-[90px]" />
          </div>
          <div className="border-dashed border-2 p-2 border-gray-300">
            <img src={sbiGeneral} className="w-[160px] h-[90px]" />
          </div>
          <div className="border-dashed border-2 p-2 border-gray-300">
            <img src={metLife} className="w-[160px] h-[90px]" />
          </div>
          <div className="border-dashed border-2 p-2 border-gray-300">
            <img src={tataAia} className="w-[160px] h-[90px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
