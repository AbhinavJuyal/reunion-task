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

const SocketContext = createContext<ISocketContext | {}>({});

const dateDefValue: string = new Date()
  .toLocaleString()
  .split(",")[0]
  .split("/")
  .reverse()
  .join("-")
  .toString();

let counter = 0;
export const SearchProvider = ({ children }: IProps) => {
  const [location, setLocation] = useState<string>("All");
  const [date, setDate] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number | undefined>(200);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(5000);
  const [propertyType, setPropertyType] = useState<string>("All");
  const [renderArr, setRenderArr] = useState<IEstate[]>([]);

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
    console.log("here1");
    fetchData();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("here2");
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
