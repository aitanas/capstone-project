import Link from "next/link";
import Image from "next/image";
import Portrait from "./../assets/natalie-portrait.png";

export default function About() {
  return (
    <div className="columns-2 gap-8">
      <div>
        <Image
          src={Portrait}
          width="300"
          className="w-full aspect-auto rounded-lg  ring-ivory ring-4"
        />
      </div>
      <div className="content-center">
        <h1 className="text-5xl">About</h1>
        <p className="my-4">
          <strong>Natalie Shough</strong> is a designer and creative based in
          the city of Portland, Oregon. With a passion for visual storytelling
          and a keen eye for detail, Natalie's approach to design is
          characterized by a focus on functionality, simplicity, and innovation.
          She believes that great design should not only look beautiful but also
          solve problems and enhance user experience. When she's not busy
          crafting visual identities, Natalie can be found exploring the natural
          beauty of the Oregon coast or indulging in her love of modern art and
          photography.
        </p>
        <p>
          <strong>Lookat</strong> was born out of Natalie's love for design and
          her passion for creating products that inspire joy and creativity.
          Lookat's range of stickers and stationery are designed with a playful
          sensibility that captures the essence of Natalie's design philosophy.
          From charming animal-themed stickers to colorful stationery sets,
          Lookat's products are perfect for anyone looking to add a touch of
          whimsy and creativity to their lives.{" "}
        </p>
      </div>
    </div>
  );
}
