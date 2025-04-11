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
                    <TbLayoutSidebarLeftExpandFilled className="ml-0 text-4xl text-primary" />
                    <button className="bg-secondary p-2 rounded-lg  flex text-white">
                        Browse all categories
                        <IoIosArrowDown className="pt-1 text-2xl" />
                    </button>

                          {/* SEARCH SECTION */}
                    <div className="flex items-center md:ml-[200px] border-2 border-primary rounded-lg w-full md:max-w-[600px]">
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

                    {/* Menu section */}
                    {/* <div className="block" id="nav-menu">
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
                    </div> */}
                </div>
            </nav>
        </>
    );
}

export default Navbar;    