import React from 'react'
import ServiceCard from '../components/ServiceCard';

const Services = () => {
    const services = [
        {
          pic: "https://e0.pxfuel.com/wallpapers/251/661/desktop-wallpaper-size-nature-s-full-nature-for-your-mobile-tablet-explore-of-nature-beautiful-nature-nature-nature-1600x900.jpg",
          title: "service-1",
          description:
            "This navbar component is dark-themed, perfect for sleek and modern websites. It features a logo on the left with navigation links and a search input field on the right side. Users can easily search for content within the website directly from the navbar",
        },
        {
          pic: "https://e0.pxfuel.com/wallpapers/251/661/desktop-wallpaper-size-nature-s-full-nature-for-your-mobile-tablet-explore-of-nature-beautiful-nature-nature-nature-1600x900.jpg",
    
          title: "service-2",
          description:
            "This navbar component is dark-themed, perfect for sleek and modern websites. It features a logo on the left with navigation links and a search input field on the right side. Users can easily search for content within the website directly from the navbar",
        },
        {
          pic: "https://e0.pxfuel.com/wallpapers/251/661/desktop-wallpaper-size-nature-s-full-nature-for-your-mobile-tablet-explore-of-nature-beautiful-nature-nature-nature-1600x900.jpg",
    
          title: "service-3",
          description:
            "This navbar component is dark-themed, perfect for sleek and modern websites. It features a logo on the left with navigation links and a search input field on the right side. Users can easily search for content within the website directly from the navbar",
        },
        {
          pic: "https://e0.pxfuel.com/wallpapers/251/661/desktop-wallpaper-size-nature-s-full-nature-for-your-mobile-tablet-explore-of-nature-beautiful-nature-nature-nature-1600x900.jpg",
    
          title: "service-4",
          description:
            "This navbar component is dark-themed, perfect for sleek and modern websites. It features a logo on the left with navigation links and a search input field on the right side. Users can easily search for content within the website directly from the navbar",
        },
        {
          pic: "https://e0.pxfuel.com/wallpapers/251/661/desktop-wallpaper-size-nature-s-full-nature-for-your-mobile-tablet-explore-of-nature-beautiful-nature-nature-nature-1600x900.jpg",
    
          title: "service-5",
          description:
            "This navbar component is dark-themed, perfect for sleek and modern websites. It features a logo on the left with navigation links and a search input field on the right side. Users can easily search for content within the website directly from the navbar",
        },
      ];
      return (
        <div className="flex flex-wrap w-screen gap-4 justify-center md:p-10 ">
          {services.map((service, i) => (
            <ServiceCard service={service} key={i} />
          ))}
        </div>
      );
}

export default Services
