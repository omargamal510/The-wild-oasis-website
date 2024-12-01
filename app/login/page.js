import LoginSpinner from "../_components/LoginSpinner";
import SignInButton from "../_components/SignInButton";
import { auth } from "../_lib/auth";

async function page() {
  return (
    <>
      <div className="flex mt-10 items-center flex-col gap-10">
        <h2 className="text-3xl font-semibold">
          Signin to access your guest area
        </h2>

        <SignInButton />
      </div>
    </>
  );
}

export default page;
