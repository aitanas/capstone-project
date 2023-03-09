import Link from "next/link";
import Image from "next/image";
import Logo from "./../assets/cat-logo-01.svg";

export default function Navbar() {
  const navLink = "mt-2 nav hover:text-orange-dark hover:text-decoration hover:decoration-offset-2 transition-colors block rounded-full hover:bg-ivory";

  return (
    <div className="bg-green text-ivory px-10 sticky top-0 inset-x-0 border-b-1 border-brown box-border my-0 shadow-lg z-4">
      <div className="flex container justify-between my-0 h-20 items-center sticky object-top inset-x-0 gap-0 z-5">
        <Link href="/" className={navLink}>
          Home
        </Link>
        <Link href="/about" className={navLink}>
          About
        </Link>
        <Link href="/">
          <Image src={Logo} className="sm:shrink-1 mt-2" width="70" />
        </Link>
        <Link href="/portfolio" className={navLink}>
          Portfolio
        </Link>
        <Link href="/products" className={navLink}>
          Shop
        </Link>
      </div>
    </div>
  );
}
