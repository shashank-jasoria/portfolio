import React from "react";

import Hamburger from "./Hamburger";
import routes from "./data/routes";
import Link from "next/link";

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = ({ handleView }) => (
  <header id="header">
    <h1 className="index-link">
      {routes
        .filter((l) => l.index)
        .map((l) => (
          <Link key={l.label} href={l.path}>
            {l.label}
          </Link>
        ))}
    </h1>
    <nav className="links">
      <ul>
        {routes
          .filter((l) => !l.index)
          .map((l) => (
            <li key={l.label}>
              <Link href={l.path}>{l.label}</Link>
            </li>
          ))}
      </ul>
    </nav>
    <div className="web_view">
      <button className="web_view-button" onClick={(e) => handleView(e)}>
        WEB VIEW
      </button>
    </div>
    <Hamburger />
  </header>
);

export default Navigation;
