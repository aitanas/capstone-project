import Link from "next/link";
import Image from "next/image";
import Logo from "./../assets/lookat-text-logo.png";

export default function Navbar() {
  const navLink = "mt-2 nav hover:text-orange-light";

  return (
    <div className="bg-green text-ivory px-10 sticky top-0 inset-x-0 border-b-1 border-brown box-border my-0 shadow-lg">
      <div className="flex container justify-between my-0 h-20 items-center sticky object-top inset-x-0 gap-0">
        <Link href="/" className={navLink}>
          Home
        </Link>
        <Link href="/about" className={navLink}>
          About
        </Link>
        <Link href="/">
          <Image src={Logo} className="sm:shrink-1 mt-2" width="200" />
        </Link>
        <Link href="/portfolio" className={navLink}>
          Portfolio
        </Link>
        <Link href="/products" className={navLink}>
          Products
        </Link>
      </div>
    </div>
  );
}
