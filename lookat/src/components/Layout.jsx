import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {

  return (
    <>
      <div className="relative">
        <Navbar />
          <div className="bg-ivory box-border">
            <div className="">
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