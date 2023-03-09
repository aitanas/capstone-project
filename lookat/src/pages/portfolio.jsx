import Image from "next/image";
import { useState } from "react";
import portfolioPieces from "../portfolioData";

export default function Portfolio() {
  // code for portfolio image hover
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);


  // const onPieceHover = (key, isHovering) => {
  //   setIsHovered(() => {
  //     return portfolioPieces.filter((piece) => piece.key === key)[0]
  //       }
  //     );
  //   };
  //products.filter((product) => product.id === id)[0];

  return (
    <>
      <h1 className="text-3xl mt-6 bg-ivory rounded-full p-4 px-8">Portfolio</h1>
      <div className="grid grid-flow-row-dense gap-4 grid-cols-2 lg:grid-cols-4">
        {portfolioPieces.map((piece) => {
          return (
            <div
              key={piece.key}
              className="max-w-sm overflow-hidden w-full h-full"
              // onMouseEnter={() => onMouseEnter}
              // onMouseLeave={() => onMouseLeave}
            >
              {piece.isHovering ? (
                <Image
                  src={piece.url}
                  alt={`${piece.title} by Natalie Shough`}
                  height="300"
                  width="300"
                  className="sepia transition"
                />
              ) : (
                <Image
                  src={piece.url}
                  alt={`${piece.title} by Natalie Shough`}
                  height="300"
                  width="300"
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


