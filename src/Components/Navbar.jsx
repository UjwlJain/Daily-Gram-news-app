import React, { useState } from 'react';

const Navbar = ({ setCategory }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-body">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className="badge bg-light text-primary">DAILY-GRAM</span></a>
        <button className="navbar-toggler" type="button" onClick={handleNavCollapse} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setCategory("general")}>General</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setCategory("technology")}>Technology</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setCategory("business")}>Business</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setCategory("health")}>Health</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setCategory("sports")}>Sports</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setCategory("entertainment")}>Entertainment</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
