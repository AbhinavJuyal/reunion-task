import React, { useState } from "react";
import { ISocketContext } from "../app";
import { useSearch } from "../context/SearchContext";
import { MdArrowDropDownCircle } from "react-icons/md";

const PriceParams = () => {
  const { minPrice, setMinPrice, maxPrice, setMaxPrice } =
    useSearch() as ISocketContext;
  return (
    <div className="flex">
      <label className="mr-6" htmlFor="min">
        <span className="mr-2 text-sm text-gray-500 font-medium">Min</span>
        <input
          className="w-[3rem] h-6 border-x-0 border-t-0 border-b-2 border-solid text-lg border-transparent outline-none font-medium focus:border-primary/50"
          type="number"
          id="min"
          value={minPrice?.toString()}
          onChange={(e) => setMinPrice(parseInt(e.target.value))}
          min="200"
          max="5000"
        />
      </label>
      <label htmlFor="max">
        <span className="mr-2 text-sm text-gray-500 font-medium">Max</span>
        <input
          className="w-[3rem] h-6 border-x-0 border-t-0 border-b-2 border-solid text-lg border-transparent outline-none font-medium focus:border-primary/50"
          type="number"
          id="max"
          value={maxPrice?.toString()}
          onChange={(e) => setMaxPrice(parseInt(e.target.value))}
          min="200"
          max="5000"
        />
      </label>
    </div>
  );
};

const Price = () => {
  const { minPrice, maxPrice } = useSearch() as ISocketContext;
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className="grow flex flex-col px-8">
      <div className="text-gray-400 text-base font-semibold mb-2">Price</div>
      <div className="flex mb-4">
        <div className="text-2xl font-medium border-none outline-none mr-4">{`$${minPrice} - $${maxPrice}`}</div>
        <button
          type="button"
          className={
            "text-primary transition-all duration-500" +
            " " +
            (dropDown && "rotate-180")
          }
          onClick={() => setDropDown((prev) => !prev)}
        >
          <MdArrowDropDownCircle size="24" />
        </button>
      </div>
      <div className="">{dropDown && <PriceParams />}</div>
    </div>
  );
};

export default Price;
