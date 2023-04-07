import React from "react";
import CardSection from "./Components/CardSection";
import FormSection from "./Components/Form";
import { useState } from "react";

const App = () => {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cardName, setCardName] = useState("Jane Appleseed");
  const [expDateMonth, setExpDateMonth] = useState("01");
  const [expDateYear, setExpDateYear] = useState("23");
  const [cvcNumber, setCvcNumber] = useState("000");
  expDateMonth, expDateYear;
  return (
    <div className="h-screen w-screen grid grid-cols-[1fr] grid-rows-[1.5fr_3fr] text-default lg:grid-cols-[30%_70%] lg:grid-rows-[1fr]">
      <CardSection
        cardNumber={cardNumber}
        cardName={cardName}
        expDateMonth={expDateMonth}
        expDateYear={expDateYear}
        cvcNumber={cvcNumber}
      />
      <FormSection
        setCardNumber={setCardNumber}
        cardNumber={cardNumber}
        setCardName={setCardName}
        cardName={cardName}
        setExpDateMonth={setExpDateMonth}
        expDateMonth={expDateMonth}
        setExpDateYear={setExpDateYear}
        expDateYear={expDateYear}
        setCvcNumber={setCvcNumber}
      />
    </div>
  );
};

export default App;
