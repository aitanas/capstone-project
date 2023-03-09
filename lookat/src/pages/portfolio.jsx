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
  },
  {
    title: "untitled",
    img: "/images/backpack.png",
    id: "1",
    key: 3,
  },
  {
    title: "untitled 2",
    img: "/images/backpack.png",
    id: "2",
    key: 4,
  },
];

export default function Portfolio() {
  return (
    <>
      <h1 className="text-3xl">Portfolio</h1>
      <div className="grid grid-flow-row-dense gap-4 grid-cols-[1fr_minmax(0px,1280px)_1fr]">
        {portfolioPieces.map((piece) => {
          return (
            <div key={piece.key} class="group max-w-sm overflow-hidden">
              <Image
                src={piece.img}
                alt={`${piece.title} by Natalie Shough`}
                height="200"
                width="200"
                className="transition hover:sepia"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
