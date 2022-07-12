import { IEstate, IEstateData, IParams } from "./app";
import { estateData } from "./data";

// mimcs a backend API endpoint which takes parameteres and return the filtered data.
// The promise resolves 90% of the time
let counter = 0;
export const getEstateData = async ({
  location,
  date,
  minPrice,
  maxPrice,
  propertyType,
}: IParams): Promise<IEstateData> => {
  console.log("Requesting data...", ++counter);
  return new Promise((resolve, reject) => {
    const filteredEstateData = estateData.filter((element: IEstate, idx) => {
      const dateParam = new Date(date);
      const availaibleDate = new Date(element.availability);
      return (
        (location === "All" || element.address.state === location) &&
        (propertyType === "All" || element.propertyType === propertyType) &&
        (!date || dateParam <= availaibleDate) &&
        (!minPrice || minPrice <= element.price) &&
        (!maxPrice || element.price <= maxPrice)
      );
    });
    setTimeout(() => {
      if (Math.random() < 0.9) {
        resolve(filteredEstateData);
      }
      reject("Error: Could not fetch data");
    }, 1000);
  });
};
