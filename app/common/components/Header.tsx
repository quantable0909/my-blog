import { Link, NavLink } from 'react-router';
import { Facebook, Twitter, Instagram, Pinterest, Search } from './Icons';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <h1>
              <span className="logo-icon">ℓ</span> Lusia
            </h1>
          </Link>
        </div>

        <nav className="main-nav">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-post"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                ALL POST
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/travel"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                TRAVEL
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lifestyle"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                LIFESTYLE
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/destination"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                DESTINATION
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="social-icons">
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
          <a href="#" aria-label="Search">
            <Search />
          </a>
        </div>
      </div>
      <div className="header-divider"></div>
    </header>
  );
}
