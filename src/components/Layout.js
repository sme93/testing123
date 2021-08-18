import React from "react";
import { Link } from "gatsby";
import Footer from ".//footer.js";

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
        <li>This is not a link</li>
      </ul>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
