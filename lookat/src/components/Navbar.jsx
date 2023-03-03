import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <h1>Natalie Shough</h1>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/products">Products</Link>
      </div>
    </>
  )
}