import { signInAction } from "../_lib/actions";
import { auth, siginIn } from "../_lib/auth";
import LoginSpinner from "./LoginSpinner";

async function SignInButton() {
  const session = await auth();
  console.log(session);
  return (
    <form action={signInAction}>
      <button className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
        {session?.user && <LoginSpinner />}
      </button>
    </form>
  );
}

export default SignInButton;
