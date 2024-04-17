'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";

import Button from "../../../components/Button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";


const Cart = () => {
const [count, setCount] = useState(0);

const increment = () => {
  setCount(count + 1)
}

const decrement = () => {
  if(count == 0) {
    setCount(0);
  } else {
    setCount(count - 1);
  }
}

const handleRemove = () => {
  if (count == 0) {
    //remove item from stack
  } else {
    //do something
  }
}


  return (
    <section className="flex  justify-start items-start">
      <div className="">
      <Separator className="" />
        <div className=" p-5 ">
          <h1 className="text-3xl">Cart (3)</h1>
        </div>
        <Separator className="" />

        <div className="bg-black rounded-xl mt-5 md:w-[400px] lg:w-[1100px] overflow-hidden">
          <div className="flex ">
            <div className="w-[400px] h-[300px] bg-red-800"> </div>
            <div className="w-full justify-between flex">
              <div>
                <h1 className="text-4xl p-5">Name of the product</h1>
                <p className="pl-5 text-2xl">
                  <span className="text-2xl text-slate-400">Description:</span> The item
                  here has the ability
                </p>
              </div>
              <h1 className="text-3xl font-bold pr-12 pt-5 ">N7,000</h1>
            </div>
          </div>

          {/* next section */}

          <div className="flex p-10 justify-between items-center">
            <div className="flex items-start justify-center ">
            <Image
              src="/trash.png"
              width={30}
              height={30}
              alt="logo"
              className=" object-contain object-top "
            />
              <button className="text-white font-bold text-lg" onClick={handleRemove}>REMOVE</button></div>
            <div className="flex items-center ">
              <div className="pr-5 w-[90px] ">
                <Button
                  type={"button"}
                  title={"+"}
                  variant={"bg-red-800"}
                  full={true}
                  onClick={increment}
                  
                />
              </div>
              <p className="text-4xl">{count}</p>
              <div className="px-5 ">
                <Button
                  type={"button"}
                  title={"-"}
                  variant={"bg-red-800"}
                  full
                  onClick={decrement}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NEW CARDS HERE */}
      <div className="mx-4 ">
        <div className=" bg-black  w-[400px] h-[350px] rounded-lg justify-start items-start">
          {" "}
          <h1 className="text-3xl mb-0 p-5 ">CART SUMMARY</h1>
          <Separator className="bg-slate-600 mb-10" />
          <div className="flex space-x-10 font-bold text-3xl justify-start items-start px-5 mb-5">
            <p>Subtotal:</p>
            <p>N28,000</p>
          </div>
          <p className="mt-2 mb-3 text-slate-400 p-5">
            Delivery charges not included
          </p>
          <div className="p-5">
            <Link href='users/Screens/Payment'>
            <Button
              type={"button"}
              title={"CHECKOUT (N28,000)"}
              variant={"bg-red-800"}
            />
            </Link>
          </div>
        </div>
        <div className="bg-black mt-3 p-5 rounded-lg">
          <h2 className="text-2xl font-bold">Return are Easy!</h2>
          <p className="text-slate-400">
            Free return policy within 7 days for ALL eligible items.
          </p>
          <p className="text-blue-500 cursor-pointer">Details</p>
        </div>
      </div>
    </section>
  );
};

export default Cart;
