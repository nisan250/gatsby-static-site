import React from "react"
import styles from "./404.module.scss";
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 className={styles.header}>Page not found</h1>
    <p className={styles.paragraph}>The Page you are looking for does not exists. <span>test</span></p>
  </Layout>
)

export default NotFoundPage
