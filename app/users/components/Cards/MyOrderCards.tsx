import Image from "next/image";
import React from "react";

type MyOrdersCardProps = {
  image: string;
  itemName: string;
  itemCount: number;
  orderNumber: number;
  status: "Delivered" | "Pending" | "Cancelled";
  orderDate?: string;
};

const MyOrdersCard = ({
  image,
  itemName,
  itemCount,
  orderNumber,
  status,
  orderDate,
}: MyOrdersCardProps) => {
  return (
    <section className=" overflow-hidden flex max-w-screen h-[300px] flex-col pr-4 sm:flex-row  bg-gray-900  items-start justify-center rounded-sm shadow-md ">
      <div className=" relative bg-red-500 sm:w-[400px] h-full  ">
        <Image
          src={image}
          alt={itemName}
          layout="fill"
          className=" object-cover object-top "
        />
      </div>
      <div className=" items-start justify-between w-full flex">
      <div className="flex flex-col justify-between py-4 sm:ml-4 mt-4 sm:mt-0">
        <div className="mb-4">
          <h1 className="text-3xl font-semibold">{itemName}</h1>
          <p className="text-gray-400">Order Number: {orderNumber}</p>
          <p className="text-gray-400">Item Count: {itemCount}</p>
        </div>
        <div className=" items-center justify-center flex mt-14  bg-green-500 w-[100px] h-[40px] px-4 rounded-md ">
          <p className="text-white text-center ">{status}</p>
        </div>
        <p className="text-white">Date of Purchase: 1/10/2024</p>
      </div>
      <button className=" ml-40 sm:mt-6 px-4 py-2 text-red-500 rounded-md shadow-md hover:bg-red-600 hover:text-white focus:outline-none ">
        See Details
      </button>
      </div>
    </section>
  );
};

export default MyOrdersCard;
