import React from "react"
import { Link } from "gatsby"
import styles from "./about.module.scss";
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div>
      <Link to="/">Home</Link> <Link to="/about/">About</Link>
    </div>
    <h1 className={styles.testy}>About</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
