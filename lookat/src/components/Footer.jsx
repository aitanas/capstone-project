import Link from "next/link";
import Image from "next/image";
import Logo from "./../assets/lookat-logo.png"

export default function Footer() {
  return (
    <div className="bg-stonewash text-ivory px-10 relative inset-x-0 bottom-0 box-border py-4">
      <div className="flex container justify-between my-6 h-22 items-center columns-3">
        <div>
          <Link href="/">
            <Image
            src={Logo}
            className="sm:shrink-1 mt-2 object-bottom"
            width="100"
            />
          </Link>
        </div>
        <div>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
          </ul>
        </div>
        <div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <p>Facilis sunt hic nobis similique sit itaque tenetur temporibus nesciunt officiis.</p>
        </div>
      </div>
      <div className="text-center">
        <p>Made with love by <strong>Aitana Shough</strong></p>
      </div>
    </div>
  )
}