import { Location } from "../types";

export const getSlugName = (location: Location, index: number) => {
  return location.pathname.split("/")[index];
};
