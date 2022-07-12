import { ISocketContext } from "../app";
import { useSearch } from "../context/SearchContext";
import Availability from "./Availability";
import Location from "./Location";
import Price from "./Price";
import PropertyType from "./PropertyType";

const Search = () => {
  const { handleSubmit } = useSearch() as ISocketContext;

  return (
    <div className="bg-white p-6 rounded-2xl transition-all duration-1000 min-w-min">
      <form
        className="w-full h-full flex flex-wrap items-stretch"
        onSubmit={handleSubmit}
      >
        <Location />
        <div className="w-[2px] my-4 bg-gray-200"></div>
        <Availability />
        <div className="w-[2px] my-4 bg-gray-200"></div>
        <Price />
        <div className="w-[2px] my-4 bg-gray-200"></div>
        <PropertyType />
        <button type="submit" className="btn btn-primary mx-8">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
