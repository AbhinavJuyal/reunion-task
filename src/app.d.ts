export type IAddress = {
  city: string;
  streetName: string;
  streetAddress: string;
  state: string;
};

export type IEstate = {
  id: number;
  price: number;
  apartmentName: string;
  image: number;
  address: IAddress;
  popular: boolean;
  dimension: string;
  beds: number;
  bathrooms: number;
  propertyType: string;
  availability: date;
};

export type IEstateData = IEstate[];

interface IParams {
  location: string;
  date: string;
  minPrice: number | undefined;
  maxPrice: number | undefined;
  propertyType: string;
}

interface ISocketContext extends IParams {
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  setMinPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
  setPropertyType: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  renderArr: IEstate[];
}
