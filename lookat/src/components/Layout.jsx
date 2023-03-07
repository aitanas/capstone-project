import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {

  const layoutStyles = {

  }

  return (
    <div className="container my-0">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}