import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io"; // Close icon
import { FaFire } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

function NavbarOne() {
    const [isMenuVisible, setIsMenuVisible] = useState(false); // State to toggle menu visibility

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible); // Toggle the menu visibility
    };

    return (
        <>
            {/* Sticky Navbar */}
            <div className="sticky top-0 z-50 bg-white shadow-md">
                <div className="md:flex block gap-6 mt-5 p-2 rounded-lg">
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
                            <MdMenu
                                className="text-4xl cursor-pointer"
                                onClick={toggleMenu}
                            />
                        </div>
                    </div>

                    {/* Menu Section */}
                    <div
                        className={`${
                            isMenuVisible ? "block" : "hidden"
                        } md:block fixed md:static top-0 left-0 w-full h-full bg-white z-40 md:bg-transparent`}
                        id="nav-menu"
                    >
                        <div className="flex flex-col md:flex-row items-center md:ml-[150px] text-gray-600 p-5 md:p-0">
                            {/* Close Button for Mobile */}
                            <div className="md:hidden flex justify-between  w-full">
                            <h1 className="text-3xl font-semibold md:ml-10 text-black">
                            Afri<span className="text-primary">Mart</span>
                              </h1>
                                <IoMdClose
                                    className="text-3xl cursor-pointer mb-4 flex justify-end "
                                    onClick={toggleMenu}
                                />
                                
                            </div>
                            <ul className="flex flex-col md:flex-row items-center gap-6">
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
                    </div>

                    <section className=" md:mr-[10px]">
                        <div className="flex">
                            <p className="flex font-semibold px-5">
                                <CiHeart className="pt-1" /> login or register
                            </p>
                            <p className=" font-semibold">Hot line: 683 538 004</p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default NavbarOne;