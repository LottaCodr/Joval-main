"use client";

import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";
import { useStateContext } from "@/app/contexts/ContextProvider";

const Topnav = () => {
  
  return (
    <div className=" fixed   top-0 z-30 w-full border-b  border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className=" p-2 flex md:mx-6 relative  gap-10 items-center max-w-full justify-bewteen sm:justify-center ">
        

       
        <div className="flex gap-5 ml-20 ">
          <div className="hover:border-white rounded-lg justify-center items-center  lg:w-[700px]  sm:w-[300px] h-[70px] ">
            <input
              className="hover:border-white rounded-sm text-2xl p-5 w-full h-full "
              type="text"
              placeholder="Search for your varieties here"
            />
          </div>

          <div className="flexCenter  ">
            <Button type="button" title="SEARCH" variant="bg-red-800"  />
          </div>
        </div>

        <div className="flex items-center justify-between  p-10 ">
          <Link href="/users/Screens/My_Account/">
          <div className="flex  hover:bg-red-800 p-10  text-center rounded-lg items-center  h-[75px]">
            <Image
              src="/user.png"
              width={32}
              height={32}
              alt="user"
              className=" object-contain object-top  md:w-[28px] md-h-[28px]"
            />
            <h3 className="text-white pl-2 text-lg  md:text-sm  text-center">Lotanna</h3>
          </div>
          </Link>


         <Link
         href='/users/Screens/Order_History/MyCart'>
          <div className="flex hover:bg-red-800 p-10  rounded-lg items-center justify-center   h-[75px] ">
            <Image
              src="/cart.png"
              width={32}
              height={32}
              alt="cart"
              className=" object-contain object-top sm:w-[20px] sm-h-[20px] md:w-[28px] md-h-[28px] "
            />
            <h3 className="text-white text-center text-lg md:text-sm pl-2">My Cart</h3>
          </div>
         
         </Link>
        </div>

        
      </nav>
    </div>
  );
};

export default Topnav;
