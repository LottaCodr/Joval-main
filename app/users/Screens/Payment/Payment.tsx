import { Separator } from "@/components/ui/separator";
import React from "react";
import Button from "../../components/Button";

const Payment = () => {
  return (
    <div className="flex">
    <div>
      <div className="mx-20 py-5 w-[1000px] rounded-lg bg-black ">
        <strong className="px-10 text-3xl">1. CUSTOMER ADDRESS</strong>
        <Separator className="mt-3 mb-5 bg-slate-600" />
        <div className="px-10 text-2xl">
          <p className=""> Lottanna Chukka</p>
          <p className="">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
        </div>
      </div>

      {/* //DELIVERY DETAILS */}

      <div className="mx-20 my-5 py-5 w-[1000px] rounded-lg bg-black ">
        <strong className="px-10 text-3xl">2. DELIVERY DETAILS</strong>
        <Separator className="mt-3 mb-5 bg-slate-600" />
        <div className="px-10 text-2xl">
          <p className=""> Door Details</p>
          <p className="">
            {" "}
            Estimated Date of Arrival: <b>Tuesday 24th, 2024</b>{" "}
          </p>
        </div>
      </div>

      {/* PAYMENT METHOD */}
      <div className="mx-20 py-5 w-[1000px] rounded-lg bg-black ">
        <strong className="px-10 text-3xl">3. PAYMENT METHOD</strong>
        <Separator className="mt-3 mb-5 bg-slate-600 " />
        <div className="px-10 text-2xl">
          <p className=""> Card Payment</p>
          <p className=""> Pay with Card, Bank Trasnfer or USSD</p>
          <small>
          You will be redirected to our Joval secure page for checkout.
        </small>
        </div>
        
        <Separator className="mt-10 mb-5 bg-slate-600" />
        <div className="px-10 text-2xl">
          <p className=""> Wallet Payment</p>
          <p className=""> Pay with your Joval Wallet</p>
          <small>
            You will be redirected to our Joval secure page for checkout.
          </small>
        </div>
      </div>
    </div>


 {/* NEW CARDS HERE */}
 <div className="mx-2 ">
        <div className=" bg-black  w-[450px] h-[580px] rounded-lg justify-start items-start">
          {" "}
          <h1 className="text-3xl mb-0 p-5 ">Order Summary</h1>
          <Separator className="bg-slate-600 mb-10" />
          <div className="flex space-x-10 font-bold text-3xl justify-between items-start px-5 mb-5">
            <p>Item's Total (4):</p>
            <p>N28,000</p>
          </div>
          <div className="flex space-x-10 font-bold text-3xl justify-between items-start px-5 mb-5">
            <p>Delivery Fee:</p>
            <p>N8,000</p>
          </div>
          <Separator className="  bg-slate-600 mb-10 mt-10" />
          <div className="flex space-x-10 font-bold text-3xl justify-between  px-5 mb-5">
            <p>Total:</p>
            <p>N26,000</p>
          </div>
          
          <div className="p-5 mt-10"><Button
            type={"button"}
            title={"CONFIRM ORDER"}
            variant={"bg-red-800"}
          /></div>
          <p className="mt-2 mb-3 text-center text-slate-400 p-5">(Complete the steps before proceeding)</p>
        </div>
        <div className="bg-black mt-3 p-5 rounded-lg">
          <h2 className="text-2xl font-bold">Return are Easy!</h2>
          <p className="text-slate-400">Free return policy within 7 days for ALL eligible items.</p>
          <p className="text-blue-500 cursor-pointer">Details</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
