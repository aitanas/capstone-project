import { getAllPortfolioIds } from "../portfolio";
import { getPortfolioData } from "../portfolio";
import Image from "next/image";

export default function PortfolioDetail({ piece }) {
  return (
      <div className="align-self-center mt-6">
        <h1 className="text-4xl text-center">{piece.title}</h1>
        <Image
          src={piece.url}
          height="200"
          width={piece.width}
          alt={piece.title}
          className="mx-auto rounded-lg ring-ivory ring-2 ring-offset-4 mt-6 mb-20"
        />
      </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPortfolioIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const piece = getPortfolioData(params.id);
  return {
    props: {
      piece,
    },
  };
}
