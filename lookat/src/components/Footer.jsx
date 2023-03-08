import Link from "next/link";
import Image from "next/image";
import Logo from "./../assets/lookat-logo.png";

export default function Footer() {
  const navLink = "nav hover:text-orange-dark transition-colors";

  return (
    <div className="bg-stonewash text-ivory px-10 relative inset-x-0 bottom-0 box-border py-4 mt-10">
      <div className="flex container justify-between my-6 h-20 items-center columns-3">
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
          <ul className="leading-relaxed">
            <li className={navLink}>Link 1</li>
            <li className={navLink}>Link 2</li>
          </ul>
        </div>
        <div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <p>
            Facilis sunt hic nobis similique sit itaque tenetur temporibus
            nesciunt officiis.
          </p>
        </div>
      </div>
      <div className="text-center">
        <p>
          Made with 🧡 by <strong>Aitana Shough</strong>
        </p>
      </div>
    </div>
  );
}
