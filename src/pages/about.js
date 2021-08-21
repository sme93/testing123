import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <title>Not the Home Page</title>
      <h1 className="fancy">This is my about page</h1>
    </Layout>
  );
};

export default IndexPage;
