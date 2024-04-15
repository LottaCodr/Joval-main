import React from "react";
import WalletCard from "../../../components/Cards/WalletCard";
import Button from "../../../components/Button";

const FundWallet = () => {
  return (
    <div className="h-full w-full container">
      <WalletCard
        walletAmount={"0.00"}
        walletNumber={"0000-0000-0000-0000"}
        walletName={"Card Holder Name"}
        validThru={"09/78"}
        cvv="***"
      />

      <div className="p-20 m-10 px-80  container text-6xl h-[700px]">
        <Button type={"button"} title={"Fund Wallet"} variant={"bg-red-700"} />
      </div>
    </div>
  );
};

export default FundWallet;
