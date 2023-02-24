import Layout from '../components/Layout';
import About from '../components/about/About';
import Portfolio from './portfolio/Portfolio';
import Control from '../components/Control';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './products/ProductList';
import Home from './Home';

export default function App() {
  return (
    <Layout>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/products" element={<ProductList />} />
          </Routes>
          <Portfolio />
      </Router>
    </Layout>
  )
}