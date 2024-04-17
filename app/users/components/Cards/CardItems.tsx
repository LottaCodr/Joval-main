import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type CardItemsProps = {
  price?: string;
  image: string;
  itemName: string;
  buttonName: string
};

const CardItems = ({ price, image, itemName, buttonName }: CardItemsProps) => {

const getInfoFromScreen = () => {
  
  console.log()
};

  return (
    <div className=" py-5 hover:scale-110 transition duration-300 ease-in-out">
      <Card className="rounded-lg shadow-md overflow-hidden lg:w-[400px] md:w-[350px] sm:w-[300px] h-[450px]">
        <CardContent className="relative h-48 bg-gray-100 group-hover:bg-gray-200">
          <Image
            src={image}
            alt={itemName}
            layout="fill"
            className="object-cover object-top hover:scale-90 transition duration-300 ease-in-out"
          />
        </CardContent>
        <CardHeader className="  mt-10 py-2">
          <CardDescription>{itemName}</CardDescription>
          {price && <CardTitle className="mt-2 text-white">{price}</CardTitle>}
        </CardHeader>

        <CardFooter className=" mt-16 py-2  justify-center">
          <Button
            type="submit"
            className="w-full text-lg  hover:text-xl sm:text-base lg:text-lg sm:h-16 lg:h-18 py-2 px-8 m-0 font-bold bg-transparent border border-red-800 text-white rounded-md hover:bg-red-800 transition duration-300 ease-in-out"
          >
            {buttonName}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardItems;
