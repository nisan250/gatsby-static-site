import React from "react"
// import { Link } from "gatsby"
// import styles from "./index.module.scss";
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import ArticleList from '../components/article-list'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/* <h1 className={styles.test}>Spaghetti Western</h1> */}
    <p>Welcome to your new Gatsby site.</p>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <ArticleList />

  </Layout>
)

export default IndexPage
