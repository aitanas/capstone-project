import Link from "next/link";
import Image from "next/image";
import Logo from "./../assets/lookat-logo.png"

export default function Footer() {
  return (
    <div className="bg-stonewash text-ivory px-10 absolute inset-x-0 bottom-0">
      <div className="flex container justify-between my-6 h-12 items-center relative object-top inset-x-0 gap-0 columns-3">
        <div>
          <Link href="/">
            <Image
            src={Logo}
            className="sm:shrink-1 mt-2"
            width="100"
            />
          </Link>
        </div>
        <div>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
        <div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <p>Facilis sunt hic nobis similique sit itaque tenetur temporibus nesciunt officiis.</p>
        </div>
      </div>
    </div>
  )
}