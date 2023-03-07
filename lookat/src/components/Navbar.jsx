import Link from "next/link";
import Image from "next/image";
import Logo from "./../assets/lookat-text-logo.png"

export default function Navbar() {

  return (
    <div className="bg-green text-ivory px-10 sticky top-0 inset-x-0 border-b-1 border-brown box-border">
      <div className="flex container justify-between my-6 h-20 items-center sticky object-top inset-x-0 gap-0">
        <Link href="/" className="mt-2">Home</Link>
        <Link href="/about" className="mt-2">About</Link>
        <Link href="/">
          <Image 
          src={Logo}
          className="sm:shrink-1 mt-2"
          width="200"
          />
        </Link>
        <Link href="/portfolio" className="mt-2">Portfolio</Link>
        <Link href="/products" className="mt-2">Products</Link>
      </div>
    </div>
  )
}