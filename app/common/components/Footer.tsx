import { Link } from 'react-router';
import { Facebook, Twitter, Instagram, Pinterest } from './Icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/">
              <h2>
                <span className="logo-icon">ℓ</span> Lusia
              </h2>
            </Link>
            <p>Exploring the world, one story at a time.</p>
          </div>

          <div className="footer-links">
            <div className="footer-nav">
              <h3>Navigation</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/all-post">All Posts</Link>
                </li>
                <li>
                  <Link to="/travel">Travel</Link>
                </li>
                <li>
                  <Link to="/lifestyle">Lifestyle</Link>
                </li>
                <li>
                  <Link to="/destination">Destination</Link>
                </li>
              </ul>
            </div>

            <div className="footer-categories">
              <h3>Categories</h3>
              <ul>
                <li>
                  <Link to="/travel">Travel</Link>
                </li>
                <li>
                  <Link to="/lifestyle">Lifestyle</Link>
                </li>
                <li>
                  <Link to="/destination">Destination</Link>
                </li>
                <li>
                  <Link to="/photography">Photography</Link>
                </li>
                <li>
                  <Link to="/food">Food & Cuisine</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" aria-label="Pinterest">
                <Pinterest />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Lusia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
