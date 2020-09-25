import React, { useState } from 'react';
import { Link } from 'react-router-dom'
const navLinks = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Contact Us',
    path: '/contact-us'
  },
  {
    title: 'Blog',
    path: '/blog'
  },
  {
    title: 'Login',
    path: '/login'
  },
]
/*
const Navigation = () => {
    return (
        <nav className="site-navigation">
            <span>My React Blog</span>
            <ul>
                {
                    navLinks.map((link, index) => {
                        return (
                            <li key={index}>
                                <Link to={link.path}>{link.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}
*/
const Navigation = () => {
  const [show, setShow] = useState(false)
  const collpse = (e) => {
    //console.log("events ::::", e);
    setShow(!show)
  }
  return (
    <header className="">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="index.html"><h2>Sixteen <em>Clothing</em></h2></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              {navLinks.map((link, index) => {
                return (
                  <li key={index} className={`nav-item ${index === 0 ? "active" : ""}`}>
                    <Link className="nav-link gray highlightTextIn" to={link.path}>{link.title}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Navigation;