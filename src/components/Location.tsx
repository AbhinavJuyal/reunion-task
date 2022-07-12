import React from "react";
import { ISocketContext } from "../app";
import { useSearch } from "../context/SearchContext";
import { MdArrowDropDownCircle } from "react-icons/md";

interface IProps {
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const locations: string[] = [
  "Maryland",
  "Michigan",
  "Arizona",
  "Hampshire",
  "Nevada",
  "Idaho",
  "Illinois",
  "Missouri",
  "Nebraska",
];

const Location = () => {
  const { location, setLocation } = useSearch() as ISocketContext;
  return (
    <div className="grow flex flex-col px-8">
      <div className="text-gray-400 text-base font-semibold mb-2">Location</div>
      <label htmlFor="location" className="flex">
        <select
          id="location"
          name="location"
          className="bg-transparent text-2xl font-medium border-none outline-none w-full"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <optgroup className="text-base font-medium" label="Select Location">
            <option>All</option>
            {locations.map((e, idx) => (
              <option value={e} key={idx}>
                {e}
              </option>
            ))}
          </optgroup>
        </select>
        {/* <button type="button" className="text-primary">
          <MdArrowDropDownCircle size="24" />
        </button> */}
      </label>
    </div>
  );
};

export default Location;
