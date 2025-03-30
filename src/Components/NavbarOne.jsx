import React, { useState } from "react"
import { CiHeart, CiSearch } from "react-icons/ci";
// import { CiHeart } from "react-icons/fa"
import { CiUser } from "react-icons/ci"
import { PiShoppingCartThin } from "react-icons/pi"
import { MdMenu } from "react-icons/md"


import { MdOutlineWifiTetheringErrorRounded } from "react-icons/md";

function NavbarOne(){


    return(
        <>
        <div className="md:flex block  gap-5 mt-5 bg-white shadow-md p-2 rounded-lg">       
            <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold md:ml-10">Afri<span className="text-primary
            ">Mart</span></h1>
            <select name="" id="" className="md:ml-10 hidden md:block p-2 bg-primary text-white rounded-lg"> 
                <option value="">Location</option>
                <option value="">Bamenda</option>
            </select>
            <div className="md:hidden">
            <MdMenu className=" text-4xl  "  />
            </div>
            </div>
         <div class="flex items-center md:ml-[200px] border-2 border-primary rounded-lg  w-full md:max-w-[600px]">

            <input type="text" placeholder="Search for items..." className="md:w-full w-full md:px-4 px-2 py-2 outline-none text-gray-700"/>

            <button class="px-4">
                    <CiSearch className="text-primary md:text-2xl"/>
            </button>
         </div>

         <section className="flex md:gap-3">
               <button className="flex md:ml-[200px]
             hover:bg-primary hover:text-white rounded-full
            p-2 duration-200">
            <MdOutlineWifiTetheringErrorRounded className="text-3xl"/>
            <p  className="pt-1">Compare</p>
            </button>
            <button className="flex  hover:bg-primary hover:text-white rounded-full
            p-2 duration-200">
                <CiHeart className="text-3xl" />
                <p className="pt-1">wishlist</p>
            </button>
            <button className="flex  hover:bg-primary hover:text-white rounded-full
            p-2 duration-200">
                    < PiShoppingCartThin className="text-3xl" />
                    <p className="pt-1">Cart</p>
            </button>
            <button className="flex  hover:bg-primary hover:text-white rounded-full
            p-2 duration-200">
                    <CiUser className="text-3xl" />
                    <p className="pt-1">Account</p>
            </button>
            </section>
         
           
        </div>
        </>
    )
}

export default NavbarOne