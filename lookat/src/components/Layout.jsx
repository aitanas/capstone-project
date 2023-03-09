import Navbar from "./Navbar";
import Footer from "./Footer";
import { Fraunces, Lexend, Unbounded } from "@next/font/google";

const fraunces = Fraunces({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const lexend = Lexend({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const unbounded = Unbounded({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Layout({ children }) {
  return (
    <>
      <style jsx global>
        {`
          h1 {
            font-weight: 700;
            color: #92381b;
            margin-bottom: 1rem;
          }

          .nav {
            font-weight: 700;
            text-transform: lowercase;
            font-size: 17px;
            padding: 10px;
          }

          html {
            font-family: ${lexend.style.fontFamily};
            font-weight: 400;
            color: #200502;
          }
        `}
      </style>
      <html className="scroll-smooth">
        <div className="bg-white">
          <Navbar />
          <div className="box-border container z-1">
            <div className="">
              <main>{children}</main>
            </div>
          </div>
          <Footer />
        </div>
      </html>
    </>
  );
}
