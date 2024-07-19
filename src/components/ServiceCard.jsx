import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-[90%] sm:max-w-sm bg-white mt-4 break-words m-auto rounded-lg shadow-xl">
      <a href="#">
        <img className="rounded-t-lg h-60 w-full" src={service.pic} alt={service.title} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black capitalize">{service.title}</h5>
        </a>
        <p className="mb-3 font-normal dark:text-gray-600">
          {isExpanded ? service.description : service.description.length > 200 ? `${service.description.slice(0, 250)} ...` : service.description}
        </p>
        <button 
          className="inline-flex gap-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 opacity-90 rounded-lg hover:opacity-100 focus:outline-none shadow-md"
          onClick={toggleExpand}
        >
          {isExpanded ? 'Show less' : 'Read more'} <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
