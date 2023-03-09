import Navbar from "./Navbar";
import Footer from "./Footer";
import { Lexend } from "@next/font/google";

const lexend = Lexend({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
        <div className="bg-white">
          <Navbar />
          <div className="box-border container z-1">
            <div className="">
              <main>{children}</main>
            </div>
          </div>
          <Footer />
        </div>
    </>
  );
}
