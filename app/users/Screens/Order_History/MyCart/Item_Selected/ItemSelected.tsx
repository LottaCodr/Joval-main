import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";
import Button from "../../../../components/Button";

const ItemSelected = () => {
  return (
    <div className="flex sm:flex-row items-start px-5  ">
      <div className="space-x-10 ml-5 lg:w-[1000px] pl-5 bg-black p-5 rounded">
        <div className="flex w-full px-2 mb-5">
          <div className=" relative md:w-[800px] sm:w-[300px] lg:w-[900px] h-full  bg-red-500 ">
            {/* image here */}
            <Image
              src="/food.png"
              alt="selectdItem"
              layout="fill"
              className="  object-cover object-top"
            />
          </div>
          <div className="ml-50 text-center md:text-left space-y-10 w-full justify-start h-full ">
            <h2 className="font-semibold text-3xl text-white truncate pr-20 mb-10">
              Name of the food here!
            </h2>
            <h4 className="text-5xl mb-10">N7,000</h4>
            <Separator />
            <h4 className="text-4xl mb-20 ">7 ITEMS AVAILABLE</h4>
            <div className="border border-red-500 w-[150px] rounded p-6 justify-center items-center text-center mt-10 ">
              {" "}
              10 mins left
            </div>
            <div className="flex  pr-10 mr-20 gap-3 xl:flex-row  items-center justify-start mt-14">
              <div className="pr-5"><Button type={"button"} title={"+"} variant={"bg-red-800"} full /></div>
             <p className="text-4xl">3</p>
              <div className="px-5"><Button type={"button"} title={"-"} variant={"bg-red-800"} full /></div>
              <div className=""><Button
                type={"button"}
                title={"ADD TO CART"}
                variant={"bg-red-800"}
              /></div>
            </div>
          </div>
        </div>
        <Separator className="mb-10" />
        <div className="">
          <h1 className="text-3xl font-bold mt-4">Description:</h1>
          <p className="mt-4 text-lg overflow-hidden pr-12">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      {/* NEW CARDS HERE */}
      <div className="mx-4 ">
        <div className=" bg-black  w-[400px] h-[350px] rounded-lg justify-start items-start">
          {" "}
          <h1 className="text-3xl mb-0 p-5 ">DELIVERY DETAILS</h1>
          <Separator className="bg-slate-600 mb-10" />
          <div className="flex space-x-10 font-bold text-3xl justify-start items-start px-5 mb-5">
            <p>Subtotal:</p>
            <p>N28,000</p>
          </div>
          <p className="mt-2 mb-3 text-slate-400 p-5">Delivery charges not included</p>
          <div className="p-5"><Button
            type={"button"}
            title={"CHECKOUT (N28,000)"}
            variant={"bg-red-800"}
          /></div>
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

export default ItemSelected;
// max-w-full px-6 lg:px-20 3xl:px-0 flex flex-col gap-20 py-10 pb-32 md-gap-28 lg:py-20 xl:flex-row
// {
//   /* <Image
//             src="/food.png"
//             alt='selectdItem'
//             layout="fill"
//             className=" object-cover object-top"
//           /> */
// }


// lg:w-[700px] lg:h-[400px] md:w-[700px] sm:w-[200px]