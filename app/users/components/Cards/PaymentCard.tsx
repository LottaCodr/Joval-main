import React from "react";
import { Separator } from "@/components/ui/separator";

type PaymentCardProps = {
  title: string;
  subtitle: string;
  description: string;
};
const PaymentCard = ({ title, subtitle, description }: PaymentCardProps) => {
  return (
    <div className="mx-20 py-5 w-[1000px] rounded-lg bg-slate-700">
      <strong className="px-10 text-3xl">{title}</strong>
      <Separator className="mt-3 mb-5 bg-white bg-opacity-40" />
      <div className="px-10 text-2xl">
        <p className=""> {subtitle}</p>
        <p className=""> {description} </p>
      </div>
    </div>
  );
};

export default PaymentCard;
