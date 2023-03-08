import Image from "next/image";
import portfolioData from "./../portfolioData";

export default function Portfolio() {
  return (
    <>
      <div className="flex justify-space-evenly columns-3">
        {portfolioData.map((piece) => {
          <Image src={piece.img} alt={piece.title} height="200" width="200" />;
        })}
      </div>
    </>
  );
}
