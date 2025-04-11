import React, { useState } from "react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io"; // Import close icon
import Navbar from "./Navbar"; // Import Navbar to display its nav-menu
import { FaFire } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";



function NavbarOne() {
    // const [isNavVisible, setIsNavVisible] = useState(false); 

    // const toggleNav = () => {
    //     setIsNavVisible(!isNavVisible);
    // };

    return (
        <>
            {/* Sticky Navbar */}
            <div className="sticky top-0 z-50 bg-white shadow-md">
                <div className="md:flex block gap-5 mt-5 p-2 rounded-lg">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-semibold md:ml-10">
                            Afri<span className="text-primary">Mart</span>
                        </h1>
                        <select
                            name=""
                            id=""
                            className="md:ml-10 hidden md:block p-2 bg-primary text-white rounded-lg"
                        >
                            <option value="">Location</option>
                            <option value="">Bamenda</option>
                        </select>
                        <div className="md:hidden">
                            <MdMenu className="text-4xl cursor-pointer"  />
                        </div>
                    </div>
              

                         {/* Menu section */}
                                        <div className="block md:ml-[200px]" id="nav-menu">
                                            <ul className="flex flex-col md:flex-row items-center gap-6 text-gray-600">
                                                <li>
                                                    <a
                                                        href=""
                                                        className="py-1 px-3 hover:text-secondary capitalize font-semibold flex gap-1"
                                                    >
                                                        <FaFire className="mt-[2px] text-secondary" /> Deals
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href=""
                                                        className="inline-block py-1 px-3 hover:text-secondary capitalize font-semibold"
                                                    >
                                                        Home
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href=""
                                                        className="py-1 px-3 hover:text-secondary capitalize font-semibold flex gap-1"
                                                    >
                                                        Shop <IoIosArrowDown className="pt-1" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href=""
                                                        className="py-1 px-3 hover:text-secondary capitalize font-semibold flex gap-1"
                                                    >
                                                        Product <IoIosArrowDown className="pt-1" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href=""
                                                        className="inline-block py-1 px-3 hover:text-secondary capitalize font-semibold"
                                                    >
                                                        About
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href=""
                                                        className="py-1 px-3 hover:text-secondary capitalize font-semibold flex gap-1"
                                                    >
                                                        Vendors <IoIosArrowDown className="pt-1" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href=""
                                                        className="py-1 px-3 hover:text-secondary capitalize font-semibold flex gap-1"
                                                    >
                                                        Pages <IoIosArrowDown className="pt-1" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                    
                                        <section className="flex md:ml-[200px]">
                                            <div className="flex">
                                                <p className="flex font-semibold"><CiHeart className="pt-1 "/> login or register</p>
                                                <p className="md:ml-5 font-semibold">Hot line: 683 538 004</p>
                                            </div>

                                             </section>

                 
                </div>
            </div>

      
        
        </>
    );
}

export default NavbarOne;