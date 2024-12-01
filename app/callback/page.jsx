import { setCookie } from "../_components/CookieHandler";

function page() {
  setCookie("user-token", "Hello", {
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return <div>CallBack Page</div>;
}

export default page;
