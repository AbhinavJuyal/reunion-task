import Search from "../components/Search";
import SearchResult from "../components/SearchResult";

const Rent = () => {
  return (
    <>
      <h2 className="text-5xl font-semibold mb-10">
        Search properties to rent
      </h2>
      <div className="mb-10">
        <Search />
      </div>
      <SearchResult />
    </>
  );
};

export default Rent;
