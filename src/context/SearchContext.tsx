import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback,
} from "react";
import toast from "react-hot-toast";
import { IEstate, ISocketContext } from "../app";
import { getEstateData } from "../promise";

interface IProps {
  children: React.ReactNode;
}

// React Context to handle all the filtering mechanism, so that prop drilling doesn't becomes a issue.
// All the filtering parameters have an default value which together gives all property data on the     screen.
const SocketContext = createContext<ISocketContext | {}>({});

export const SearchProvider = ({ children }: IProps) => {
  const [location, setLocation] = useState<string>("All"); // state
  const [date, setDate] = useState<string>(""); // the move-in date
  const [minPrice, setMinPrice] = useState<number | undefined>(200); // min price amount
  const [maxPrice, setMaxPrice] = useState<number | undefined>(5000); // max price amount
  const [propertyType, setPropertyType] = useState<string>("All"); // property type
  const [renderArr, setRenderArr] = useState<IEstate[]>([]); // resulting array after filtering

  const fetchData = useCallback(() => {
    getEstateData({ location, date, minPrice, maxPrice, propertyType })
      .then((data) => {
        let tempArr: IEstate[] = [];
        data.forEach((item: IEstate) => {
          item.popular ? tempArr.splice(0, 0, item) : tempArr.push(item);
        });
        setRenderArr(tempArr);
      })
      .catch((err) => {
        toast.error("Connection Lost. Please try again in few minutes!");
      });
  }, [location, date, minPrice, maxPrice, propertyType, getEstateData]);

  useEffect(() => {
    // requesting data with default values when the entire context loads for the first time.
    fetchData();
  }, []);

  /**
   * OnSubmit Event Handler for Search Form
   * @param e
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchData();
  };

  const value: ISocketContext = {
    location,
    setLocation,
    date,
    setDate,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    propertyType,
    setPropertyType,
    handleSubmit,
    renderArr,
  };
  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SocketContext);
};
