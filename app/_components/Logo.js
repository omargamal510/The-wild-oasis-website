import Image from "next/image";
import Link from "next/link";
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src="/icon.png"
        alt="The wild oasis"
        width="60"
        height="60"
        quality={100}
      />

      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
