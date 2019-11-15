import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import "./about.scss"

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <h1>Hi from the About page</h1>
    <p>Welcome to page About</p>
    <Link to="/sample-page">sample-page</Link>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
