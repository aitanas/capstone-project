import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {

  return (
    <>
      <Navbar />
        <div className="bg-ivory">
          <div className="container relative">
            <main>
              {children}
            </main>
          </div>
        </div>
      <Footer />
    </>
  )
}