import Cookies from "cookie-universal";

const cookies = Cookies();

export const setCookie = (name, value, options) => {
  cookies.set(name, value, options);
};
