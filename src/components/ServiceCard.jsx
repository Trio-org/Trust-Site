import React from 'react'

const ServiceCard = ({service}) => {
  return (
    
<div class="max-w-[90%] sm:max-w-sm bg-white   rounded-lg shadow-xl  ">
    <a href="#">
        <img class="rounded-t-lg" src={service.pic} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black capitalize">{service.title}</h5>
        </a>
        <p class="mb-3 font-normal dark:text-gray-600">{service.description}</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 opacity-90 rounded-lg hover:opacity-100  focus:outline-none  shadow-md">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

  )
}

export default ServiceCard
