import React from 'react';
import { Logo } from '../assets';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div>
      <footer id="footer" className="bg-gray-900 shadow">
        <div className="w-full max-w-screen-xl mx-auto p-4">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img src={Logo} className="h-14 mt-5" alt="Flowbite Logo" />
              <span className="self-center text-sm font-semibold whitespace-nowrap text-white">Sathana Trust</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li className="w-full sm:w-auto">
                <a href="#" className="block sm:inline hover:underline me-4 md:me-6">About</a>
              </li>
              <li className="w-full sm:w-auto">
                <a href="#" className="block sm:inline hover:underline me-4 md:me-6">Privacy Policy</a>
              </li>
              <li className="w-full sm:w-auto">
                <a href="#" className="block sm:inline hover:underline me-4 md:me-6">Licensing</a>
              </li>
              <li className="w-full sm:w-auto">
                <a href="#" className="block sm:inline hover:underline">Contact</a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400"> &copy; {year} <a href="https://sathanatrust.org" className="hover:underline">Sathana Trust™</a>. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
