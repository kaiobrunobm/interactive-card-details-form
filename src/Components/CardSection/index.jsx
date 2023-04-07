import React from "react";
import Card from "./Card";

const CardSection = ({
  cardNumber,
  cardName,
  expDateMonth,
  expDateYear,
  cvcNumber,
}) => {
  return (
    <div className="w-screen bg-darkVioletGradient bg-cover lg:h-screen lg:w-full lg:bg-darkVioletGradientlg">
      <Card
        cardNumber={cardNumber}
        cardName={cardName}
        expDateMonth={expDateMonth}
        expDateYear={expDateYear}
        cvcNumber={cvcNumber}
      />
    </div>
  );
};

export default CardSection;
