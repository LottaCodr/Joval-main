import React from "react";
import { Separator } from "@/components/ui/separator";

const AccountOverview = () => {
  return (
    <div className=" justify-center items-center ">
      <Separator />

      <h2 className="text-4xl font-bold text-white mb-4 pl-4  h-[60px] p-4 rounded-t-lg">
        Account Overview
      </h2>
      <Separator />

      <div className=" grid grid-cols-2 sm:gap-5 sm:flex-row mt-10 ">

        <div className="bg-black mb-2 sm:mb-10 rounded-xl md:w-[700px] md:text-center sm:text-center lg:text-left lg:h-[300px] w-[400px] h-[200px]">
          <h1 className="p-5 lg:text-3xl font-bold pl-10">Account Details:</h1>
          <Separator className="bg-slate-600 mb-10" />{" "}
          <div className="px-5 font-bold pl-10 lg:text-3xl">
            <h2>
              <span className="text-slate-600 mb-10">Name:</span> Lotanna Chuka
            </h2>
            <h2>
              <span className="text-slate-600 mb-10">Email:</span>{" "}
              Lotanna47@gmail.com
            </h2>
          </div>
        </div>

{/* Address Details */}

<div className="bg-black mb-10 sm:mb-10 rounded-xl md:w-[700px] md:text-center sm:text-center lg:text-left lg:h-[300px] w-[400px] h-[200px]">
          <h1 className="p-5 lg:text-3xl font-bold pl-10">Address Details:</h1>
          <Separator className="bg-slate-600 mb-10" />{" "}
          <div className="px-5 font-bold lg:text-3xl pl-10">
            
              <p className="text-slate-600 text-2xl">Default Address:</p> 
            
            <h2 className="font-normal">
                            Lotanna47@gmail.com
            </h2>
          </div>
        </div>

        {/* Wallet Section */}
        <div className="bg-black mb-10 sm:mb-10 rounded-xl md:w-[700px] md:text-center sm:text-center lg:text-left lg:h-[300px] w-[400px] h-[200px]">
          <h1 className="p-5 lg:text-3xl font-bold pl-10">Wallet Balance:</h1>
          <Separator className="bg-slate-600 mb-10" />{" "}
          <div className="px-5 font-bold lg:text-3xl">
            
              <p className="text-green-600  pl-10 text-4xl">N0.00</p> 
            
            
          </div>
        </div>


        
      </div>
    </div>
  );
};

export default AccountOverview;
