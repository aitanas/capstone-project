import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {

  return (
    <>
      <div className="relative">
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