import Link from "next/link";
import Image from "next/image";
import Logo from "./../assets/lookat-text-logo.png"

export default function Navbar() {


  return (
    <div>
      <div class="flex justify-between my-6">
        <Link href="/" className="mt-2">Home</Link>
        <Link href="/about" className="mt-2">About</Link>
        <Image 
          src={Logo}
          className="object-center sm:shrink-1"
          width="170"
        />
        <Link href="/portfolio" className="mt-2">Portfolio</Link>
        <Link href="/products" className="mt-2">Products</Link>
      </div>
    </div>
  )
}