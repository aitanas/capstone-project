import Image from "next/image";
import { useState } from "react";
// import portfolioPieces from "../portfolioData";

const portfolioPieces = [
  {
    title: "untitled",
    img: "/images/backpack.png",
    id: "1",
    key: 1,
    isHovering: false,
  },
  {
    title: "untitled 2",
    img: "/images/backpack.png",
    id: "2",
    key: 2,
    isHovering: false,
  },
  {
    title: "untitled",
    img: "/images/backpack.png",
    id: "1",
    key: 3,
    isHovering: false,
  },
  {
    title: "untitled 2",
    img: "/images/backpack.png",
    id: "2",
    key: 4,
    isHovering: false,
  },
];

export default function Portfolio() {
  // code for portfolio image hover
  // const [isHovering, setIsHovered] = useState(false);
  // const onMouseEnter = () => setIsHovered(true);
  // const onMouseLeave = () => setIsHovered(false);

  const [isHovering, setIsHovered] = useState(portfolioPieces);

  const onPieceHover = (key, isHovering) => {
    setIsHovered(() => {
      return portfolioPieces.filter((piece) => piece.key === key)[0]
        }
      );
    };
  //products.filter((product) => product.id === id)[0];

  return (
    <>
      <h1 className="text-3xl">Portfolio</h1>
      <div className="grid grid-flow-row-dense gap-4 grid-cols-2 lg:grid-cols-4">
        {portfolioPieces.map((piece) => {
          return (
            <div
              key={piece.key}
              class="max-w-sm overflow-hidden w-full h-full"
              onMouseEnter={() => onPieceHover(piece.key, true)}
              onMouseLeave={() => onPieceHover(piece.key, false)}
            >
              {piece.isHovering ? (
                <Image
                  src={piece.img}
                  alt={`${piece.title} by Natalie Shough`}
                  height="200"
                  width="200"
                  className="sepia transition"
                />
              ) : (
                <Image
                  src={piece.img}
                  alt={`${piece.title} by Natalie Shough`}
                  height="200"
                  width="200"
                  className="transition"
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
