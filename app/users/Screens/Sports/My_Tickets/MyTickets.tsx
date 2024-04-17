import React from "react";
import { Separator } from "@/components/ui/separator";
import TicketsCard from "@/app/users/components/Cards/TicketsCard";

const MyTickets = () => {
  return (
    <div className=" w-full items-center ">
      <Separator />
      <h2 className="text-3xl font-bold text-white mb-4 pl-4  h-[60px] p-4 rounded-t-lg">
        Processing Tickets
      </h2>
      <Separator />

      {/* The Tickets Ssction */}
      <div className="w-full grid grid-cols-2 justify-start items-center gap-5">
        <TicketsCard/>
        <TicketsCard/>
      </div>

      <Separator />
      <h2 className="text-4xl font-bold text-white mb-4 pl-4  h-[60px] p-4 rounded-t-lg">
        Processed Tickets
      </h2>
      <Separator />
        {/* The Tickets Processed Section */}
        <div className="w-full grid grid-cols-2 justify-start items-center gap-5">
        <TicketsCard/>
        <TicketsCard/>
      </div>
     
    </div>
  );
};

export default MyTickets;
