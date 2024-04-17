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
  buttonName: string;
};

const CardItems = ({ price, image, itemName, buttonName }: CardItemsProps) => {
  const getInfoFromScreen = () => {
    console.log();
  };

  return (
    
      <Card className="mt-10 hover:scale-110 transition duration-300 ease-in-out rounded-lg shadow-md overflow-hidden lg:w-[300px] md:w-[250px] sm:w-[200px] h-auto">
        <CardContent className="relative h-64 bg-gray-100 ">
          <Image
            src={image}
            alt={itemName}
            layout="fill"
            className="object-cover object-top hover:scale-90 transition duration-300 ease-in-out"
          />
        </CardContent>
        <CardHeader className="  mt-2 py-2">
          <CardDescription>{itemName}</CardDescription>
          {price && <CardTitle className="mt-2 text-white">{price}</CardTitle>}
        </CardHeader>

        <CardFooter className=" mt-5 py-2  justify-center">
          <Button
            type="submit"
            className="w-full text-lg  hover:text-xl sm:text-base lg:text-lg sm:h-16 lg:h-18 py-2 px-8 m-0 font-bold bg-transparent border border-red-800 text-white rounded-md hover:bg-red-800 transition duration-300 ease-in-out"
          >
            {buttonName}
          </Button>
        </CardFooter>
      </Card>
    
  );
};

export default CardItems;
