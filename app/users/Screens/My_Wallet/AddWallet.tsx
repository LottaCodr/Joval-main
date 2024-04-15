"use client";

import React, { useState } from "react";
import WalletCard from "../../components/Cards/WalletCard";
import Button from "../../components/Button";


const AddWallet = () => {
  const [cardNameValue, setCardNameValue] = useState("Card Holder Name");

  const [cardNumberValue, setCardNumberValue] = useState("0000-0000-0000-0000");
  const [validThru, setValidThru] = useState("Valid Thru");
  const [cVV, setCVV] = useState("000");




  let onChangeCardName = (event: { target: { value: any } }) => {
    const newValue = event.target.value;
    setCardNameValue(newValue);
  };

  let onChangeCardNumber = (event: { target: { value: any } }) => {
    const newValue = event.target.value;
    setCardNumberValue(newValue);
  };
  let onChangeValidThru = (event: { target: { value: any } }) => {
    const newValue = event.target.value;
    setValidThru(newValue);
  };
  let onChangeCVV = (event: { target: { value: any } }) => {
    const newValue = event.target.value;
    setCVV(newValue);
  };

  return (
    <div className=" h-full w-full container">
      <WalletCard
        walletAmount={"0.00"}
        walletNumber={cardNumberValue}
        validThru={validThru}
        walletName={cardNameValue}
        cvv = {cVV}
      />
      {/* The Textfield here */}
      <div className="grid mt-10 grid-cols-2 gap-10 px-20">
        <div className="  w-full ">
          <input
            onChange={onChangeCardName}
            placeholder="Card Holder Name "
            name="holder"
            type="text"
            className="w-full h-[80px] font-bold placeholder:font-normal bg-white text-xl text-black placeholder:text-gray-500 p-6 rounded-xl"
          />
        </div>
        <div className="  w-full ">
          <input
          onChange={onChangeCardNumber}
            placeholder="Card Number Here"
            name="holder"
            type="number"
            className="w-full h-[80px] text-black font-bold placeholder:font-normal text-xl placeholder:text-gray-500 bg-white p-6 rounded-xl"
          />
        </div>
        <div className="  w-full ">
          <input
          onChange={onChangeValidThru}
            placeholder="Valid Thru"
            name="holder"
            type="number"
            className="w-full h-[80px] text-xl text-black font-bold placeholder:font-normal placeholder:text-gray-500 p-6 bg-white  rounded-xl"
          />
        </div>
        <div className="  w-full ">
          <input
          onChange={onChangeCVV}
            placeholder="CVV"
            name="holder"
            type="number"
            className="w-full h-[80px] p-6 text-xl  font-bold placeholder:font-normal text-black placeholder:text-gray-500 bg-white rounded-xl"
          />
        </div>
        <div className="p-20 ml-20 mr-10 px-80  text-6xl w-[1000px] h-[700px]">
        <Button type={"button"} title={"Save"} variant={"bg-red-700 text-white"} />
      </div>
      </div>
    </div>
  );
};

export default AddWallet;
