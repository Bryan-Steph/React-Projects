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
            </nav>
        </>
    );
}

export default Navbar;    