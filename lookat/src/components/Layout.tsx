import Navbar from './Navbar';
import Footer from './Footer';
import './../styles/globals.css'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}