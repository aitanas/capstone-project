import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <h1>Natalie Shough</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/products">Products</Link>
      </div>
    </>
  )
}