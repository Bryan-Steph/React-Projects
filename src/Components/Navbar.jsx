import React, { useState } from "react"
import { NavbarMenu } from "../mockData/data"
import { CiSearch } from "react-icons/ci"
import { FaDumbbell } from "react-icons/fa"
import { PiShoppingCartThin } from "react-icons/pi"
import ResponsiveMenu from "./ResponsiveMenu"
import { TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";
import { FaDropbox } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { GiWrappingStar } from "react-icons/gi";
import { FaFire } from "react-icons/fa6";


function Navbar(){
        // const [open, setOpen] = useState(false);

    return(<>
    <nav>
        <div className=" flex justify-evenly gap- py-6 ">
            {/* sidebar */}
            <TbLayoutSidebarLeftExpandFilled  className="ml-0 text-4xl text-primary "/>
            <button className="bg-secondary p-2 rounded-lg w-ful flex text-white">
                Browse all categories
                <IoIosArrowDown className="pt-1 text-2xl  "/>
            </button>
            {/* Menu section */}
            <div className="hidden md:block " id="nav-menu">
                <ul className="flex items-center gap-6 text-gray-600">
                   <li><a href="" className=" py-1 px-3 hover:text-secondary capitalize font-semibold flex gap-1"> <FaFire className="mt-[2px] text-secondary"/> Deals</a></li>
                   <li><a href="" className="inline-block py-1 px-3 hover:text-secondary capitalize font-semibold"> Home</a></li>
                   <li><a href="" className=" py-1 px-3 hover:text-secondary capitalize font-semibold flex gap-1 "> Shop < IoIosArrowDown className="pt-1"/></a></li>
                   <li><a href="" className=" py-1 px-3 hover:text-secondary capitalize font-semibold flex gap-1 "> Product < IoIosArrowDown className="pt-1"/></a></li>
                   <li><a href="" className="inline-block py-1 px-3 hover:text-secondary capitalize font-semibold"> About</a></li>
                   <li><a href="" className=" py-1 px-3 hover:text-secondary capitalize font-semibold flex gap-1 "> Vendors < IoIosArrowDown className="pt-1"/></a></li>
                   <li><a href="" className=" py-1 px-3 hover:text-secondary capitalize font-semibold flex gap-1 "> Pages < IoIosArrowDown className="pt-1"/></a></li>
                </ul>
            </div>
            {/* Icons section */}
            <div className="flex items-center gap-4 ">
           
            <button className=" text-secondary font-semibold
            hover:text-primary rounded-md  px-6 oy-2 transition-all
            duration-200 hidden md:flex md:gap-2 ">
                <GiWrappingStar/>
                Save 10% off your first purchase</button>
            </div>
          
            {/* Mobile hamburger Menu section */}
           
        </div>
    </nav>

    {/* Mobile sidebar section */}
    </>)
}

export default Navbar