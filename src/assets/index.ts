import I1 from "./1.jpg";
import I2 from "./2.jpg";
import I3 from "./3.jpg";
import I4 from "./4.jpg";
import I5 from "./5.jpg";

export const obj: Record<string, string> = {
  "1": I1,
  "2": I2,
  "3": I3,
  "4": I4,
  "5": I5,
};

export const Images = (idx: string): string => obj[idx];
