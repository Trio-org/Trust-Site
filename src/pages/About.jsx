import React from "react";
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { FaPaperPlane } from "react-icons/fa";
import { SiCountingworkspro } from "react-icons/si";

const About = () => {
  return (
    <div className="max-w-screen max-h-screen flex md:p-10 ">
      <div className="hidden md:flex w-[1/2]">
        <img
          src="https://e0.pxfuel.com/wallpapers/251/661/desktop-wallpaper-size-nature-s-full-nature-for-your-mobile-tablet-explore-of-nature-beautiful-nature-nature-nature-1600x900.jpg"
          alt=""
          className="rounded-2xl"
        />
      </div>
      <div className="p-5 flex flex-col gap-3 md:w-3/4 lg:w-1/2">
        <h2 className="font-semibold text-lg">Our Story</h2>
        <h1 className="text-4xl font-bold text-green-800">About us</h1>
        <p className="text-[15px] space-y-1 text-justify text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In qui
          suscipit explicabo? Dolore earum autem possimus optio quisquam odit
          quod nemo numquam, illum tenetur similique aut impedit temporibus
          quibusdam ab saepe quidem, ea hic sequi et quas eum provident minus.
        </p>
        <ul className="flex flex-col gap-3 justify-center items-start   p-2">
        <li className="flex items-center gap-1"><FaPaperPlane className="" size={19} style={{fill:'skyblue'}}/><div className=""><span className="font-semibold">Address</span> : Jaipur,Rajasthan,India</div></li>
        <li className="flex items-center gap-1"><IoIosCall className="" size={20} style={{fill:'green'}}/><div className=""><span className="font-semibold">Phone No </span>: +91 984758589</div></li>
            <li className="flex items-center gap-1"><CiMail className="" size={20} state = {{fill:'red'}
            }
            /><div className=""><span className="font-semibold">Email ID</span> : abc@gmail.com</div></li>
        </ul>
        <h2 className="font-semibold text-lg">Our Services</h2>
        <ul className="flex flex-col  flex-wrap sm:flex-row items-center gap-3">
        <li className="flex items-center gap-1"><SiCountingworkspro className="" size={20} style={{fill:'green'}}/><div className="">service 1</div></li>
        <li className="flex items-center gap-1"><SiCountingworkspro className="" size={20} style={{fill:'green'}}/><div className="">service 1</div></li>
        <li className="flex items-center gap-1"><SiCountingworkspro className="" size={20} style={{fill:'green'}}/><div className="">service 3</div></li>
        <li><button className="bg-green-600 p-2 text-white font-bold rounded-lg shadow-lg opacity-90 hover:opacity-100">Read more...</button></li>
        </ul>
      </div>
    </div>
  );
};

export default About;
