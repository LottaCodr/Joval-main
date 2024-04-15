import Image from "next/image";
import React from "react";

type WalletCardProps = {
  walletAmount: string;
  walletNumber: string;
  walletName: string;
  validThru: string;
  cvv: string;
};

const WalletCard = ({
  walletAmount,
  walletNumber,
  validThru,
  walletName,
  cvv
}: WalletCardProps) => {
  return (
    <div className="bg-red-700 rounded-lg w-[800px] mx-80 pb-16 pt-10 px-16 h-[400px] ">
      <div className="flex  justify-between items-center mb-16">
        {" "}
        <Image src="/walletlogo.png" alt="wallet logo" width={250} height={200} />
        <Image src="/visa.png" alt="wallet logo" width={50} height={50} />
      </div>

      {/* the amount Here */}
      <h3 className="text-7xl font-semibold mb-16 ">N{walletAmount}</h3>
      <h3 className="text-3xl">{walletNumber}</h3>

      <div className="flex  justify-between">
        <h3 className="text-2xl">{walletName}</h3>
        <div className=" text-center">
          <p>{validThru}</p>
          <p>{cvv}</p>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
