import Link from "next/link";
import Image from "next/image";
import Logo from "./../assets/lookat-text-logo.png"

export default function Navbar() {

  return (
    <div className="bg-green text-ivory px-10 absolute inset-x-0 top-0">
      <div className="flex container justify-between my-6 h-20 items-center relative object-top inset-x-0 gap-0">
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