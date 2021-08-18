import React from "react";
import { Link } from "gatsby";

const Layout = ({ children }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          This is not a link
        </li>
      </ul>
      <main>{children}</main>
      <footer>I'm the footer</footer>
    </div>
  );
};

export default Layout;