import React from "react"
// import { Link } from "gatsby"
// import styles from "./about.module.scss";
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    {/* <h1 className={styles.testy}>About</h1> */}
    <p>Welcome to page 2</p>
  </Layout>
)

export default SecondPage
