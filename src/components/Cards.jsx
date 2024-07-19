import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAccountBalance } from "react-icons/md";
import { GiBank } from "react-icons/gi";
import { PiPiggyBank } from "react-icons/pi";


const Cards = () => {
    const [change, setChange] = useState(true)
    const [btn, setBtn] = useState(false)

    const handleClick = () => {
        setChange(!change);
        setBtn(true);
    }

  return (
    <div id='donate' className='p-5 w-screen'>
        <h1 className='font-bold text-2xl text-indigo-500 text-center mt-10'>Be a Member <span className='text-white'>!</span></h1>
        <div className="max-screen flex flex-col items-center justify-center mt-5 border rounded-lg shadowbg-gray-800 border-gray-700">
       {
        change ? (<div className='w-4/5 p-1 my-5 text-center sm:mx-1'>
             <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Empower Change, Transform Lives</h5>
            </a>
            <p className="mb-3 font-normal text-gray-400">Join us in making a lasting impact. Your generous donation will empower women, uplift children, and create sustainable communities. Together, we can build a brighter future for all. Donate today and be the change!</p>
        </div>) : (
            <div className="flex flex-col items-center mt-2 p-auto text-white">
                <h1 className='font-bold text-xl'>Bank details</h1>
          <ul className=" flex flex-col gap-2 p-2 mb-3">
                <li className="flex items-center gap-1"><FaUser style={{fill:'blue'}} /><div className=""><span className="font-semibold">Account Name </span> : holder name </div></li>
                <li className="flex items-center gap-1"> <PiPiggyBank style={{fill:'yellowgreen'}}/><div className=""><span className="font-semibold">Account No </span> : 1121023440990 </div></li>
                <li className="flex items-center gap-1"><MdOutlineAccountBalance style={{fill:'brown'}}/><div className=""><span className="font-semibold">IFSC code </span> : CNRBTSY1234</div></li>
                <li className="flex items-center gap-1"><GiBank style={{fill:'burlywood'}}/><div className=""><span className="font-semibold">Bank Name </span> : dummy Bank</div></li>
                <li className="flex items-center gap-1"><FaLocationDot style={{fill:'red'}} /> <div className=""><span className="font-semibold">Bank location </span> : dummy Bank</div></li>
          </ul>
    
        </div>
        )
       }
        {
            !btn && (
                <button onClick={handleClick} className="inline-flex mb-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Donate !
            </button>
            )
        }
    </div>
    </div>
    
  )
}

export default Cards