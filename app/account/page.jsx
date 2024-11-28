import { auth } from "../_lib/auth";
import { extractFirstName } from "../_lib/data-service";

async function page() {
  const session = await auth();

  // session?.user.name

  console.log(extractFirstName);
  return (
    <>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Hello {extractFirstName(session?.user?.name)}
      </h2>
    </>
  );
}

export default page;
