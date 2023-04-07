import React from "react";

const Card = ({
  cardNumber,
  cardName,
  expDateMonth,
  expDateYear,
  cvcNumber,
}) => {
  return (
    <div className="h-full flex justify-end items-center z-0">
      <p className="fixed top-[8.3rem] left-[18rem] text-White tracking-widest text-[12px] z-10 lg:top-[28.3rem] lg:left-[31.5rem]">
        {cvcNumber}
      </p>
      <img
        src="/bg-card-back.png"
        alt="Back Credit card"
        className="w-[290px] h-[158px] fixed top-16 left-[4.3rem] drop-shadow-2xl lg:top-96 lg:left-[18rem]"
      />

      <div className="text-White flex-col tracking-widest fixed left-10 top-[11rem] z-10 lg:top-[14rem] lg:left-[15.7rem]">
        <img src="/card-logo.svg" alt="MasterCard" className="w-14 mb-5" />
        <p>
          {cardNumber
            .replace(/\s/g, "")
            .replace(/(\d{4})/g, "$1 ")
            .trim()}
        </p>
        <span className="flex text-[12px] uppercase justify-between mt-5">
          <p>{cardName}</p>
          <p>
            {expDateMonth}/{expDateYear}
          </p>
        </span>
      </div>
      <img
        src="/bg-card-front.png"
        alt="Front Credit card"
        className="w-[290px] h-[158px] absolute left-4 top-[9.5rem] drop-shadow-2xl lg:top-[12.5rem] lg:left-[14rem]"
      />
    </div>
  );
};

export default Card;
