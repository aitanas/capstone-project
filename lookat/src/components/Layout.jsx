import Navbar from './Navbar';
import Footer from './Footer';
import { Fraunces } from '@next/font/google';
import { Lexend } from '@next/font/google';
import { motion } from "framer-motion";

const fraunces = Fraunces({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

const lexend = Lexend({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

export default function Layout({ children }) {

  return (
    <>
      <style jsx global>{`
        h1 {
          font-family: ${fraunces.style.fontFamily};
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
          font-weight: 400;
          color: #200502;
        }
      `}
      </style>

      <div className={`${lexend.className}`}>
        <Navbar />
          <div className="bg-white box-border">
            <div className="container h-screen pt-6">
              <main>
                {children}
              </main>
            </div>
          </div>
        <Footer />
      </div>
    </>
  )
}