/*
schema
{
        id: number, (100 - 999)
        price: number, (200, 5000)
        apartmentName: string,
        image: number, (1-6)
        address: {
          streetAddress: string.
          city: string,
          streetName: string,
          state: string,
        },
        popular: boolean, (0,1)
        dimension: string,
        beds: number, (1-5)
        bathrooms: number, (1-5)
        propertyType: string, 
        availability: date,
      }
      
      l === location, (address.state)
      d =< availability
      low <= price <= high
      p === propertyType

*/
const address = [
  {
    streetAddress: "368 Denesik Ports",
    streetName: "Sophia Valley",
    city: "Huldafort",
    state: "Maryland",
  },
  {
    streetAddress: "417 Gust Cliff",
    streetName: "Kiara Falls",
    city: "Lukasstad",
    state: "Michigan",
  },
  {
    streetAddress: "94364 Delta Grove",
    streetName: "Genoveva Parkway",
    city: "Turcottestad",
    state: "Michigan",
  },
  {
    streetAddress: "982 Danyka Keys",
    streetName: "Mylene Isle",
    city: "Lake Avastad",
    state: "Arizona",
  },
  {
    streetAddress: "5110 Rempel Passage",
    streetName: "Rudy Drive",
    city: "Boganchester",
    state: "New Hampshire",
  },
  {
    streetAddress: "32943 Bartell Plaza",
    streetName: "Thea Branch",
    city: "Gerhardborough",
    state: "Nevada",
  },
  {
    streetAddress: "830 Burley Trafficway",
    streetName: "Lynch Ford",
    city: "Aldenton",
    state: "Idaho",
  },
  {
    streetAddress: "6452 Wisoky Loop",
    streetName: "Runolfsson Dam",
    city: "New Ethyl",
    state: "Illinois",
  },
  {
    streetAddress: "4757 Judy Courts",
    streetName: "D'angelo Stravenue",
    city: "Port Destiney",
    state: "Missouri",
  },
  {
    streetAddress: "20358 Parisian Light",
    streetName: "Fadel Valleys",
    city: "East Jaylinborough",
    state: "Nebraska",
  },
];

const availability = [
  "2022-07-14",
  "2022-07-16",
  "2022-08-16",
  "2022-09-16",
  "2022-10-20",
  "2022-11-24",
  "2023-01-12",
  "2023-01-20",
  "2023-03-06",
  "2023-04-29",
];

const dimensions = ["5x7", "6x8", "7x8", "8x10", "9x11", "10x12"];

const propertyTypes = ["Apartment", "Condo", "House", "Townhouse"];

const apartmentNames = [
  "Lakeview Estate",
  "United Units",
  "Vista Views",
  "Honest Homes",
  "Parkview Plaza",
  "La Maison",
];

const json = [];

const random = (condition) => {
  return Math.floor(Math.random() * condition);
};

for (let i = 1; i < 30; ++i) {
  const price = random(5000 - 200) + 200;
  const apartmentName = apartmentNames[random(apartmentNames.length)];
  const addressIndex = random(address.length);
  const addressObj = address[addressIndex];
  const popular = random(2) === 1 ? true : false;
  const dimension = dimensions[random(dimensions.length)];
  const beds = random(5) + 1;
  const bathrooms = random(5) + 1;
  const image = random(5) + 1;
  const id = random(999 - 100) + 1;
  const propertyType = propertyTypes[random(propertyTypes.length)];
  const availabilityIndex = random(availability.length);
  const availabilityDate = availability[availabilityIndex];
  const jsonObj = {
    id,
    price,
    apartmentName,
    image,
    address: addressObj,
    popular,
    dimension,
    beds,
    bathrooms,
    propertyType,
    availability: availabilityDate,
  };
  json.push(jsonObj);
}

console.log(json);
