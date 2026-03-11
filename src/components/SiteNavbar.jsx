import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './SiteNavbar.css'
import paraslogo from "../image/paraslogo.png";

function SiteNavbar() {
  const phoneNumber = '9422147424'
  const dialNumber = '+919422147424'
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const getClassName = ({ isActive }) =>
    `nav-link nav-pill ${isActive ? 'active' : ''}`

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg site-navbar">
        <div className="container-fluid nav-shell py-2">
          <NavLink className="navbar-brand brand-mark" to="/">
            <img className="brand-logo" src={paraslogo} alt="Paras Dresses logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="siteNav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <i className="bi bi-list fs-3" />
          </button>
          <div
            className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? 'show' : ''}`}
            id="siteNav"
          >
            <ul className="navbar-nav align-items-lg-center gap-lg-2">
              <li className="nav-item">
                <NavLink className={getClassName} to="/" onClick={closeMenu}>
                  <i className="bi bi-house-door me-2" />
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={getClassName} to="/product" onClick={closeMenu}>
                  <i className="bi bi-bag-heart me-2" />
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={getClassName} to="/garments" onClick={closeMenu}>
                  <i className="bi bi-stars me-2" />
                  Garments
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={getClassName} to="/about" onClick={closeMenu}>
                  <i className="bi bi-people me-2" />
                  About Us
                </NavLink>
              </li>
              <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                <a
                  className="call-btn"
                  href={`tel:${dialNumber}`}
                  onClick={closeMenu}
                  aria-label={`Call ${phoneNumber}`}
                >
                  <i className="bi bi-telephone-fill me-2" />
                  {phoneNumber}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default SiteNavbar
