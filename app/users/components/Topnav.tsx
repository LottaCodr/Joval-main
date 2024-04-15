"use client";

import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";

const Topnav = () => {
  return (
    <div className="mb-10 sticky top-0 z-30 w-auto border-b  border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className=" pl-20 flex gap-10 items-center max-w-full lg:justify-between sm:justify-center lg:pr-10 sm:pr-2  mt-2 mb-0">
        <Link href="/users">
          <div className="flex relative ml-[-2] w-full  mr-10 justify-center items-center gap-3">
            <Image
              src="/favicon.png"
              alt="logo"
              width={180}
              height={31}
              className="object-contain object-top"
            />
           <div className="w-full">
           <Image
              src="/jkc2.png"
              width={180}
              height={70}
              alt="logo"
              className="  object-contain object-top "
            />
           </div>
          </div>
        </Link>

       
        <div className="flex gap-5 ml-20 items-center">
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
          <div className="flex sm:hidden hover:bg-red-800 p-10  text-center rounded-lg items-center  h-[75px]">
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
          <div className="flex hover:bg-red-800 p-10  rounded-lg items-center justify-center   h-[75px] sm:hidden">
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
