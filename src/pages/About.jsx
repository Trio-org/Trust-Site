import React from "react";
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { FaPaperPlane } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="w-full mb-10 max-h-screen flex flex-col md:flex-row text-white">
      <div className="hidden w-full md:w-1/2 justify-center items-center p-4 sm:block">
        <img
          src="https://ofhsoupkitchen.org/wp-content/uploads/2024/01/how-to-help-others-2.jpg"
          alt="about-img"
          className="rounded-sm w-full h-auto"
        />
      </div>
      <div className="flex flex-col mx-3 gap-3 md:w-1/2 lg:w-1/2 p-4">
        <div className="text-center">
          <h2 className="font-semibold text-lg">Our Story</h2>
          <h1 className="text-4xl font-bold text-indigo-500">About us</h1>
        </div>
        <p className="text-gray-300 text-justify">
          Sadhana Trust is always a pioneering development institution to build poverty free, gender balanced, equitable, ecological sensitive, democratic, just and value based inclusive society. It creates freedom of choice to the families, groups and community to determine and develop the meaning of their lives, their identities and their life styles for the well-being of their life.
          Sadhana Trust has been gained better experience in promoting the peoples empowerment through economic and social status in its working area. The staff and volunteers have given their contributions with co-ordination of management and they met successful outcomes.
        </p>
        <ul className="flex flex-col gap-3 justify-center items-start p-2">
          <li className="flex items-center gap-1">
            <FaPaperPlane className="" size={19} style={{ fill: 'skyblue' }} />
            <div>
              <span className="font-semibold">Address</span> : 4/35 Ganeshapuram road, Gandamanur Post, Aundipatti taluk, Theni
            </div>
          </li>
          <li className="flex items-center gap-1">
            <IoIosCall className="" size={20} style={{ fill: 'green' }} />
            <div>
              <span className="font-semibold">Phone No </span>:+91-8667043525 | +91-8489986722
            </div>
          </li>
          <li className="flex items-center gap-1">
            <CiMail className="" size={20} style={{ fill: 'red' }} />
            <div>
              <span className="font-semibold">Email ID</span> : sadhanatrusttheni@gmail.com
            </div>
          </li>
        </ul>
        <h2 className="font-semibold text-lg">Our Motto</h2>
        <p className="mb-10">Creation of Great Future for Suppressed People</p>
      </div>
    </div>
  );
};

export default About;
