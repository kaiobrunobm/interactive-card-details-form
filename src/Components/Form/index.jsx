import React from "react";
import InputMask from "react-input-mask";
import { BsDot, BsMask } from "react-icons/bs";

const FormSection = ({
  setCardName,
  setCardNumber,
  setExpDateMonth,
  setExpDateYear,
  setCvcNumber,
}) => {
  return (
    <div className="bg-White flex justify-center items-center text-default mt-24 lg:mt-0">
      <form className=" w-80 ">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="cardName"
            className="text-darkViolet text-[16px] text-start tracking-widest uppercase font-[500]"
          >
            Cardholder Name
          </label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            placeholder="e.g. Jane Appleseed"
            required={true}
            onChange={(event) => setCardName(event.currentTarget.value)}
            className="border-[1px] border-lightGrayish rounded-lg p-2 mb-5 focus:outline-none focus:border-secondGradient"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="cardNumber"
            className="text-darkViolet text-[16px] tracking-widest uppercase font-[500]"
          >
            Card number
          </label>
          <InputMask
            mask="9999 9999 9999 9999"
            maskChar=""
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="e.g. 1234 5678 9123 0000"
            required={true}
            onChange={(event) => setCardNumber(event.currentTarget.value)}
            className="border-[1px] border-lightGrayish rounded-lg p-2 mb-5 focus:outline-none focus:border-secondGradient"
          />
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="expDateMonth"
              className="text-darkViolet text-[16px] tracking-widest uppercase font-[500]"
            >
              Exp.date (mm/yy)
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                id="expDateMonth"
                name="expDateMonth"
                placeholder="MM"
                maxLength="2"
                required={true}
                onChange={(event) => setExpDateMonth(event.currentTarget.value)}
                className="w-[5rem] border-[1px] text-center border-lightGrayish rounded-lg p-2 mb-5 focus:outline-none focus:border-secondGradient"
              />

              <input
                type="text"
                id="expDate"
                name="expDateYear"
                placeholder="YY"
                maxLength="2"
                required={true}
                onChange={(event) => setExpDateYear(event.currentTarget.value)}
                className="w-[5rem] border-[1px] text-center border-lightGrayish rounded-lg p-2 mb-5 focus:outline-none focus:border-secondGradient"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="cvc"
              className=" text-darkViolet text-[16px] tracking-widest uppercase font-[500]"
            >
              cvc
            </label>
            <input
              type="text"
              id="cvc"
              name="cvc"
              placeholder="e.g. 123"
              maxLength="3"
              required={true}
              onChange={(event) => setCvcNumber(event.currentTarget.value)}
              className="w-[9rem] border-[1px] border-lightGrayish rounded-lg p-2 focus:outline-none focus:border-secondGradient"
            />
          </div>
        </div>
        <button className="bg-darkViolet text-lightGrayish text-center px-32 py-3 rounded-xl">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default FormSection;
