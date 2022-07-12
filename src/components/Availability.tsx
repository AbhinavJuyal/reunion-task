import React from "react";
import { ISocketContext } from "../app";
import { useSearch } from "../context/SearchContext";
import { AiFillCloseCircle, AiFillCalendar } from "react-icons/ai";

interface IProps {
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
}

const Availability = () => {
  const { date, setDate } = useSearch() as ISocketContext;
  // input type=date needs yyyy-mm-dd format
  return (
    // check index.css to see more css for this component
    <div className="flex flex-col px-8">
      <div className="text-gray-400 text-base font-semibold mb-2">When</div>
      <div className="flex justify-between items-center">
        <label
          id="cover"
          htmlFor="availability"
          className="relative flex items-center cursor-pointer"
        >
          <span className="text-2xl font-medium border-none outline-none mr-10 min-w-[250px]">
            {!date ? "Select Move-in Date" : date}
          </span>
          {!date && (
            <div className="text-primary">
              <AiFillCalendar size="24" />
            </div>
          )}
          <input
            id="availability"
            name="availability"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border-none outline-none w-0 p-0 m-0"
          />
        </label>
        {date && (
          <button
            type="button"
            className="text-primary"
            onClick={(e) => setDate("")}
          >
            <AiFillCloseCircle size="24" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Availability;
