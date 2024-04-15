import React from "react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const TicketsCard = () => {


  return (
    <div className="bg-black rounded-xl mt-10">
      <div className="w-[650px] pl-10 pt-10  h-full">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-4xl font-bold">Order Confirmation</h1>
          <Image
            src="/whitedownload.png"
            width={70}
            height={70}
            alt="qrcode"
            className=" object-contain p-5 object-top "
          />
        </div>
      </div>

      <Separator />

      <p className="pl-10 pt-10 pr-10 text-lg">
        Lotanna! Thank you for your order in our online sports center.
      </p>

      <div className="flex flex-grow">
        <div className="p-10 text-xl text-center justify-center">
          <p className="text-gray-400">Order Number:</p>
          <p className="text-xl font-bold">980730977040</p>
        </div>
        <div className="p-10  text-xl text-center ">
          <p className="text-gray-400">Payment:</p>
          <p className="text-xl font-bold">Joval Wallet</p>
        </div>
        <div className="p-10 text-xl text-center ">
          <p className="text-gray-400">Schedule:</p>
          <p className="text-xl font-bold">24/03/2024 - 7pm</p>
        </div>
      </div>

      <Separator />

      <div>
      <div className="flex pl-10 pr-10 pb-10  pt-5 justify-between items-center">
        <div className="flex gap-10  text-lg items-center ">
        <Image
            src="/whitesoccer.png"
            width={70}
            height={70}
            alt="qrcode"
            className=" object-contain p-5 object-top "
          />
          <div>
            <p className="font-bold">Soccer Match Fix</p>
            <div className="flex gap-5">
              <p className="text-gray-400">Players: </p>{" "}
              <p className="font-bold">7</p>
            </div>
          </div>
        </div>

        <h1 className="font-bold text-xl">N19,000</h1>
      </div>

      {/* new game */}
      <div className="flex pl-10 pr-10 pb-10  justify-between items-center">
        <div className="flex gap-10  text-lg items-center ">
        <Image
            src="/whitesoccer.png"
            width={70}
            height={70}
            alt="qrcode"
            className=" object-contain p-5 object-top "
          />
          <div>
            <p className="font-bold">Soccer Match Fix</p>
            <div className="flex gap-5">
              <p className="text-gray-400">Players: </p>{" "}
              <p className="font-bold">2</p>
            </div>
          </div>
        </div>

        <h1 className="font-bold text-xl">N7,000</h1>
      </div>
      </div>

      <Separator />
      {/* QR CODE HERE */}

      <div className="flex justify-between items-center p-10">
        <div className=" relative bg-white overflow-hidden border-white text-black items-center justify-center rounded-xl w-[300px] h-[300px]">
          <Image
            src="/qrcode.png"
            layout="fill"
            alt="qrcode"
            className=" object-contain p-5 object-top "
          />
        </div>
        <div className="font-bold text-right text-2xl">
          <h1 className="text-gray-400">Total:</h1>
          <h1 className="font-bold text-3xl">N26,000.00</h1>
        </div>
      </div>
    </div>
  );
};

export default TicketsCard;
