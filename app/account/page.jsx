import { auth } from "../_lib/auth";
import { extractFirstName, getGuest } from "../_lib/data-service";

async function page() {
  const session = await auth();
  // console.log(session);

  const g = await getGuest(session.user.email);
  console.log(g);

  return (
    <>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Hello {extractFirstName(session?.user?.name)}
      </h2>
    </>
  );
}

export default page;
