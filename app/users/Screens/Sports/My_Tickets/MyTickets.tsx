import React from "react";
import { Separator } from "@/components/ui/separator";
import TicketsCard from "@/app/users/components/Cards/TicketsCard";

const MyTickets = () => {
  return (
    <div className=" ml-16 justify-center items-center ">
      <Separator />
      <h2 className="text-4xl font-bold text-white mb-4 pl-4  h-[60px] p-4 rounded-t-lg">
        Processing Tickets
      </h2>
      <Separator />

      {/* The Tickets Ssction */}
      <div className="grid grid-cols-2 justify-items-center items-center gap-16">
        <TicketsCard/>
        <TicketsCard/>
      </div>

      <Separator />
      <h2 className="text-4xl font-bold text-white mb-4 pl-4  h-[60px] p-4 rounded-t-lg">
        Processed Tickets
      </h2>
      <Separator />
        {/* The Tickets Ssction */}
        <div className="grid grid-cols-2 justify-items-center items-center gap-16">
        <TicketsCard/>
        <TicketsCard/>
      </div>
     
    </div>
  );
};

export default MyTickets;
