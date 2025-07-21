"use client";
import React from "react";
import Image from "next/image";
import hero from "@/assets/hero.png";
import labtop from "@/assets/labtop.jpg";
import makeman from "@/assets/makeman.jpg";
import plus from "@/assets/plus.png";
import fever from "@/assets/fever.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVirus } from "@fortawesome/free-solid-svg-icons";
import { faSkull } from "@fortawesome/free-solid-svg-icons";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faVirusCovid } from "@fortawesome/free-solid-svg-icons";
import { faMaskFace } from "@fortawesome/free-solid-svg-icons";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsDesktop(width >= 1024);
    };

    checkDevice();
    setMounted(true);
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    if (mounted && !isDesktop) {
      setShowModal(true);
    }
  }, [mounted, isDesktop]);

  const handleCloseTab = () => {
    setShowModal(false);
    window.open("", "_self");
    window.close();
    setTimeout(() => {
      window.location.href = "https://google.com";
    }, 1000);
  };

  if (!mounted) return null;

  if (!isDesktop) {
    return (
      <>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-2xl shadow-xl w-[90%] max-w-md text-center space-y-4">
              <div className="text-3xl">⚠️</div>
              <h2 className="text-xl font-semibold text-purple-700">
                Desktop Only Site
              </h2>
              <p className="text-gray-700">
                This website is only accessible from desktop or laptop devices.
                <br />
                Please switch to a larger screen.
              </p>
              <button
                onClick={handleCloseTab}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full transition duration-200"
              >
                OK
              </button>
            </div>
          </div>
        )}
        <div className="h-screen flex items-center justify-center text-purple-600 font-bold text-center px-4 blur-sm">
          ⚠️ This website is only accessible from desktop or laptop devices.
        </div>
      </>
    );
  }

  return (
    <div className="">
      <div className="">
        {/* Hero Section */}
        <div className="bg-purple-100 h-[315px] rounded-br-[150px]">
          <div className="flex ml-15 mr-15 items-center justify-between">
            <div className="text-[35px] font-bold cursor-pointer">Covid.</div>
            <ul className="flex justify-end gap-4 text-gray-500 cursor-pointer">
              <li>Home</li>
              <li>Reports</li>
              <li>Centers</li>
              <li>About</li>
              <li>Symptons</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex ml-15 mr-15 mt-10 justify-between items-center">
            <div className="">
              <p className="text-sm text-purple-600">COVID-19 AWARENESS</p>
              <p className="text-5xl font-bold text-purple-700">
                Stay Safe. Stay Home.
              </p>
              <p className="mt-4 text-xs text-gray-500">
                This is official COVID-19 Website.
                <br />
                Follow the guildlines provided by the official only.
              </p>
              <button className="bg-purple-700 text-white p-2 pl-4 pr-4 mt-4 rounded-3xl text-sm hover:bg-purple-800 cursor-pointer">
                HOW TO PREVENT
              </button>
            </div>
            <div className="mt-[30.5px] mr-17">
              <Image src={hero} width={300} alt="hero" />
            </div>
          </div>
        </div>
        {/* Coronavirus Statistics */}
        <div className="grid">
          <div className="grid justify-center mt-7">
            <p className="text-center text-purple-700 font-bold text-xl">
              Coronavirus Statistics
            </p>
            <p className="text-gray-400 text-sm">
              Track the cases of the country India. Changes May applied in 24HRS
            </p>
          </div>
          <div className="flex justify-center gap-50 mt-7">
            <div>
              <div className="w-10 h-10 ml-8 text-blue-500">
                <FontAwesomeIcon icon={faVirus} />
              </div>
              <div className="font-bold text-2xl">95,856,25</div>
              <p className="text-[8px] text-gray-400 text-center mt-2">
                ACTIVE CASE
              </p>
            </div>

            <div>
              <div className="w-10 h-10 ml-8 text-red-500">
                <FontAwesomeIcon icon={faSkull} />
              </div>
              <div className="font-bold text-2xl">5,856,25</div>
              <p className="text-[8px] text-gray-400 text-center mt-2">
                DEATH CASE
              </p>
            </div>

            <div>
              <div className="w-10 h-10 ml-8 text-green-500">
                <FontAwesomeIcon icon={faHeartPulse} />
              </div>
              <div className="font-bold text-2xl">595,856,25</div>
              <p className="text-[8px] text-gray-400 text-center mt-2">
                RECOVERED CASE
              </p>
            </div>
          </div>
        </div>
        {/* Introduction */}
        <div className="grid">
          <div className="flex ml-15 mr-15 mt-15 gap-20">
            <div className="relative w-[300px] h-[300px]">
              <Image src={labtop} alt="laptop" fill className="object-cover" />
              <div className="absolute bg-purple-600 w-[20px] h-[20px] mt-67 ml-63 pl-5 pr-7 pt-2 pb-6 cursor-wait hover:bg-purple-700">
                <FontAwesomeIcon
                  icon={faPlay}
                  className="text-white w-[20px] pr-2"
                />
              </div>
            </div>
            <div className="grid">
              <p className="font-bold text-3xl text-purple-600">
                What is Coronavirus?
              </p>
              <p className="mt-3 text-gray-500 text-sm">
                Overview. Coronavirus disease (COVID-19) is an infectious
                disease caused by the SARS-CoV-2 virus.
                <br />
                Most people infected with the virus will experience mild to
                moderate respiratory illness and recover without requiring
                special treatment.
              </p>
              <div className="grid gap-2">
                <div className="flex mt-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    width={20}
                    className="text-purple-600"
                  />
                  <p className="ml-1 text-sm text-gray-500">
                    The virus spreads very easily to other people.
                  </p>
                </div>
                <div className="flex">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    width={20}
                    className="text-purple-600"
                  />
                  <p className="ml-1 text-sm text-gray-500">
                    Some infected people have no symptoms, but others get very
                    sick, and some people die.
                  </p>
                </div>
                <div className="flex">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    width={20}
                    className="text-purple-600"
                  />
                  <p className="ml-1 text-sm text-gray-500">
                    Swabs from your nose or throat are tested to diagnose
                    COVID-19.
                  </p>
                </div>
                <button className="mr-200 bg-purple-700 text-white p-2 pl-4 pr-4 mt-4 rounded-3xl text-sm hover:bg-purple-800 cursor-pointer">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
          <div className="flex ml-15 mr-15 mt-15 gap-20">
            <div className="grid">
              <p className="font-bold text-3xl text-purple-600">
                What is it Dangerous?
              </p>
              <p className="mt-3 text-gray-500 text-sm">
                Overview. Coronavirus disease (COVID-19) is an infectious
                disease caused by the SARS-CoV-2 virus.
                <br />
                Most people infected with the virus will experience mild to
                moderate respiratory illness and recover without requiring
                special treatment.
              </p>
              <div className="grid gap-2">
                <div className="flex mt-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    width={20}
                    className="text-purple-600"
                  />
                  <p className="ml-1 text-sm text-gray-500">
                    The virus spreads very easily to other people.
                  </p>
                </div>
                <div className="flex">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    width={20}
                    className="text-purple-600"
                  />
                  <p className="ml-1 text-sm text-gray-500">
                    Some infected people have no symptoms, but others get very
                    sick, and some people die.
                  </p>
                </div>
                <div className="flex">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    width={20}
                    className="text-purple-600"
                  />
                  <p className="ml-1 text-sm text-gray-500">
                    Swabs from your nose or throat are tested to diagnose
                    COVID-19.
                  </p>
                </div>
                <button className="mr-200 bg-purple-700 text-white p-2 pl-4 pr-4 mt-4 rounded-3xl text-sm hover:bg-purple-800 cursor-pointer">
                  LEARN MORE
                </button>
              </div>
            </div>
            <div className="relative w-[300px] h-[300px] ">
              <Image src={makeman} alt="laptop" fill className="object-cover" />
              <div className="absolute bg-purple-600 w-[20px] h-[20px] mt-67 ml-63 pl-5 pr-7 pt-2 pb-6 cursor-wait hover:bg-purple-700">
                <FontAwesomeIcon
                  icon={faPlay}
                  className="text-white w-[20px] pr-2"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Third Section */}
        <div className="flex ml-15 mr-15 mt-15 justify-around">
          <div className="flex gap-2">
            <div className="mt-1 text-purple-600">
              <FontAwesomeIcon icon={faVirusCovid} className="w-[30px] mt-2" />
            </div>
            <div>
              <p className="text-[15px] font-bold text-purple-600">Symptoms</p>
              <p className="text-gray-500 text-sm">Cough,fever,headache</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="mt-1 text-purple-600">
              <FontAwesomeIcon icon={faMaskFace} className="w-[30px] mt-2" />
            </div>
            <div>
              <p className="text-[15px] font-bold text-purple-600">Symptoms</p>
              <p className="text-gray-500 text-sm">Cough,fever,headache</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="mt-1 text-purple-600">
              <FontAwesomeIcon icon={faShield} className="w-[30px] mt-2" />
            </div>
            <div>
              <p className="text-[15px] font-bold text-purple-600">Symptoms</p>
              <p className="text-gray-500 text-sm">Cough,fever,headache</p>
            </div>
          </div>
        </div>
        {/* Fourth Section */}

        <div className="bg-purple-100 mt-15 pb-15">
          <div className="flex ml-15 mr-15">
            <div className="flex mt-25 gap-5">
              <div className="grid gap-5">
                <div className="grid">
                  <div className="w-[200px] h-[100px] bg-purple-200  rounded-t-2xl">
                    <FontAwesomeIcon
                      icon={faHouse}
                      className="text-purple-900 w-[50px] h-[50px] ml-20 mt-5"
                    />
                  </div>
                  <div className=" w-[200px] bg-white rounded-b-2xl break-words whitespace-normal pb-5">
                    <div className="font-bold ml-2">Stay At Home</div>
                    <div className="text-sm text-gray-500 ml-2 mr-2">
                      Stay at home during coronovirus.You can Prevent from your
                      self
                    </div>
                  </div>
                </div>
                <div className="grid">
                  <div className="w-[200px] h-[100px] bg-purple-200  rounded-t-2xl">
                    <FontAwesomeIcon
                      icon={faHouse}
                      className="text-purple-900 w-[50px] h-[50px] ml-20 mt-5"
                    />
                  </div>
                  <div className=" w-[200px] bg-white rounded-b-2xl break-words whitespace-normal pb-5">
                    <div className="font-bold ml-2">Stay At Home</div>
                    <div className="text-sm text-gray-500 ml-2 mr-2">
                      Stay at home during coronovirus.You can Prevent from your
                      self
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-5">
                <div className="grid">
                  <div className="w-[200px] h-[100px] bg-purple-200  rounded-t-2xl">
                    <FontAwesomeIcon
                      icon={faHouse}
                      className="text-purple-900 w-[50px] h-[50px] ml-20 mt-5"
                    />
                  </div>
                  <div className=" w-[200px] bg-white rounded-b-2xl break-words whitespace-normal pb-5">
                    <div className="font-bold ml-2">Stay At Home</div>
                    <div className="text-sm text-gray-500 ml-2 mr-2">
                      Stay at home during coronovirus.You can Prevent from your
                      self
                    </div>
                  </div>
                </div>
                <div className="grid">
                  <div className="w-[200px] h-[100px] bg-purple-200  rounded-t-2xl">
                    <FontAwesomeIcon
                      icon={faHouse}
                      className="text-purple-900 w-[50px] h-[50px] ml-20 mt-5"
                    />
                  </div>
                  <div className=" w-[200px] bg-white rounded-b-2xl break-words whitespace-normal pb-5">
                    <div className="font-bold ml-2">Stay At Home</div>
                    <div className="text-sm text-gray-500 ml-2 mr-2">
                      Stay at home during coronovirus.You can Prevent from your
                      self
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid ml-12 mt-50 break-words overflow-x-hidden">
              <p className="font-bold text-2xl text-purple-600">
                How To Prevent Coronavirus?
              </p>
              <p className="text-sm text-gray-500">
                To prevent the spread of coronavirus, the most important
                measures include frequent handwashing, avoiding touching your
                face, <br />
                and minimizing contact with others, especially in crowded
                places. Additionally, avoiding unnecessary travel and practicing
                social <br />
                distancing are crucial.{" "}
              </p>
              <div className="grid">
                <div className="flex mt-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    width={20}
                    className="text-purple-600"
                  />
                  <p className="ml-1 text-sm text-gray-500">
                    The virus spreads very easily to other people.
                  </p>
                </div>
                <div className="flex">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    width={20}
                    className="text-purple-600"
                  />
                  <p className="ml-1 text-sm text-gray-500">
                    Some infected people have no symptoms, but others get very
                    sick, and some people die.
                  </p>
                </div>
                <div className="flex">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    width={20}
                    className="text-purple-600"
                  />
                  <p className="ml-1 text-sm text-gray-500">
                    Swabs from your nose or throat are tested to diagnose
                    COVID-19.
                  </p>
                </div>
                <button className="mr-200 bg-purple-700 text-white p-2 pl-4 pr-4 mt-4 text-nowrap rounded-3xl text-sm hover:bg-purple-800 cursor-pointer">
                  READ MORE ABOUT PREVENTION
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Fifth Section */}
        <div className="mt-15 ml-15 mr-15">
          <div className="flex justify-center mb-20">
            <p className="text-center font-bold text-xl text-purple-600">
              How To Protect Yourself
              <br />
              <span className="text-sm font-normal text-gray-500">
                Read the official guidelines for more information about
                protection
              </span>
            </p>
          </div>
          <div className="flex justify-evenly">
            <div className="grid gap-5">
              <p className="font-bold">You should do</p>

              <div className="flex">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  width={20}
                  className="text-green-600"
                />
                <p className="ml-1 text-sm text-gray-500">Stay at home</p>
              </div>
              <div className="flex">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  width={20}
                  className="text-green-600"
                />
                <p className="ml-1 text-sm text-gray-500">Wear mask</p>
              </div>
              <div className="flex">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  width={20}
                  className="text-green-600"
                />
                <p className="ml-1 text-sm text-gray-500">Use sanitizer</p>
              </div>
              <div className="flex">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  width={20}
                  className="text-green-600"
                />
                <p className="ml-1 text-sm text-gray-500">
                  Disinfect your home
                </p>
              </div>
              <div className="flex">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  width={20}
                  className="text-green-600"
                />
                <p className="ml-1 text-sm text-gray-500">Wash your hands</p>
              </div>
              <div className="flex">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  width={20}
                  className="text-green-600"
                />
                <p className="ml-1 text-sm text-gray-500">
                  Frequent self-isolation
                </p>
              </div>
            </div>
            <div className="grid gap-5">
              <p className="font-bold">You should do</p>

              <div className="flex">
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  width={20}
                  className="text-red-600"
                />
                <p className="ml-1 text-sm text-gray-500">
                  Avoid infected people
                </p>
              </div>
              <div className="flex">
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  width={20}
                  className="text-red-600"
                />
                <p className="ml-1 text-sm text-gray-500">Avoid animals</p>
              </div>
              <div className="flex">
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  width={20}
                  className="text-red-600"
                />
                <p className="ml-1 text-sm text-gray-500">Avoid handshaking</p>
              </div>
              <div className="flex">
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  width={20}
                  className="text-red-600"
                />
                <p className="ml-1 text-sm text-gray-500">
                  Avoid infected surfaces
                </p>
              </div>
              <div className="flex">
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  width={20}
                  className="text-red-600"
                />
                <p className="ml-1 text-sm text-gray-500">
                  Avoid touching your face
                </p>
              </div>
              <div className="flex">
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  width={20}
                  className="text-red-600"
                />
                <p className="ml-1 text-sm text-gray-500">Avoid droplets</p>
              </div>
            </div>
            <div>
              <Image src={plus} width={400} height={400} alt="plus" />
            </div>
          </div>
        </div>
        {/* Sixth section */}
        <div className="bg-purple-100 pb-8 mt-15">
          <div className="ml-15 mr-15 mb-20">
            <div className="grid">
              <p className="font-bold text-center text-xl text-purple-600 mt-10">
                Symptoms Of Coronavirus
                <br />
                <span className="text-sm font-normal text-gray-500">
                  Feel fever cough then you have to visit any covid center
                  avaible near to your location
                </span>
              </p>
            </div>

            <div className="grid">
              <div className="flex mt-15 justify-evenly">
                <div className="w-[320px] h-[120px] bg-white">
                  <div className="flex">
                    <div className="ml-5 mt-10">
                      <Image src={fever} width={100} height={100} alt="fever" />
                    </div>
                    <div className="grid ml-2 mt-5">
                      <p className="text-sm font-medium text-purple-600">
                        High Fever
                        <br />
                        <span className="text-xs font-normal text-gray-500">
                          It's a common symptom of various illnesses, but it's
                          also a key part of the body's defense mechanism
                          against pathogens.{" "}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[320px] h-[120px] bg-white">
                  <div className="flex">
                    <div className="ml-5 mt-10">
                      <Image src={fever} width={100} height={100} alt="fever" />
                    </div>
                    <div className="grid ml-2 mt-5">
                      <p className="text-sm font-medium text-purple-600">
                        High Fever
                        <br />
                        <span className="text-xs font-normal text-gray-500">
                          It's a common symptom of various illnesses, but it's
                          also a key part of the body's defense mechanism
                          against pathogens.{" "}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex mt-15 justify-evenly">
                <div className="w-[320px] h-[120px] bg-white">
                  <div className="flex">
                    <div className="ml-5 mt-10">
                      <Image src={fever} width={100} height={100} alt="fever" />
                    </div>
                    <div className="grid ml-2 mt-5">
                      <p className="text-sm font-medium text-purple-600">
                        High Fever
                        <br />
                        <span className="text-xs font-normal text-gray-500">
                          It's a common symptom of various illnesses, but it's
                          also a key part of the body's defense mechanism
                          against pathogens.{" "}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[320px] h-[120px] bg-white">
                  <div className="flex">
                    <div className="ml-5 mt-10">
                      <Image src={fever} width={100} height={100} alt="fever" />
                    </div>
                    <div className="grid ml-2 mt-5">
                      <p className="text-sm font-medium text-purple-600">
                        High Fever
                        <br />
                        <span className="text-xs font-normal text-gray-500">
                          It's a common symptom of various illnesses, but it's
                          also a key part of the body's defense mechanism
                          against pathogens.{" "}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-15 text-sm">
              <p className="text-gray-500">
                <span className="text-purple-600">
                  Stay at home and call your doctor
                </span>
                : comfort, being real, living a simple life, appreciating simple
                things, and realizing <br />
                that we don t need to go out to have fun
              </p>
            </div>
          </div>
        </div>
        {/* Seventh section */}
        <div className="mt-15 ml-15 mr-15 mb-15">
          <div className="text-center">
            <p className="text-purple-600 font-bold text-2xl">
              News And Articals
              <br />
              <span className="text-sm text-gray-500 font-normal">
                Here is the all news and atricles related to the coronavirus
              </span>
            </p>
          </div>

          <div className="flex justify-evenly mt-[60px] gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="relative w-[300px] h-[300px]">
                <Image
                  src={labtop}
                  width={300}
                  height={300}
                  alt="labtop"
                  className="w-full h-full object-cover"
                />

                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 bg-purple-600 px-4 py-2 text-white text-sm rounded shadow-md">
                  {new Date(2025, 6, 25).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 bg-purple-100 pb-20">
          <div className="flex justify-evenly pt-15">
            <div className="grid mb-18">
              <p className="font-bold">
                About
                <br />
                <span className="text-sm font-normal text-gray-500">
                  This is the footer section this whole website.
                </span>
              </p>
              <div className="flex gap-3 text-2xl">
                <div className="text-[#1877F2] hover:cursor-pointer">
                  <FaFacebook />
                </div>
                <div className="text-black hover:cursor-pointer">
                  <FaSquareXTwitter />
                </div>
                <div className="text-[#79218c] hover:cursor-pointer">
                  <FaSquareInstagram />
                </div>
                <div className="text-[#FF0000] hover:cursor-pointer">
                  <FaYoutube />
                </div>
              </div>
            </div>
            <div className="grid gap-3">
              <p className="font-bold">Quick Links</p>
              <ul className="grid gap-2 text-sm text-purple-500">
                <li>Symptoms</li>
                <li>Prevention</li>
                <li>FAQs</li>
                <li>About Coronavirus</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="grid">
              <p className="font-bold">Helpful Links</p>
              <ul className="grid gap-2 text-sm text-purple-500">
                <li className="">Healthcare Professional</li>
                <li>LGU Facilities</li>
                <li>Protect Your Family</li>
                <li>World Health</li>
              </ul>
            </div>
            <div className="grid">
              <p className="font-bold">Resources</p>
              <ul className="grid gap-2 text-sm text-purple-500">
                <li>WHO Website</li>
                <li>CDC Website</li>
                <li>Gov Website</li>
                <li>DOH Website</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
