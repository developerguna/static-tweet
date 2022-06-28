import { GET_IS_MOBILE, GET_HAMBURGER_ACTIVE } from "./global.types";
export const getisMobile = () => {
  return {
    type: GET_IS_MOBILE,
  };
};

export const getisHamburgerActive = () => {
  return {
    type: GET_HAMBURGER_ACTIVE,
  };
};
