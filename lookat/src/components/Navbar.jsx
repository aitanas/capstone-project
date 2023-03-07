import Link from "next/link";
import Image from "next/image";
import Logo from "./../assets/lookat-text-logo.png"

export default function Navbar() {

  return (
    <div className="bg-green text-ivory px-6">
      <div className="flex justify-between my-6 h-32">
        <Link href="/" className="mt-2 self-center">Home</Link>
        <Link href="/about" className="mt-2 self-center">About</Link>
        <Link href="/">
          <Image 
          src={Logo}
          className="sm:shrink-1 mt-2 self-center"
          width="170"
          />
        </Link>
        <Link href="/portfolio" className="mt-2 self-center">Portfolio</Link>
        <Link href="/products" className="mt-2 self-center">Products</Link>
      </div>
    </div>
  )
}