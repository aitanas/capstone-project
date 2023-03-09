import Image from "next/image";
// import portfolioPieces from "../portfolioData";

const portfolioPieces = [
  {
    title: "untitled",
    img: "/images/backpack.png",
    id: "1",
    key: 1,
  },
  {
    title: "untitled 2",
    img: "/images/backpack.png",
    id: "2",
    key: 2,
  }
];

export default function Portfolio() {
  return (
    <>
    <h1 className="text-3xl">Portfolio</h1>
      <div className="grid justify-space-evenly columns-3 gap-4">
        {portfolioPieces.map((piece) => {
          <div key={piece.key} class="group max-w-sm overflow-hidden">
            <Image
              src={piece.img}
              alt="by natalie shough"
              height="200"
              width="200"
              className="transition hover:sepia"
            />
            <p>{piece.title} hi</p>
          </div>;
        })}
      </div>
    </>
  );
}
