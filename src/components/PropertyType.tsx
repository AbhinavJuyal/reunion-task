import { ISocketContext } from "../app";
import { useSearch } from "../context/SearchContext";

const PropertyTypes: string[] = ["Apartment", "Condo", "House", "Townhouse"];

const PropertyType = () => {
  const { propertyType, setPropertyType } = useSearch() as ISocketContext;
  return (
    <div className="grow flex flex-col px-8">
      <label
        htmlFor="propertyType"
        className="text-gray-400 text-base font-semibold mb-2"
      >
        Property Type
      </label>
      <select
        id="propertyType"
        name="propertyType"
        className="bg-transparent text-2xl font-medium border-none outline-none"
        value={propertyType}
        onChange={(e) => setPropertyType(e.target.value)}
      >
        <optgroup
          className="text-base font-medium"
          label="Select Property Type"
        >
          <option>All</option>
          {PropertyTypes.map((type, idx) => (
            <option className="text-base" value={type} key={idx}>
              {type}
            </option>
          ))}
        </optgroup>
      </select>
    </div>
  );
};

export default PropertyType;
