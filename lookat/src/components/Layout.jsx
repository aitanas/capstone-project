import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {

  const layoutStyles = {
    
  }

  return (
    <div className="container">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}