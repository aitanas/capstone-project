import Image from "next/image";
import { useState } from "react";
import portfolioPieces from "../portfolioData";
import Link from "next/link";

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
      <h1 className="text-3xl bg-ivory rounded-full p-4 px-8 my-6">
        Portfolio
      </h1>
      <div className="mb-4 pb-4 mx-auto w-11/12">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ad
        temporibus vel quam sequi repellendus libero laborum illum laboriosam
        sed accusamus perferendis, expedita atque corporis inventore excepturi
        dignissimos enim quod. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Repudiandae ad temporibus vel quam sequi repellendus
        libero laborum illum laboriosam sed accusamus perferendis, expedita
        atque corporis inventore excepturi dignissimos enim quod.
      </div>
      <div className="grid gap-2 grid-cols-2 lg:grid-cols-3">
        {portfolioPieces.map((piece) => {
          return (
            <Link href={`/portfolio/${piece.id}`}>
              <div
                key={piece.key}
                className={`max-w-sm overflow-hidden w-full h-full ${piece.rows}`}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                {piece.isHovering ? (
                  <Image
                    src={piece.url}
                    alt={`${piece.title} by Natalie Shough`}
                    className="sepia transition object-fill"
                    height="300"
                    width={piece.width}
                  />
                ) : (
                  <Image
                    src={piece.url}
                    alt={`${piece.title} by Natalie Shough`}
                    className="transition object-fill hover:brightness-75"
                    height="300"
                    width={piece.width}
                  />
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export function getAllPortfolioIds() {
  return portfolioPieces.map((piece) => {
    return {
      params: {
        id: piece.id,
      },
    };
  });
}

export function getPortfolioData(id) {
  return portfolioPieces.filter((piece) => piece.id === id)[0];
}