import Navbar from './Navbar';
import Footer from './Footer';
import { DM_Sans } from '@next/font/google'

const dmSans = DM_Sans({ 
  weight: ['400', '500', '700'],
  subsets: ['latin']
})

export default function Layout({ children }) {

  return (
    <>
      <div className={`${dmSans.className}`}>
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