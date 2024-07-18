import React from "react";
import { FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAccountBalance } from "react-icons/md";
import { GiBank } from "react-icons/gi";
import { PiPiggyBank } from "react-icons/pi";

const PayCard = () => {
  return (
    <div className="flex flex-col items-center mt-2 ">
        <h2 className="text-lg font-semibold">Scan & Pay</h2>
      <img
        src="https://storage.googleapis.com/dara-c1b52.appspot.com/daras_ai/media/a3202e58-17ef-11ee-9a70-8e93953183bb/cleaned_qr.png"
        alt=""
        className="w-1/2 h-1/2 md:h-1/4 md:w-1/4"
      />
      <p>or</p>
      <ul className=" flex flex-col gap-2 p-2 mb-3">
            <li className="flex items-center gap-1"><FaUser style={{fill:'blue'}} /><div className=""><span className="font-semibold">Account Name </span> : holder name </div></li>
            <li className="flex items-center gap-1"> <PiPiggyBank style={{fill:'yellowgreen'}}/><div className=""><span className="font-semibold">Account No </span> : 1121023440990 </div></li>
            <li className="flex items-center gap-1"><MdOutlineAccountBalance style={{fill:'brown'}}/><div className=""><span className="font-semibold">IFSC code </span> : CNRBTSY1234</div></li>
            <li className="flex items-center gap-1"><GiBank style={{fill:'burlywood'}}/><div className=""><span className="font-semibold">Bank Name </span> : Canara Bank</div></li>
            <li className="flex items-center gap-1"><FaLocationDot style={{fill:'red'}} /> <div className=""><span className="font-semibold">Bank location </span> : Canara Bank</div></li>



      </ul>

    </div>
  );
};

export default PayCard;
