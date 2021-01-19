import React from 'react';
import { Link } from 'react-router-dom';
import githubImg from '../assets/images/GitHub.png';
import logo from '../assets/images/logo1.png';
// import '../assets/sass/components/nav.scss';
export default function NavBar() {
  return (
    <div className="nav-bar">
      <Link to="/" className="home-btn">
        <img src={logo} alt="apiapi logo" />
        <h2>The apiapi</h2>
      </Link>

      <Link to="/blog">Blog</Link>
      <Link to="/about">About</Link>
      <a href="https://documenter.getpostman.com/view/14227410/TVzXAEa4">
        Docs
      </a>

      <a href="https://github.com/apiapi-dev">
        <img src={githubImg} className="github-logo" alt="github Link" />
      </a>
    </div>
  );
}
