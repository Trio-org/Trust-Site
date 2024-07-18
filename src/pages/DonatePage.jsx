import React, { useState } from "react";
import PayCard from "../components/PayCard";
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaHandPointDown } from "react-icons/fa";

const DonatePage = () => {
  const [donate, setdonate] = useState(false);
  return (
        <div className="mx-auto xl:shadow-xl rounded-xl max-w-2xl bg-white p-2 flex flex-col gap-2 lg:p-10 transition-all">
      <div className=" flex items-center gap-2 p-2">
        <h1 className="text-3xl lg:text-4xl text-center font-bold uppercase text-green-600">
          Be A Part of us{" "}
        </h1>
        <BiSolidDonateHeart style={{ fill: "red" }} size={30} />
      </div>
      <p className="text-justify text-[15px] sm:text-[17px] text-slate-700">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, illum,
        assumenda cum libero autem unde aliquam explicabo suscipit vel nisi
        fugiat? A commodi perferendis dolorem inventore. Expedita quae pariatur
        magnam consectetur rerum enim quis eos cum necessitatibus aut esse, hic
        et provident cupiditate quia animi quod placeat, iusto incidunt. Impedit
        obcaecati iusto ab officia exercitationem dolorum sed fuga repellendus
        dolorem ex magnam repudiandae corrupti, autem quibusdam repellat atque
        minus beatae, amet ipsa cum quis! Corporis, molestiae. Nisi sequi
        excepturi eaque error natus, dolor unde illo iusto quae minima accusamus
        doloribus cumque itaque facere aut quia ipsa. Cupiditate fugit earum
        blanditiis.
      </p>
      <div className=" flex justify-center">
        <button
          style={{ background: `${donate ? "red" : "green"}` }}
          className=" py-3 text-xl w-1/2 sm:w-1/4 px-5 rounded-xl text-white font-semibold shadow-md transition-all duration-300 hover:scale-105 flex justify-center"
          onClick={() => setdonate(!donate)}
        >
          {donate ? "Cancel " : "Donate"}
        </button>
      </div>
      <div className="">{donate && <PayCard />}</div>
      </div>
  );
};

export default DonatePage;
