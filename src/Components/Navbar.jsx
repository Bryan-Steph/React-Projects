import React from "react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FaDumbbell } from "react-icons/fa";
import { PiShoppingCartThin } from "react-icons/pi";
import { TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { GiWrappingStar } from "react-icons/gi";
import { FaFire } from "react-icons/fa6";
import { MdOutlineWifiTetheringErrorRounded } from "react-icons/md";
import { CiUser } from "react-icons/ci";

import Carousel1 from '../assets/car1.jpg'
import Carousel2 from '../assets/car2.jpg'
import Carousel3 from '../assets/car3.jpg'
import Carousel4 from '../assets/car4.jpg'

function Navbar() {
    return (
        <>
            <nav>
                <div className="flex flex-col md:flex-row justify-evenly gap-4 py-6">
                    {/* Sidebar */}
                    <div className="flex gap-5">
                    <TbLayoutSidebarLeftExpandFilled className="ml-0 text-4xl text-primary" />
                    <button className="bg-secondary p-2 rounded-lg  flex text-white  w-1/2 md:w-auto">
                        Browse all categories
                        <IoIosArrowDown className="pt-1 text-2xl" />
                    </button>
                    </div>
                

                          {/* SEARCH SECTION */}
                    <div className="flex items-center md:ml-[200px] border-2 border-primary rounded-lg md:w-full w-[400px] ml-2 md:max-w-[600px]">
                        <input
                            type="text"
                            placeholder="Search for items..."
                            className="md:w-full w-full md:px-4 px-2 py-2 outline-none text-gray-700"
                        />
                        <button className="px-4">
                            <CiSearch className="text-primary md:text-2xl" />
                        </button>
                    </div>

                        <section className="flex md:gap-3">
                        <button
                            className="flex md:ml-[200px] hover:bg-primary hover:text-white rounded-full p-2 duration-200"
                        >
                            <MdOutlineWifiTetheringErrorRounded className="text-3xl" />
                            <p className="pt-1">Compare</p>
                        </button>
                        <button
                            className="flex hover:bg-primary hover:text-white rounded-full p-2 duration-200"
                        >
                            <CiHeart className="text-3xl" />
                            <p className="pt-1">Wishlist</p>
                        </button>
                        <button
                            className="flex hover:bg-primary hover:text-white rounded-full p-2 duration-200"
                        >
                            <PiShoppingCartThin className="text-3xl" />
                            <p className="pt-1">Cart</p>
                        </button>
                        <button
                            className="flex hover:bg-primary hover:text-white rounded-full p-2 duration-200"
                        >
                            <CiUser className="text-3xl" />
                            <p className="pt-1">Account</p>
                        </button>
                    </section>

               
                </div>

                <section className="w-full px- py-12 bg-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
    {/* Hero Section */}
    <div className="relative bg-gray-100 rounded-2xl p-6 flex flex-col justify-center items-start text-left h-[400px]">
      <h4 className="text-sm text-orange-600 uppercase font-semibold mb-2">
        Supercharged for Pros.
      </h4>
      <h2 className="text-4xl font-bold mb-4">Special Sale</h2>
      <p className="text-gray-700 mb-6">
        From $999.00 or $41.62/mo. for 24 mo. Footnote*
      </p>
      <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition">
        Buy Now
      </button>

      {/* Optional Image (Overlay) */}
      <img
        src={Carousel1}
        alt="Hero"
        className="absolute right-0 bottom-0 h-full object-cover rounded-r-2xl hidden lg:block"
      />
    </div>

    {/* Product Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Card 1 */}
      <div className="bg-sky-100 p-4 rounded-xl">
        <p className="text-red-500 text-sm font-semibold mb-2">Best Sale</p>
        <h3 className="text-xl font-bold mb-2">Laptops Max</h3>
        <p className="text-gray-700 mb-4">From $1699.00 or $64.62/mo.</p>
        <img src={Carousel2} alt="Laptop" className="w-full h-32 object-contain" />
      </div>

      {/* Card 2 */}
      <div className="bg-rose-100 p-4 rounded-xl">
        <p className="text-red-500 text-sm font-semibold mb-2">New Arrival</p>
        <h3 className="text-xl font-bold mb-2">Buy iPad Air</h3>
        <p className="text-gray-700 mb-4">From $599 or $49.91/mo. for 12 mo.</p>
        <img src={Carousel3} alt="iPad" className="w-full h-32 object-contain" />
      </div>

      {/* Card 3 */}
      <div className="bg-green-100 p-4 rounded-xl">
        <p className="text-green-600 text-sm font-semibold mb-2">15% OFF</p>
        <h3 className="text-xl font-bold mb-2">Smartwatch 7</h3>
        <p className="text-gray-700 mb-4">Shop the latest band styles and colors.</p>
        <img src={Carousel4} alt="Smartwatch" className="w-full h-32 object-contain" />
      </div>

      {/* Card 4 */}
      <div className="bg-purple-100 p-4 rounded-xl">
        <p className="text-purple-600 text-sm font-semibold mb-2">Free Engraving</p>
        <h3 className="text-xl font-bold mb-2">AirPods Max</h3>
        <p className="text-gray-700 mb-4">High-fidelity playback & ultra-low distortion</p>
        <img src={Carousel4} alt="AirPods" className="w-full h-32 object-contain" />
      </div>
    </div>
  </div>
</section>

            </nav>
        </>
    );
}

export default Navbar;    