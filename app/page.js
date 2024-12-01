import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png";
import Cookie from "cookie-universal";
import { setCookie } from "./_components/CookieHandler";

export default function Page() {
  setCookie("user-token", "Hello", {
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return (
    <main className="mt-24">
      <Image
        className="object-cover object-top"
        src={bg}
        fill
        quality={80}
        placeholder="blur"
        alt="Mountains and forest with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to Omar's Office.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
