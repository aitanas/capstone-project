import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <h1 className="text-2xl font-bold mx-4">Natalie Shough</h1>
      <div class="flex justify-between">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/products">Products</Link>
      </div>
    </div>
  )
}