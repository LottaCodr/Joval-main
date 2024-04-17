import { ORDERS } from "@/config/items";
import React from "react";
import MyOrdersCard from "../../components/Cards/MyOrderCards";
import { Separator } from "@/components/ui/separator";



const MyOrders = () => {
  return (
    <div className="  w-[1250px] justify-start items-start">
      <Separator />
      <div className=" text-4xl font-bold text-white mb-4 pl-4  h-[60px] p-4 rounded-t-lg">
        My Orders
      </div>
      <Separator />
      <div className="gap-4 justify-evenly flex flex-col  max-w-auto p-5">
        {ORDERS.map((orders) => (
          <MyOrdersCard
          key={orders.image}
            image={orders.image}
            itemName={orders.itemName}
            itemCount={orders.itemCount}
            orderNumber={orders.orderNumber}
            status={"Delivered"}
          />
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
